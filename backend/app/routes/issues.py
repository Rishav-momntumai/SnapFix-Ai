from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from pydantic import BaseModel, Field
from services.ai_service import classify_issue, generate_report
from services.email_service import send_email
from services.mongodb_service import store_issue, get_issues, update_issue_status, update_pending_issue, get_db, get_fs
from services.geocode_service import reverse_geocode
from utils.location import get_authority
from utils.timezone_utils import get_timezone_name
from bson.objectid import ObjectId
import uuid
import logging
from pathlib import Path
import base64
from datetime import datetime
import pytz
from typing import List, Optional, Dict, Any
import gridfs.errors

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

class IssueResponse(BaseModel):
    id: str
    message: str
    report: dict = None

class IssueStatusUpdate(BaseModel):
    status: str

class DeclineRequest(BaseModel):
    decline_reason: str
    edited_report: Optional[Dict[str, Any]] = None

class EditedReport(BaseModel):
    issue_overview: Dict[str, Any]
    recommended_actions: List[str]
    detailed_analysis: Dict[str, Any]
    responsible_authorities_or_parties: List[Dict[str, Any]]
    template_fields: Dict[str, Any]

class AcceptRequest(BaseModel):
    edited_report: Optional[Dict[str, Any]] = None

class Issue(BaseModel):
    id: str = Field(..., alias="_id")
    description: str
    address: str
    latitude: float = 0.0
    longitude: float = 0.0
    issue_type: str
    severity: str
    image_id: str
    status: str = "pending"
    report: dict = {"message": "No report generated"}
    category: str = "public"
    priority: str = "Medium"
    report_id: str = ""
    timestamp: str
    decline_reason: Optional[str] = None
    authority_email: Optional[List[str]] = None
    authority_name: Optional[List[str]] = None
    timestamp_formatted: Optional[str] = None
    timezone_name: Optional[str] = None

    class Config:
        validate_by_name = True
        arbitrary_types_allowed = True

def get_logo_base64():
    try:
        logo_path = Path(__file__).parent.parent / "static" / "MomentumAi_4K_Logo-removebg-preview.png"
        if not logo_path.exists():
            logger.error(f"Logo file not found at {logo_path}")
            return None
        with open(logo_path, "rb") as logo_file:
            return base64.b64encode(logo_file.read()).decode('utf-8')
    except Exception as e:
        logger.error(f"Failed to load logo: {str(e)}")
        return None

def get_department_email_content(department_type: str, issue_data: dict) -> tuple[str, str]:
    issue_type = issue_data.get("issue_type", "Unknown Issue")
    final_address = issue_data.get("address", "Unknown Address")
    timestamp_formatted = issue_data.get("timestamp_formatted", datetime.utcnow().strftime("%Y-%m-%d %H:%M"))
    report = issue_data.get("report", {"message": "No report generated"})
    authority_name = issue_data.get("authority_name", "Department")
    description = issue_data.get("description", "No description provided")
    confidence = issue_data.get("confidence", 0.0)
    category = issue_data.get("category", "Public")
    timezone_name = issue_data.get("timezone_name", "UTC")
    latitude = issue_data.get("latitude", 0.0)
    longitude = issue_data.get("longitude", 0.0)

    severity_checkboxes = {
        "High": "□ High  ☑ Medium  □ Low" if report.get("issue_overview", {}).get("severity", "").lower() == "medium" else "☑ High  □ Medium  □ Low" if report.get("issue_overview", {}).get("severity", "").lower() == "high" else "□ High  □ Medium  ☑ Low",
        "Medium": "□ High  ☑ Medium  □ Low",
        "Low": "□ High  □ Medium  ☑ Low"
    }.get(report.get("issue_overview", {}).get("severity", "Medium").capitalize(), "□ High  ☑ Medium  □ Low")

    map_link = f"https://www.google.com/maps?q={latitude},{longitude}" if latitude and longitude else "Coordinates unavailable"

    templates = {
        "fire": {
            "subject": f"Urgent Fire Hazard Alert – {issue_type.title()} at {final_address}",
            "text_content": f"""
Subject: {issue_type.title()} – {final_address} – {timestamp_formatted} – ID {report.get('template_fields', {}).get('oid', 'N/A')}

Dear {authority_name.title()} Team,

A critical {issue_type.title()} issue has been reported at {final_address}: {description}

Fire Department Action Required:
• Issue Type: {category.title()} – {issue_type.title()}
• Time Reported: {timestamp_formatted} {timezone_name}
• Location: {final_address}
• GPS: {latitude if latitude else 'N/A'}, {longitude if longitude else 'N/A'}
• Live Location: {map_link}
• Severity: {severity_checkboxes}
• Recommended Action: Immediate inspection and fire suppression measures.
• Report ID: {report.get('template_fields', {}).get('oid', 'N/A')}

Photo Evidence:
• File: {report.get('template_fields', {}).get('image_filename', 'N/A')}
• AI Detection: "{report.get('template_fields', {}).get('ai_tag', 'N/A')}" - Confidence: {confidence}%

Please respond urgently. Contact snapfix@momntum-ai.com for further details.

Disclaimer: This AI-generated report may contain inaccuracies. Refer to the attached image for primary evidence.
"""
        },
        "police": {
            "subject": f"Public Safety Alert – {issue_type.title()} at {final_address}",
            "text_content": f"""
Subject: {issue_type.title()} – {final_address} – {timestamp_formatted} – ID {report.get('template_fields', {}).get('oid', 'N/A')}

Dear {authority_name.title()} Team,

A public safety issue ({issue_type.title()}) has been reported at {final_address}: {description}

Police Action Required:
• Issue Type: {category.title()} – {issue_type.title()}
• Time Reported: {timestamp_formatted} {timezone_name}
• Location: {final_address}
• GPS: {latitude if latitude else 'N/A'}, {longitude if longitude else 'N/A'}
• Live Location: {map_link}
• Severity: {severity_checkboxes}
• Recommended Action: Deploy officers to investigate and secure the area.
• Report ID: {report.get('template_fields', {}).get('oid', 'N/A')}

Photo Evidence:
• File: {report.get('template_fields', {}).get('image_filename', 'N/A')}
• AI Detection: "{report.get('template_fields', {}).get('ai_tag', 'N/A')}" - Confidence: {confidence}%

Please respond promptly. Contact snapfix@momntum-ai.com for further details.

Disclaimer: This AI-generated report may contain inaccuracies. Refer to the attached image for primary evidence.
"""
        },
        "public_works": {
            "subject": f"Infrastructure Issue – {issue_type.title()} at {final_address}",
            "text_content": f"""
Subject: {issue_type.title()} – {final_address} – {timestamp_formatted} – ID {report.get('template_fields', {}).get('oid', 'N/A')}

Dear {authority_name.title()} Team,

An infrastructure issue ({issue_type.title()}) has been reported at {final_address}: {description}

Public Works Action Required:
• Issue Type: {category.title()} – {issue_type.title()}
• Time Reported: {timestamp_formatted} {timezone_name}
• Location: {final_address}
• GPS: {latitude if latitude else 'N/A'}, {longitude if longitude else 'N/A'}
• Live Location: {map_link}
• Severity: {severity_checkboxes}
• Recommended Action: Schedule maintenance and repair work.
• Report ID: {report.get('template_fields', {}).get('oid', 'N/A')}

Photo Evidence:
• File: {report.get('template_fields', {}).get('image_filename', 'N/A')}
• AI Detection: "{report.get('template_fields', {}).get('ai_tag', 'N/A')}" - Confidence: {confidence}%

Please address this issue. Contact snapfix@momntum-ai.com for further details.

Disclaimer: This AI-generated report may contain inaccuracies. Refer to the attached image for primary evidence.
"""
        },
        "general": {
            "subject": f"General Issue – {issue_type.title()} at {final_address}",
            "text_content": f"""
Subject: {issue_type.title()} – {final_address} – {timestamp_formatted} – ID {report.get('template_fields', {}).get('oid', 'N/A')}

Dear {authority_name.title()} Team,

An issue ({issue_type.title()}) has been reported at {final_address}: {description}

Action Required:
• Issue Type: {category.title()} – {issue_type.title()}
• Time Reported: {timestamp_formatted} {timezone_name}
• Location: {final_address}
• GPS: {latitude if latitude else 'N/A'}, {longitude if longitude else 'N/A'}
• Live Location: {map_link}
• Severity: {severity_checkboxes}
• Recommended Action: Inspect and address issue promptly.
• Report ID: {report.get('template_fields', {}).get('oid', 'N/A')}

Photo Evidence:
• File: {report.get('template_fields', {}).get('image_filename', 'N/A')}
• AI Detection: "{report.get('template_fields', {}).get('ai_tag', 'N/A')}" - Confidence: {confidence}%

Please respond to snapfix@momntum-ai.com with any feedback.

Disclaimer: This AI-generated report may contain inaccuracies. Refer to the attached image for primary evidence.
"""
        }
    }

    template = templates.get(department_type, templates["general"])
    return template["subject"], template["text_content"]

def send_authority_email(
    authorities: List[Dict[str, str]],
    issue_type: str,
    final_address: str,
    timestamp_formatted: str,
    report: dict,
    description: str,
    confidence: float,
    category: str,
    timezone_name: str,
    latitude: float,
    longitude: float,
    image_content: bytes
):
    if not authorities:
        logger.warning("No authorities provided, using default")
        authorities = [{"name": "City Department", "email": "snapfix@momntum-ai.com", "type": "general"}]

    logo_base64 = get_logo_base64()
    issue_image_base64 = base64.b64encode(image_content).decode('utf-8')
    embedded_images = []
    if logo_base64:
        embedded_images.append(("momentumai_logo", logo_base64, "image/png"))
    embedded_images.append(("issue_image", issue_image_base64, "image/jpeg"))

    # Define map_link for HTML template
    map_link = f"https://www.google.com/maps?q={latitude},{longitude}" if latitude and longitude else "Coordinates unavailable"

    html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        @keyframes fadeIn {{
            0% {{ opacity: 0; }}
            100% {{ opacity: 1; }}
        }}
        @keyframes gradientBG {{
            0% {{ background-position: 0% 50%; }}
            50% {{ background-position: 100% 50%; }}
            100% {{ background-position: 0% 50%; }}
        }}
        body {{
            font-family: 'Segoe UI', Arial, sans-serif;
            animation: fadeIn 1s ease-in;
            background: linear-gradient(-45deg, #f5f7fa, #e4e8eb, #d4e1ff, #ebf0ff);
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
            margin: 0;
            padding: 20px;
            color: #333;
        }}
        .header {{
            text-align: center;
            padding: 20px 0;
        }}
        .logo {{
            height: 60px;
            animation: pulse 2s infinite;
        }}
        .container {{
            max-width: 700px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }}
        .content {{
            padding: 30px;
        }}
        .banner {{
            background: linear-gradient(90deg, #1a2a6c, #3a7bd5);
            color: white;
            padding: 15px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
        }}
        .section {{
            margin-bottom: 25px;
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }}
        .section-title {{
            color: #1a2a6c;
            font-weight: 600;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }}
        .priority-box {{
            display: inline-block;
            padding: 5px 10px;
            border-radius: 6px;
            font-weight: bold;
            margin-left: 10px;
        }}
        .high-priority {{
            background-color: #ff4444;
            color: white;
        }}
        .medium-priority {{
            background-color: #ffbb33;
            color: black;
        }}
        .low-priority {{
            background-color: #00C851;
            color: white;
        }}
        .emoji {{
            font-size: 20px;
            margin-right: 8px;
        }}
        .footer {{
            text-align: center;
            font-size: 12px;
            color: #777;
            padding: 20px;
            background: #f9f9f9;
        }}
        .ai-tag {{
            background: #e3f2fd;
            padding: 8px 12px;
            border-radius: 6px;
            display: inline-block;
            margin: 5px 0;
            font-style: italic;
        }}
        .confidence-meter {{
            height: 10px;
            background: #e0e0e0;
            border-radius: 5px;
            margin-top: 5px;
            overflow: hidden;
        }}
        .confidence-level {{
            height: 100%;
            background: linear-gradient(90deg, #4CAF50, #8BC34A);
            width: {confidence}%;
        }}
        .issue-image {{
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-top: 10px;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="banner">
            🚨 New Infrastructure Issue Detected 🚨
        </div>
        <div class="content">
            <div class="header">
                {'<img src="cid:momentumai_logo" alt="MomentumAI Logo" class="logo">' if logo_base64 else '<h2 style="color: #1a2a6c;">MomentumAI</h2>'}
                <h2 style="color: #1a2a6c; margin-top: 10px;">SnapFix AI Report</h2>
            </div>
            <div class="section">
                <div class="section-title">
                    <span class="emoji">👋</span> Hello Team
                </div>
                <p>Our AI has detected a <strong>{issue_type.title()}</strong> issue that requires your attention:</p>
                <blockquote style="background: #f8f9fa; padding: 10px; border-left: 4px solid #1a2a6c; margin: 15px 0;">
                    "{description.capitalize()}"
                </blockquote>
            </div>
            <div class="section">
                <div class="section-title">
                    <span class="emoji">📜</span> Executive Summary
                </div>
                <p>{report.get('issue_overview', {}).get('summary_explanation', 'No summary available')}</p>
            </div>
            <div class="section">
                <div class="section-title">
                    <span class="emoji">📍</span> Location Details
                </div>
                <p><strong>Address:</strong> {final_address}</p>
                <p><strong>Coordinates:</strong> {latitude if latitude else 'N/A'}, {longitude if longitude else 'N/A'}</p>
                <p><strong>Map Link:</strong> <a href="{map_link}" target="_blank">{map_link if map_link.startswith('http') else 'No coordinates provided'}</a></p>
            </div>
            <div class="section">
                <div class="section-title">
                    <span class="emoji">📋</span> Report Summary
                </div>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Report ID</strong></td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: right;">{report.get('template_fields', {}).get('oid', 'N/A')}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Issue Type</strong></td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: right;">{category}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Time Reported</strong></td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: right;">{timestamp_formatted} {timezone_name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Priority</strong></td>
                        <td style="padding: 8px 0; text-align: right;">
                            <span class="priority-box {'high-priority' if report.get('template_fields', {}).get('priority', 'Medium') == 'High' else 'medium-priority' if report.get('template_fields', {}).get('priority', 'Medium') == 'Medium' else 'low-priority'}">
                                {report.get('template_fields', {}).get('priority', 'Medium')} Priority
                            </span>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">
                    <span class="emoji">🔍</span> AI Analysis
                </div>
                <div class="ai-tag">
                    "{report.get('template_fields', {}).get('ai_tag', 'N/A')}"
                </div>
                <p><strong>Confidence Level:</strong> {confidence}%</p>
                <div class="confidence-meter">
                    <div class="confidence-level"></div>
                </div>
                <p><strong>Potential Impact:</strong> {report.get('detailed_analysis', {}).get('potential_consequences_if_ignored', 'N/A')}</p>
                <p><strong>Urgency Reason:</strong> {report.get('detailed_analysis', {}).get('public_safety_risk', 'Unknown').title()} risk to public safety</p>
                <p><strong>Location Context:</strong> {final_address}</p>
            </div>
            <div class="section">
                <div class="section-title">
                    <span class="emoji">📸</span> Photo Evidence
                </div>
                <img src="cid:issue_image" alt="Issue Image" class="issue-image">
                <p><small>File: {report.get('template_fields', {}).get('image_filename', 'N/A')}</small></p>
            </div>
            <div style="background: #f5f7fa; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <div style="font-weight: bold; margin-bottom: 10px;">📩 Need to respond?</div>
                <p>Reply to this email or forward to <a href="mailto:snapfix@momntum-ai.com">snapfix@momntum-ai.com</a> with your comments.</p>
            </div>
        </div>
        <div class="footer">
            <p>This report was submitted via SnapFix AI by MomentumAI</p>
            <p>© {report.get('template_fields', {}).get('timestamp', datetime.utcnow().strftime('%Y-%m-%d')).split('-')[0]} MomentumAI | All Rights Reserved</p>
            <p style="font-size: 10px; color: #aaa;">This is an automated message. Please do not reply directly to this email.</p>
        </div>
    </div>
</body>
</html>
"""

    errors = []
    for authority in authorities:
        try:
            subject, text_content = get_department_email_content(authority["type"], {
                "issue_type": issue_type,
                "address": final_address,
                "timestamp_formatted": timestamp_formatted,
                "report": report,
                "authority_name": authority["name"],
                "description": description,
                "confidence": confidence,
                "category": category,
                "timezone_name": timezone_name,
                "latitude": latitude,
                "longitude": longitude
            })
            logger.debug(f"Sending email to {authority['email']} for {authority['type']} with subject: {subject}")
            send_email(
                to_email=authority["email"],
                subject=subject,
                html_content=html_content,
                text_content=text_content,
                attachments=None,
                embedded_images=embedded_images
            )
            logger.info(f"Email sent to {authority['email']} for {authority['type']}")
        except Exception as e:
            logger.error(f"Failed to send email to {authority['email']}: {str(e)}")
            errors.append(f"Failed to send email to {authority['email']}: {str(e)}")
    if errors:
        logger.warning(f"Some emails failed for issue: {'; '.join(errors)}")
        # Continue processing instead of raising error

@router.post("/issues", response_model=IssueResponse)
async def create_issue(
    image: UploadFile = File(...),
    description: str = Form(...),
    address: str = Form(''),
    latitude: float = Form(0.0),
    longitude: float = Form(0.0)
):
    try:
        db = get_db()
        fs = get_fs()
    except Exception as e:
        logger.error(f"Failed to initialize database: {e}")
        raise HTTPException(status_code=500, detail=f"Database initialization failed: {str(e)}")
    
    if not image.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid image format")
    
    image_content = await image.read()
    try:
        issue_type, severity, confidence, category, priority = classify_issue(image_content, description)
        if not issue_type:
            raise ValueError("Failed to classify issue type")
    except Exception as e:
        logger.error(f"Failed to classify issue: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to classify issue: {str(e)}")
    
    final_address = address
    zip_code = ""
    if not address and latitude and longitude:
        try:
            geocode_result = await reverse_geocode(latitude, longitude)
            final_address = geocode_result.get("address", "Unknown Address")
            zip_code = geocode_result.get("zip_code", "")
        except Exception as e:
            logger.error(f"Failed to geocode coordinates: {str(e)}")
            final_address = "Unknown Address"
    
    issue_id = str(uuid.uuid4())
    try:
        report = generate_report(image_content, description, issue_type, severity, final_address, latitude, longitude, issue_id, confidence, category, priority)
        report["template_fields"].pop("tracking_link", None)
    except Exception as e:
        logger.error(f"Failed to generate report for issue {issue_id}: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to generate report: {str(e)}")
    
    authorities = get_authority(final_address, issue_type, latitude, longitude, category)
    authority_emails = [auth["email"] for auth in authorities] or ["snapfix@momntum-ai.com"]
    authority_names = [auth["name"] for auth in authorities] or ["City Department"]
    
    timezone_name = get_timezone_name(latitude, longitude) or "UTC"
    timestamp = datetime.utcnow().isoformat()
    timestamp_formatted = datetime.utcnow().strftime("%Y-%m-%d %H:%M")
    
    try:
        image_id = store_issue(
            issue_id=issue_id,
            image_content=image_content,
            description=description,
            address=final_address,
            latitude=latitude,
            longitude=longitude,
            issue_type=issue_type,
            severity=severity,
            report=report,
            category=category,
            priority=priority,
            report_id=report["template_fields"]["oid"],
            status="pending",
            authority_email=authority_emails,
            authority_name=authority_names,
            timestamp_formatted=timestamp_formatted,
            timezone_name=timezone_name
        )
    except Exception as e:
        logger.error(f"Failed to store issue {issue_id}: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to store issue: {str(e)}")
    
    return IssueResponse(
        id=issue_id,
        message="Please review the generated report",
        report={
            "issue_id": issue_id,
            "report": report,
            "authority_email": authority_emails,
            "authority_name": authority_names,
            "timestamp_formatted": timestamp_formatted,
            "timezone_name": timezone_name,
            "image_content": base64.b64encode(image_content).decode('utf-8')
        }
    )

@router.post("/issues/{issue_id}/accept", response_model=IssueResponse)
async def accept_issue(issue_id: str, request: AcceptRequest):
    logger.debug(f"Processing accept request for issue {issue_id}")
    try:
        db = get_db()
        fs = get_fs()
    except Exception as e:
        logger.error(f"Failed to initialize database for issue {issue_id}: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Database initialization failed: {str(e)}")
    
    # Fetch issue from MongoDB
    issue = db.issues.find_one({"_id": issue_id})
    if not issue:
        logger.error(f"Issue {issue_id} not found in database")
        raise HTTPException(status_code=404, detail=f"Issue {issue_id} not found")
    if issue.get("status") != "pending":
        logger.warning(f"Issue {issue_id} already processed with status {issue.get('status')}")
        raise HTTPException(status_code=400, detail="Issue already processed")
    
    # Validate required fields
    required_fields = ["issue_type", "description", "address", "image_id", "report"]
    missing_fields = [field for field in required_fields if field not in issue or issue[field] is None]
    if missing_fields:
        logger.error(f"Issue {issue_id} missing required fields: {missing_fields}")
        raise HTTPException(status_code=400, detail=f"Issue missing required fields: {missing_fields}")
    
    # Use edited report if provided, else use original
    report = request.edited_report if request.edited_report else issue["report"]
    if request.edited_report:
        try:
            EditedReport(**request.edited_report)  # Validate edited report
            report["template_fields"] = report.get("template_fields", issue["report"]["template_fields"])
            report["issue_overview"] = report.get("issue_overview", issue["report"]["issue_overview"])
            report["recommended_actions"] = report.get("recommended_actions", issue["report"]["recommended_actions"])
            report["detailed_analysis"] = report.get("detailed_analysis", issue["report"]["detailed_analysis"])
            report["responsible_authorities_or_parties"] = report.get("responsible_authorities_or_parties", issue["report"]["responsible_authorities_or_parties"])
            report["template_fields"].pop("tracking_link", None)
        except Exception as e:
            logger.error(f"Invalid edited report for issue {issue_id}: {str(e)}")
            raise HTTPException(status_code=400, detail=f"Invalid edited report: {str(e)}")
    else:
        report["template_fields"].pop("tracking_link", None)
    
    # Fetch image from GridFS
    try:
        image_content = fs.get(ObjectId(issue["image_id"])).read()
    except gridfs.errors.NoFile:
        logger.error(f"Image not found for image_id {issue['image_id']} in issue {issue_id}")
        raise HTTPException(status_code=500, detail=f"Image not found for issue {issue_id}")
    except Exception as e:
        logger.error(f"Failed to fetch image for issue {issue_id}: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to fetch image: {str(e)}")
    
    # Fetch authorities
    try:
        authorities = get_authority(
            issue.get("address", "Unknown Address"),
            issue.get("issue_type", "Unknown Issue"),
            issue.get("latitude", 0.0),
            issue.get("longitude", 0.0),
            issue.get("category", "Public")
        ) or [{"name": "City Department", "email": "snapfix@momntum-ai.com", "type": "general"}]
        logger.debug(f"Authorities for issue {issue_id}: {authorities}")
    except Exception as e:
        logger.error(f"Failed to fetch authorities for issue {issue_id}: {str(e)}")
        authorities = [{"name": "City Department", "email": "snapfix@momntum-ai.com", "type": "general"}]
    
    # Send emails
    try:
        send_authority_email(
            authorities=authorities,
            issue_type=issue.get("issue_type", "Unknown Issue"),
            final_address=issue.get("address", "Unknown Address"),
            timestamp_formatted=issue.get("timestamp_formatted", datetime.utcnow().strftime("%Y-%m-%d %H:%M")),
            report=report,
            description=issue.get("description", "No description provided"),
            confidence=issue.get("report", {}).get("issue_overview", {}).get("confidence", 0.0),
            category=issue.get("category", "Public"),
            timezone_name=issue.get("timezone_name", "UTC"),
            latitude=issue.get("latitude", 0.0),
            longitude=issue.get("longitude", 0.0),
            image_content=image_content
        )
    except Exception as e:
        logger.error(f"Failed to send authority emails for issue {issue_id}: {str(e)}")
        # Continue processing even if emails fail
    
    # Update issue status
    try:
        update_issue_status(issue_id, "accepted")
        db.issues.update_one({"_id": issue_id}, {"$set": {"report": report}})
    except Exception as e:
        logger.error(f"Failed to update issue {issue_id} status: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to update issue status: {str(e)}")

    logger.info(f"Issue {issue_id} accepted and reported to authorities: {[auth['email'] for auth in authorities]}")
    return IssueResponse(id=issue_id, message="Thank you for using SnapFix! Issue accepted and reported to authorities")

@router.post("/issues/{issue_id}/decline", response_model=IssueResponse)
async def decline_issue(issue_id: str, decline_request: DeclineRequest):
    try:
        db = get_db()
        fs = get_fs()
    except Exception as e:
        logger.error(f"Failed to initialize database for issue {issue_id}: {e}")
        raise HTTPException(status_code=500, detail=f"Database initialization failed: {str(e)}")
    
    issue = db.issues.find_one({"_id": issue_id})
    if not issue:
        raise HTTPException(status_code=404, detail=f"Issue {issue_id} not found")
    if issue.get("status") != "pending":
        raise HTTPException(status_code=400, detail="Issue already processed")
    
    required_fields = ["issue_type", "description", "address", "image_id", "report"]
    missing_fields = [field for field in required_fields if field not in issue or issue[field] is None]
    if missing_fields:
        logger.error(f"Issue {issue_id} missing required fields: {missing_fields}")
        raise HTTPException(status_code=400, detail=f"Issue missing required fields: {missing_fields}")
    
    try:
        image_content = fs.get(ObjectId(issue["image_id"])).read()
    except Exception as e:
        logger.error(f"Failed to fetch image for issue {issue_id}: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to fetch image: {str(e)}")
    
    try:
        if decline_request.edited_report:
            updated_report = decline_request.edited_report
            EditedReport(**updated_report)
            updated_report["template_fields"] = updated_report.get("template_fields", issue["report"]["template_fields"])
            updated_report["issue_overview"] = updated_report.get("issue_overview", issue["report"]["issue_overview"])
            updated_report["recommended_actions"] = updated_report.get("recommended_actions", issue["report"]["recommended_actions"])
            updated_report["detailed_analysis"] = updated_report.get("detailed_analysis", issue["report"]["detailed_analysis"])
            updated_report["responsible_authorities_or_parties"] = updated_report.get("responsible_authorities_or_parties", issue["report"]["responsible_authorities_or_parties"])
        else:
            updated_report = generate_report(
                image_content=image_content,
                description=issue.get("description", "No description"),
                issue_type=issue.get("issue_type", "Unknown Issue"),
                severity=issue.get("severity", "Medium"),
                address=issue.get("address", "Unknown Address"),
                latitude=issue.get("latitude", 0.0),
                longitude=issue.get("longitude", 0.0),
                issue_id=issue_id,
                confidence=issue.get("report", {}).get("issue_overview", {}).get("confidence", 0.0),
                category=issue.get("category", "Public"),
                priority=issue.get("priority", "Medium"),
                decline_reason=decline_request.decline_reason
            )
        updated_report["template_fields"].pop("tracking_link", None)
        
        update_pending_issue(
            issue_id=issue_id,
            report=updated_report,
            decline_reason=decline_request.decline_reason
        )
    except Exception as e:
        logger.error(f"Failed to process decline for issue {issue_id}: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to process decline: {str(e)}")

    return IssueResponse(id=issue_id, message="Report updated based on feedback. Please review again", report={
        "issue_id": issue_id,
        "report": updated_report,
        "authority_email": issue.get("authority_email", ["snapfix@momntum-ai.com"]),
        "authority_name": issue.get("authority_name", ["City Department"]),
        "timestamp_formatted": issue.get("timestamp_formatted", datetime.utcnow().strftime("%Y-%m-%d %H:%M")),
        "timezone_name": issue.get("timezone_name", "UTC"),
        "image_content": base64.b64encode(image_content).decode('utf-8')
    })

@router.get("/issues", response_model=List[Issue])
async def list_issues():
    try:
        db = get_db()
        issues = get_issues()
        formatted_issues = []
        for issue in issues:
            try:
                # Handle timestamp format
                if isinstance(issue.get('timestamp'), dict):
                    issue['timestamp'] = issue['timestamp'].isoformat()
                
                # Clean authority_email and authority_name
                authority_email = issue.get("authority_email", ["snapfix@momntum-ai.com"])
                if isinstance(authority_email, list):
                    # Filter out None and non-string values
                    authority_email = [str(email) for email in authority_email if email is not None and isinstance(email, str)]
                    if not authority_email:  # If list is empty after filtering
                        authority_email = ["snapfix@momntum-ai.com"]
                else:
                    authority_email = [str(authority_email)] if authority_email else ["snapfix@momntum-ai.com"]

                authority_name = issue.get("authority_name", ["City Department"])
                if isinstance(authority_name, list):
                    # Filter out None and non-string values
                    authority_name = [str(name) for name in authority_name if name is not None and isinstance(name, str)]
                    if not authority_name:  # If list is empty after filtering
                        authority_name = ["City Department"]
                else:
                    authority_name = [str(authority_name)] if authority_name else ["City Department"]

                issue["authority_email"] = authority_email
                issue["authority_name"] = authority_name
                
                formatted_issues.append(Issue(**issue))
            except Exception as e:
                logger.warning(f"Skipping invalid issue {issue.get('_id')}: {str(e)}")
                continue
        logger.info(f"Retrieved {len(formatted_issues)} valid issues")
        return formatted_issues
    except Exception as e:
        logger.error(f"Failed to list issues: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to list issues: {str(e)}")

@router.put("/issues/{issue_id}/status")
async def update_status(issue_id: str, status_update: IssueStatusUpdate):
    try:
        db = get_db()
        updated = update_issue_status(issue_id, status_update.status)
        if not updated:
            raise HTTPException(status_code=404, detail="Issue not found")
        return {"message": "Status updated successfully"}
    except Exception as e:
        logger.error(f"Failed to update status for issue {issue_id}: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to update status: {str(e)}")

@router.get("/health")
async def health_check():
    try:
        db = get_db()
        db.command("ping")
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=503, detail=f"Database unavailable: {str(e)}")