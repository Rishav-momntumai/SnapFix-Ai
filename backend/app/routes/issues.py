from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from pydantic import BaseModel, Field
from services.ai_service import classify_issue, generate_report
from services.email_service import send_email
from services.mongodb_service import store_issue, get_issues, update_issue_status, update_pending_issue, db, fs
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
    status: str = "200"
    report: dict = {"message": "No report generated"}
    category: str = "public"
    priority: str = "Medium"
    report_id: str = ""
    timestamp: str
    decline_reason: Optional[str] = None

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

def send_authority_email(authority_email, issue_type, final_address, timestamp_formatted, report, authority_name, description, confidence, category, timezone_name, latitude, longitude, image_content):
    logo_base64 = get_logo_base64()
    issue_image_base64 = base64.b64encode(image_content).decode('utf-8')
    severity_checkboxes = {
        "High": "□ High  ☑ Medium  □ Low" if report["issue_overview"]["severity"] == "medium" else "☑ High  □ Medium  □ Low" if report["issue_overview"]["severity"] == "high" else "□ High  □ Medium  ☑ Low",
        "Medium": "□ High  ☑ Medium  □ Low",
        "Low": "□ High  □ Medium  ☑ Low"
    }.get(report["issue_overview"]["severity"].capitalize(), "□ High  ☑ Medium  □ Low")
    map_link = f"https://www.google.com/maps?q={latitude},{longitude}" if latitude and longitude else "Coordinates unavailable"
    
    authority_text_content = f"""
Subject: {issue_type.title()} – {final_address or 'No Address'} – {timestamp_formatted} – ID {report['template_fields']['oid']}

Hello {authority_name.title()} team,

{issue_type.title()} observed at {final_address}: {description}

SnapFix Report Summary

• Issue Type: {category.title()} – {issue_type.title()}
• Time Reported: {timestamp_formatted} {timezone_name} (UTC {report['template_fields']['utc_time']})
• Approximate Location: {final_address}
• GPS: {latitude if latitude else 'N/A'}, {longitude if longitude else 'N/A'}
• Live Location: {map_link}
• Severity: {severity_checkboxes}
• Recommended Action: {report['recommended_actions'][0] if report['recommended_actions'] else 'Inspect and address issue promptly.'}
• Report ID: {report['template_fields']['oid']}

Photo Evidence
• File: {report['template_fields']['image_filename']}
• AI Detection: "{report['template_fields']['ai_tag']}" - Confidence: {confidence}%

Questions or Feedback?
To report an issue with this report, please forward this message to snapfix@momentum-ai.org with a brief note. Our team will be glad to support you with anything needed.

Submission Details
This report was submitted anonymously. No personal data was captured.

Disclaimer:
This report was generated with AI assistance and may contain inaccuracies. Please refer to the attached image as the most reliable source of information provided by the user.
"""
    
    email_content = f"""
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
                    <span class="emoji">👋</span> Hello {authority_name} Team
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
                <p>{report['issue_overview']['summary_explanation']}</p>
            </div>
            
            <div class="section">
                <div class="section-title">
                    <span class="emoji">📍</span> Location Details
                </div>
                <p><strong>Address:</strong> {final_address or 'Not specified'}</p>
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
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: right;">{report['template_fields']['oid']}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Issue Type</strong></td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: right;">{category}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Time Reported</strong></td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: right;">{timestamp_formatted} {timezone_name} (UTC {report['template_fields']['utc_time']})</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Priority</strong></td>
                        <td style="padding: 8px 0; text-align: right;">
                            <span class="priority-box {'high-priority' if report['template_fields']['priority'] == 'High' else 'medium-priority' if report['template_fields']['priority'] == 'Medium' else 'low-priority'}">
                                {report['template_fields']['priority']} Priority
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
                    "{report['template_fields']['ai_tag']}"
                </div>
                <p><strong>Confidence Level:</strong> {confidence}%</p>
                <div class="confidence-meter">
                    <div class="confidence-level"></div>
                </div>
                <p><strong>Potential Impact:</strong> {report['detailed_analysis']['potential_consequences_if_ignored']}</p>
                <p><strong>Urgency Reason:</strong> {report['detailed_analysis']['public_safety_risk'].title()} risk to public safety</p>
                <p><strong>Location Context:</strong> {final_address or 'Not specified'}</p>
                <p><strong>Recommended Immediate Action:</strong> {report['recommended_actions'][0] if report['recommended_actions'] else 'Inspect and address issue promptly.'}</p>
            </div>
            
            <div class="section">
                <div class="section-title">
                    <span class="emoji">📸</span> Photo Evidence
                </div>
                <img src="cid:issue_image" alt="Issue Image" class="issue-image">
                <p><small>File: {report['template_fields']['image_filename']}</small></p>
            </div>
            
            <div style="background: #f5f7fa; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <div style="font-weight: bold; margin-bottom: 10px;">📩 Need to respond?</div>
                <p>Reply to this email or forward to <a href="mailto:snapfix@momentum-ai.org">snapfix@momentum-ai.org</a> with your comments.</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This report was submitted via SnapFix AI by MomentumAI</p>
            <p>© {report['template_fields']['timestamp'].split('-')[0]} MomentumAI | All Rights Reserved</p>
            <p style="font-size: 10px; color: #aaa;">This is an automated message. Please do not reply directly to this email.</p>
        </div>
    </div>
</body>
</html>
"""
    
    embedded_images = []
    if logo_base64:
        embedded_images.append(("momentumai_logo", logo_base64, "image/png"))
    embedded_images.append(("issue_image", issue_image_base64, "image/jpeg"))
    
    try:
        send_email(
            to_email=authority_email,
            subject=f"{issue_type.title()} – {final_address or 'No Address'} – {timestamp_formatted} – ID {report['template_fields']['oid']}",
            html_content=email_content,
            text_content=authority_text_content,
            attachments=None,
            embedded_images=embedded_images
        )
        logger.info(f"Authority email sent to {authority_email}")
    except Exception as e:
        logger.error(f"Email sending failed: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

@router.post("/issues", response_model=IssueResponse)
async def create_issue(
    image: UploadFile = File(...),
    description: str = Form(...),
    address: str = Form(''),
    latitude: float = Form(0.0),
    longitude: float = Form(0.0)
):
    if not image.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid image format")
    
    image_content = await image.read()
    issue_type, severity, confidence, category, priority = classify_issue(image_content, description)
    
    final_address = address
    zip_code = ""
    if not address and latitude and longitude:
        geocode_result = await reverse_geocode(latitude, longitude)
        final_address = geocode_result.get("address", "Unknown Address")
        zip_code = geocode_result.get("zip_code", "")
    
    issue_id = str(uuid.uuid4())
    report = generate_report(image_content, description, issue_type, severity, final_address, latitude, longitude, issue_id, confidence, category, priority)
    report["template_fields"].pop("tracking_link", None)
    
    authority_email = get_authority(final_address, issue_type, latitude, longitude, category)
    authority_name = report["responsible_authorities_or_parties"][0]["name"] if report["responsible_authorities_or_parties"] else "City Department"
    
    timezone_name = get_timezone_name(latitude, longitude)
    timestamp_formatted = datetime.strptime(report["template_fields"]["timestamp"], "%Y-%m-%d %H:%M").strftime("%Y-%m-%d %H:%M")
    
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
            status="pending"
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
            "authority_email": authority_email,
            "authority_name": authority_name,
            "timestamp_formatted": timestamp_formatted,
            "timezone_name": timezone_name,
            "image_content": base64.b64encode(image_content).decode('utf-8')
        }
    )

@router.post("/issues/{issue_id}/accept", response_model=IssueResponse)
async def accept_issue(issue_id: str, request: AcceptRequest):
    issue = db.issues.find_one({"_id": issue_id})
    if not issue or issue["status"] != "pending":
        raise HTTPException(status_code=404, detail="Issue not found or already processed")
    
    report = request.edited_report if request.edited_report else issue["report"]
    if request.edited_report:
        EditedReport(**request.edited_report)  # Validate edited report
        report["template_fields"] = report.get("template_fields", issue["report"]["template_fields"])
        report["issue_overview"] = report.get("issue_overview", issue["report"]["issue_overview"])
        report["recommended_actions"] = report.get("recommended_actions", issue["report"]["recommended_actions"])
        report["detailed_analysis"] = report.get("detailed_analysis", issue["report"]["detailed_analysis"])
        report["responsible_authorities_or_parties"] = report.get("responsible_authorities_or_parties", issue["report"]["responsible_authorities_or_parties"])
        report["template_fields"].pop("tracking_link", None)
    else:
        report["template_fields"].pop("tracking_link", None)
    
    try:
        send_authority_email(
            authority_email=issue["authority_email"],
            issue_type=issue["issue_type"],
            final_address=issue["address"],
            timestamp_formatted=issue["timestamp_formatted"],
            report=report,
            authority_name=issue["authority_name"],
            description=issue["description"],
            confidence=issue["report"]["issue_overview"]["confidence"],
            category=issue["category"],
            timezone_name=issue["timezone_name"],
            latitude=issue["latitude"],
            longitude=issue["longitude"],
            image_content=fs.get(ObjectId(issue["image_id"])).read()
        )
    except Exception as e:
        logger.error(f"Failed to send authority email for issue {issue_id}: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

    try:
        update_issue_status(issue_id, "200")
        db.issues.update_one({"_id": issue_id}, {"$set": {"report": report}})
    except Exception as e:
        logger.error(f"Failed to update issue {issue_id} status: {e}")
        raise HTTPException(status_code=500, detail="Failed to update issue status")

    return IssueResponse(id=issue_id, message="Thank you for using SnapFix! Issue accepted and reported to authority")

@router.post("/issues/{issue_id}/decline", response_model=IssueResponse)
async def decline_issue(issue_id: str, decline_request: DeclineRequest):
    issue = db.issues.find_one({"_id": issue_id})
    if not issue or issue["status"] != "pending":
        raise HTTPException(status_code=404, detail="Issue not found or already processed")
    
    image_content = fs.get(ObjectId(issue["image_id"])).read()
    try:
        if decline_request.edited_report:
            updated_report = decline_request.edited_report
            EditedReport(**updated_report)  # Validate edited report
            updated_report["template_fields"] = updated_report.get("template_fields", issue["report"]["template_fields"])
            updated_report["issue_overview"] = updated_report.get("issue_overview", issue["report"]["issue_overview"])
            updated_report["recommended_actions"] = updated_report.get("recommended_actions", issue["report"]["recommended_actions"])
            updated_report["detailed_analysis"] = updated_report.get("detailed_analysis", issue["report"]["detailed_analysis"])
            updated_report["responsible_authorities_or_parties"] = updated_report.get("responsible_authorities_or_parties", issue["report"]["responsible_authorities_or_parties"])
        else:
            updated_report = generate_report(
                image_content=image_content,
                description=issue["description"],
                issue_type=issue["issue_type"],
                severity=issue["severity"],
                address=issue["address"],
                latitude=issue["latitude"],
                longitude=issue["longitude"],
                issue_id=issue_id,
                confidence=issue["report"]["issue_overview"]["confidence"],
                category=issue["category"],
                priority=issue["priority"],
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
        "authority_email": issue["authority_email"],
        "authority_name": issue["authority_name"],
        "timestamp_formatted": issue["timestamp_formatted"],
        "timezone_name": issue["timezone_name"],
        "image_content": base64.b64encode(image_content).decode('utf-8')
    })

@router.get("/issues", response_model=List[Issue])
async def list_issues():
    issues = get_issues()
    formatted_issues = []
    for issue in issues:
        try:
            if isinstance(issue.get('timestamp'), dict):
                issue['timestamp'] = issue['timestamp'].isoformat()
            formatted_issues.append(Issue(**issue))
        except Exception as e:
            logger.warning(f"Skipping invalid issue {issue.get('_id')}: {e}")
            continue
    return formatted_issues

@router.put("/issues/{issue_id}/status")
async def update_status(issue_id: str, status_update: IssueStatusUpdate):
    updated = update_issue_status(issue_id, status_update.status)
    if not updated:
        raise HTTPException(status_code=404, detail="Issue not found")
    return {"message": "Status updated successfully"}