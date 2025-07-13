from pymongo import MongoClient
import gridfs
import logging
from datetime import datetime
import os
from dotenv import load_dotenv
from typing import Optional, List
from pymongo.errors import ConnectionFailure
import time
from urllib.parse import urlparse
import pymongo

load_dotenv()
logger = logging.getLogger(__name__)

# Log PyMongo version for debugging
logger.info(f"Using PyMongo version: {pymongo.__version__}")

# Database connection setup
MONGO_URI = os.getenv("MONGODB_URL", "mongodb+srv://snapfix:Kvq1UydKEusfTQel@cluster0.mongodb.net/snapfix?retryWrites=true&w=majority")
DB_NAME = os.getenv("MONGODB_NAME", "snapfix")

# Parse database name from MONGO_URI if provided
parsed_uri = urlparse(MONGO_URI)
if parsed_uri.path and parsed_uri.path.strip("/"):
    DB_NAME = parsed_uri.path.strip("/")

# Global database connection
client: Optional[MongoClient] = None
db = None
fs = None

def initialize_db(max_retries=3, retry_delay=5):
    """Initialize the MongoDB connection and GridFS with retry logic"""
    global client, db, fs
    for attempt in range(max_retries):
        try:
            client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
            # Test connection
            client.admin.command('ping')
            db = client[DB_NAME]
            fs = gridfs.GridFS(db)
            logger.info(f"Database connection established to {DB_NAME}")
            return
        except ConnectionFailure as e:
            logger.error(f"Failed to connect to MongoDB (attempt {attempt + 1}/{max_retries}): {str(e)}")
            if attempt < max_retries - 1:
                time.sleep(retry_delay * (2 ** attempt))  # Exponential backoff
            else:
                logger.error("Max retries reached. Could not connect to MongoDB.")
                raise RuntimeError(f"Failed to connect to MongoDB after {max_retries} attempts: {str(e)}")
        except Exception as e:
            logger.error(f"Unexpected error during MongoDB initialization: {str(e)}")
            raise

def get_db():
    """Get the database connection"""
    global db
    if db is None:
        initialize_db()
    if db is None:
        raise RuntimeError("Database connection could not be established")
    return db

def get_fs():
    """Get the GridFS instance"""
    global fs
    if fs is None:
        initialize_db()
    if fs is None:
        raise RuntimeError("GridFS could not be initialized")
    return fs

def store_issue(
    issue_id: str,
    image_content: bytes,
    description: str,
    address: str,
    latitude: float,
    longitude: float,
    issue_type: str,
    severity: str,
    report: dict,
    category: str,
    priority: str,
    report_id: str,
    status: str,
    authority_email: List[str] = None,
    authority_name: List[str] = None,
    timestamp_formatted: str = None,
    timezone_name: str = None
) -> str:
    """
    Store an issue in MongoDB and return the image ID.
    """
    try:
        db = get_db()
        fs = get_fs()

        # Validate required fields
        required_fields = {
            "issue_type": issue_type,
            "description": description,
            "severity": severity,
            "category": category,
            "priority": priority,
            "report_id": report_id,
            "status": status
        }
        missing_fields = [k for k, v in required_fields.items() if not v]
        if missing_fields:
            raise ValueError(f"Missing required fields: {missing_fields}")

        # Validate authority fields
        if not authority_email or not authority_name or None in authority_email or None in authority_name:
            authority_email = ["snapfix@momntumai.com"]
            authority_name = ["City Department"]
            logger.warning(f"No valid authorities provided for issue {issue_id}. Using defaults.")
        elif len(authority_email) != len(authority_name):
            raise ValueError("authority_email and authority_name lists must have the same length")

        # Store the image in GridFS
        image_id = fs.put(
            image_content,
            filename=f"{issue_id}.jpg",
            content_type="image/jpeg"
        )

        # Create issue document with fallback values
        issue_document = {
            "_id": issue_id,
            "description": description,
            "address": address or "Unknown Address",
            "latitude": latitude,
            "longitude": longitude,
            "issue_type": issue_type,
            "severity": severity,
            "image_id": str(image_id),
            "status": status,
            "report": report or {"message": "No report generated"},
            "category": category,
            "priority": priority,
            "report_id": report_id,
            "timestamp": datetime.now().isoformat(),
            "authority_email": authority_email,
            "authority_name": authority_name,
            "timestamp_formatted": timestamp_formatted or datetime.now().strftime("%Y-%m-%d %H:%M"),
            "timezone_name": timezone_name or "UTC",
            "decline_reason": None
        }

        # Insert issue into MongoDB
        db.issues.insert_one(issue_document)
        logger.info(f"Stored issue {issue_id} with image ID {image_id}, authorities: {authority_name}")
        return str(image_id)
    except Exception as e:
        logger.error(f"Failed to store issue {issue_id}: {str(e)}", exc_info=True)
        raise

def update_pending_issue(issue_id: str, report: dict, decline_reason: str) -> bool:
    """
    Update a pending issue with a new report and decline reason.
    """
    try:
        db = get_db()

        # Validate report
        if not report:
            raise ValueError("Report cannot be empty")

        result = db.issues.update_one(
            {"_id": issue_id, "status": "pending"},
            {
                "$set": {
                    "report": report,
                    "decline_reason": decline_reason,
                    "timestamp": datetime.now().isoformat()
                }
            }
        )
        if result.modified_count == 0:
            logger.warning(f"No pending issue found with ID {issue_id}")
            return False
        logger.info(f"Updated pending issue {issue_id}")
        return True
    except Exception as e:
        logger.error(f"Failed to update pending issue {issue_id}: {str(e)}", exc_info=True)
        raise

def get_issues() -> list:
    """
    Retrieve all issues from MongoDB.
    """
    try:
        db = get_db()
        issues = list(db.issues.find().sort("timestamp", -1))
        # Ensure default values and list conversion for authority fields
        for issue in issues:
            issue["issue_type"] = issue.get("issue_type", "Unknown Issue")
            issue["description"] = issue.get("description", "No description")
            issue["address"] = issue.get("address", "Unknown Address")
            issue["severity"] = issue.get("severity", "Medium")
            issue["category"] = issue.get("category", "Public")
            issue["priority"] = issue.get("priority", "Medium")
            # Clean authority_email
            authority_email = issue.get("authority_email", ["snapfix@momntumai.com"])
            if isinstance(authority_email, list):
                authority_email = [str(email) for email in authority_email if email is not None and isinstance(email, str)]
                if not authority_email:
                    authority_email = ["snapfix@momntum-ai.com"]
            else:
                authority_email = [str(authority_email)] if authority_email else ["snapfix@momntumai.com"]
            issue["authority_email"] = authority_email
            # Clean authority_name
            authority_name = issue.get("authority_name", ["City Department"])
            if isinstance(authority_name, list):
                authority_name = [str(name) for name in authority_name if name is not None and isinstance(name, str)]
                if not authority_name:
                    authority_name = ["City Department"]
            else:
                authority_name = [str(authority_name)] if authority_name else ["City Department"]
            issue["authority_name"] = authority_name
            issue["timestamp_formatted"] = issue.get("timestamp_formatted", datetime.now().strftime("%Y-%m-%d %H:%M"))
            issue["timezone_name"] = issue.get("timezone_name", "UTC")
        return issues
    except Exception as e:
        logger.error(f"Failed to retrieve issues: {str(e)}", exc_info=True)
        raise

def get_report(issue_id: str) -> dict:
    """
    Retrieve a single issue by ID.
    """
    try:
        db = get_db()
        issue = db.issues.find_one({"_id": issue_id})
        if not issue:
            logger.warning(f"No issue found with ID {issue_id}")
            return None
        # Ensure default values and list conversion
        issue["issue_type"] = issue.get("issue_type", "Unknown Issue")
        issue["description"] = issue.get("description", "No description")
        issue["address"] = issue.get("address", "Unknown Address")
        issue["severity"] = issue.get("severity", "Medium")
        issue["category"] = issue.get("category", "Public")
        issue["priority"] = issue.get("priority", "Medium")
        # Clean authority_email
        authority_email = issue.get("authority_email", ["snapfix@momntum-ai.com"])
        if isinstance(authority_email, list):
            authority_email = [str(email) for email in authority_email if email is not None and isinstance(email, str)]
            if not authority_email:
                authority_email = ["snapfix@momntumai.com"]
        else:
            authority_email = [str(authority_email)] if authority_email else ["snapfix@momntumai.com"]
        issue["authority_email"] = authority_email
        # Clean authority_name
        authority_name = issue.get("authority_name", ["City Department"])
        if isinstance(authority_name, list):
            authority_name = [str(name) for name in authority_name if name is not None and isinstance(name, str)]
            if not authority_name:
                authority_name = ["City Department"]
        else:
            authority_name = [str(authority_name)] if authority_name else ["City Department"]
        issue["authority_name"] = authority_name
        issue["timestamp_formatted"] = issue.get("timestamp_formatted", datetime.now().strftime("%Y-%m-%d %H:%M"))
        issue["timezone_name"] = issue.get("timezone_name", "UTC")
        return issue
    except Exception as e:
        logger.error(f"Failed to retrieve issue {issue_id}: {str(e)}", exc_info=True)
        raise

def update_issue_status(issue_id: str, status: str) -> bool:
    """
    Update the status of an issue.
    """
    try:
        db = get_db()

        valid_statuses = ["pending", "accepted", "rejected", "completed"]
        if status not in valid_statuses:
            raise ValueError(f"Invalid status. Must be one of {valid_statuses}")

        result = db.issues.update_one(
            {"_id": issue_id},
            {"$set": {"status": status, "timestamp": datetime.now().isoformat()}}
        )
        if result.modified_count == 0:
            logger.warning(f"No issue found with ID {issue_id}")
            return False
        logger.info(f"Updated status for issue {issue_id} to {status}")
        return True
    except Exception as e:
        logger.error(f"Failed to update issue {issue_id} status: {str(e)}", exc_info=True)
        raise