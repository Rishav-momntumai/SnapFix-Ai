from pymongo import MongoClient
import gridfs
import logging
from datetime import datetime
import os
from dotenv import load_dotenv
from utils.location import get_authority
from utils.timezone_utils import get_timezone_name

load_dotenv()
logger = logging.getLogger(__name__)
MONGO_URI = os.getenv("MONGO_URI") or "mongodb://localhost:27017"
client = MongoClient(MONGO_URI)
db = client["snapfix"]
fs = gridfs.GridFS(db)

def store_issue(issue_id, image_content, description, address, latitude, longitude, issue_type, severity, report, category, priority, report_id, status="200"):
    try:
        image_id = fs.put(image_content, filename=f"{issue_id}.jpg")
        db.issues.insert_one({
            "_id": issue_id,
            "description": description,
            "address": address,
            "latitude": latitude,
            "longitude": longitude,
            "issue_type": issue_type,
            "severity": severity,
            "image_id": str(image_id),
            "status": status,
            "report": report,
            "category": category,
            "priority": priority,
            "report_id": report_id,
            "timestamp": datetime.now().isoformat(),
            "authority_email": get_authority(address, issue_type, latitude, longitude, category),
            "authority_name": report["responsible_authorities_or_parties"][0]["name"] if report["responsible_authorities_or_parties"] else "City Department",
            "timestamp_formatted": datetime.strptime(report["template_fields"]["timestamp"], "%Y-%m-%d %H:%M").strftime("%Y-%m-%d %H:%M"),
            "timezone_name": get_timezone_name(latitude, longitude),
            "decline_reason": None
        })
        return str(image_id)
    except Exception as e:
        logger.error(f"Failed to store issue {issue_id}: {e}")
        raise

def update_pending_issue(issue_id, report, decline_reason):
    try:
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
        return result.modified_count > 0
    except Exception as e:
        logger.error(f"Failed to update pending issue {issue_id}: {e}")
        raise

def get_issues():
    try:
        return list(db.issues.find())
    except Exception as e:
        logger.error(f"Failed to retrieve issues: {e}")
        raise

def update_issue_status(issue_id, status):
    try:
        result = db.issues.update_one({"_id": issue_id}, {"$set": {"status": status}})
        return result.modified_count > 0
    except Exception as e:
        logger.error(f"Failed to update issue {issue_id} status: {e}")
        raise