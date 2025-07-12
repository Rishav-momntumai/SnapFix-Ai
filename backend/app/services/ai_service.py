import google.generativeai as genai
from PIL import Image
import io
import json
import logging
from dotenv import load_dotenv
import os
from datetime import datetime
import pytz
import re
from utils.constants import issue_category_map, issue_department_map
from utils.timezone_utils import get_timezone_name  # Updated import

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    logger.error("GEMINI_API_KEY is not set in environment variables")
    raise ValueError("GEMINI_API_KEY is not set")

genai.configure(api_key=GEMINI_API_KEY)

def classify_issue(image_content: bytes, description: str) -> tuple[str, str, float, str, str]:
    try:
        image = Image.open(io.BytesIO(image_content))
        model = genai.GenerativeModel("gemini-1.5-flash")

        prompt = f"""
You are an expert AI trained to classify infrastructure-related issues based on an image and text description.
Analyze the image and description: "{description}".
Return JSON with:
{{
  "issue_type": "fire|pothole|garbage|property_damage|flood|vandalism|structural_damage|unknown",
  "confidence": number (0 to 100)
}}
Ensure the issue_type matches one of the specified options. For descriptions mentioning size (e.g., "2 ft wide") or safety risks (e.g., "cause cars to swerve"), prioritize "pothole" with high confidence. Provide only valid JSON without explanation.
"""

        response = model.generate_content([prompt, image, f"Description: {description}"])
        logger.info(f"Gemini classification raw output: {response.text}")

        parsed = json.loads(response.text[response.text.find("{"):response.text.rfind("}")+1])
        issue_type = parsed.get("issue_type", "unknown").lower()
        confidence = float(parsed.get("confidence", 70.0))

        # Cross-validate with description
        description_lower = description.lower()
        issue_keywords = {
            "fire": ["fire", "smoke", "flame", "burn", "blaze"],
            "pothole": ["pothole", "road damage", "crack", "hole", "ft wide", "deep", "swerve"],
            "garbage": ["trash", "litter", "garbage", "debris", "waste"],
            "property_damage": ["damage", "broken", "destruction"],
            "flood": ["flood", "water", "inundation", "leak"],
            "vandalism": ["graffiti", "vandalism", "deface", "tagging"],
            "structural_damage": ["crack", "collapse", "structural", "foundation"]
        }
        for issue, keywords in issue_keywords.items():
            if any(keyword in description_lower for keyword in keywords):
                issue_type = issue
                confidence = max(confidence, 92.0 if issue == "pothole" else 80.0)
                logger.info(f"Description suggests {issue}. Overriding to {issue} with confidence {confidence}.")
                break

        # Cap confidence at 100
        confidence = min(confidence, 100.0)

        # Severity logic
        high_severity_issues = ["fire", "flood", "structural_damage"]
        high_severity_keywords = ["urgent", "emergency", "critical", "severe"]
        medium_severity_issues = ["pothole", "vandalism"]
        severity = (
            "High" if issue_type in high_severity_issues or any(k in description_lower for k in high_severity_keywords)
            else "Medium" if issue_type in medium_severity_issues or confidence >= 85
            else "Low"
        )

        category = issue_category_map.get(issue_type, "public")
        priority = "High" if severity == "High" or confidence > 90 else "Medium"

        logger.info(f"Issue classified as {issue_type} with severity {severity} (confidence: {confidence})")
        return issue_type, severity, confidence, category, priority
    except Exception as e:
        logger.error(f"Error classifying issue: {e}")
        return "unknown", "Medium", 50.0, "public", "Medium"

def generate_report(image_content: bytes, description: str, issue_type: str, severity: str,
                    address: str, latitude: float, longitude: float,
                    issue_id: str, confidence: float, category: str, priority: str) -> dict:
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        location_str = (
            address if address and address.lower() != "not specified"
            else f"Coordinates: {latitude}, {longitude}" if latitude and longitude
            else "Unknown Location"
        )
        department = issue_department_map.get(issue_type, "City Department")
        map_link = f"https://www.google.com/maps?q={latitude},{longitude}" if latitude and longitude else "Coordinates unavailable"

        # Get the correct timezone based on coordinates
        timezone_str = get_timezone_name(latitude, longitude)
        timezone = pytz.timezone(timezone_str)

        # Generate template fields
        now = datetime.now(timezone)  # Use the local timezone
        local_time = now.strftime("%Y-%m-%d %H:%M")
        utc_time = now.astimezone(pytz.UTC).strftime("%H:%M")
        report_number = str(int(now.strftime("%Y%m%d%H%M%S")) % 1000000).zfill(6)
        report_id = f"SNAPFIX-{now.year}-{report_number}"
        image_filename = f"IMG1_{now.strftime('%Y%m%d_%H%M')}.jpg"

        prompt = f"""
You are an AI assistant for SnapFix AI, generating infrastructure issue reports.
Analyze the input below and return a structured JSON report (no markdown, no explanation).

Input:
- Issue Type: {issue_type.title()}
- Severity: {severity}
- Confidence: {confidence:.1f}%
- Description: {description}
- Category: {category}
- Location: {location_str}
- Issue ID: {issue_id}
- Responsible Department: {department}
- Map Link: {map_link}
- Priority: {priority}

For potholes, recommend specific actions like "Fill pothole and mark with cones within 48 hours."
Return this structure:
{{
  "issue_overview": {{
    "issue_type": "{issue_type.title()}",
    "severity": "{severity.lower()}",
    "confidence": {confidence},
    "category": "{category}",
    "summary_explanation": "Write a 4 to 5 line detailed explanation based on the provided image and description. Mention what visual elements helped identify the issue, how the description supported the classification, and specify the location clearly. The tone should be professional and focused on public infrastructure impact."
  }},
  "detailed_analysis": {{
    "root_causes": "Possible causes of the issue.",
    "potential_consequences_if_ignored": "Risks if the issue is not addressed.",
    "public_safety_risk": "low|medium|high",
    "environmental_impact": "low|medium|high|none",
    "structural_implications": "low|medium|high|none",
    "legal_or_regulatory_considerations": "Relevant regulations or null"
  }},
  "recommended_actions": ["Action 1", "Action 2"],
  "responsible_authorities_or_parties": [
    {{
      "name": "{department}",
      "type": "public",
      "reason_for_responsibility": "Reason for responsibility."
    }}
  ],
  "additional_notes": "Location: {location_str}. View live location: {map_link}. Issue ID: {issue_id}",
  "template_fields": {{
    "oid": "{report_id}",
    "timestamp": "{local_time}",
    "utc_time": "{utc_time}",
    "priority": "{priority}",
    "tracking_link": "https://momentum-ai.org/track/{report_id}",
    "image_filename": "{image_filename}",
    "ai_tag": "{issue_type.title()}",
    "app_version": "1.5.3",
    "device_type": "Mobile (Generic)",
    "map_link": "{map_link}"
  }}
}}
Keep the report under 200 words, professional, and specific to the issue type and description.
"""

        response = model.generate_content([prompt, Image.open(io.BytesIO(image_content))])
        logger.info(f"Gemini report output: {response.text}")

        json_text = response.text[response.text.find("{"):response.text.rfind("}") + 1]
        report = json.loads(json_text)

        report["additional_notes"] = f"Location: {location_str}. View live location: {map_link}. Issue ID: {issue_id}"
        report["template_fields"]["map_link"] = map_link
        return report
    except Exception as e:
        logger.error(f"Error generating report: {e}")
        timezone_str = get_timezone_name(latitude, longitude)
        timezone = pytz.timezone(timezone_str)
        now = datetime.now(timezone)
        local_time = now.strftime("%Y-%m-%d %H:%M")
        utc_time = now.astimezone(pytz.UTC).strftime("%H:%M")
        report_number = str(int(now.strftime("%Y%m%d%H%M%S")) % 1000000).zfill(6)
        report_id = f"SNAPFIX-{now.year}-{report_number}"
        image_filename = f"IMG1_{now.strftime('%Y%m%d_%H%M')}.jpg"
        map_link = f"https://www.google.com/maps?q={latitude},{longitude}" if latitude and longitude else "Coordinates unavailable"
        return {
            "issue_overview": {
                "issue_type": issue_type.title(),
                "severity": severity.lower(),
                "confidence": confidence,
                "category": category,
                "summary_explanation": f"AI identified a {issue_type} at {location_str} based on: {description}."
            },
            "detailed_analysis": {
                "root_causes": "Wear and tear or heavy traffic." if issue_type == "pothole" else "Undetermined; requires inspection.",
                "potential_consequences_if_ignored": "Vehicle damage or accidents." if issue_type == "pothole" else "Potential safety or compliance risks.",
                "public_safety_risk": severity.lower(),
                "environmental_impact": "none" if issue_type == "pothole" else "low",
                "structural_implications": "low" if issue_type not in ["structural_damage", "property_damage"] else "medium",
                "legal_or_regulatory_considerations": "Road safety regulations." if issue_type == "pothole" else "Local regulations may apply."
            },
            "recommended_actions": [
                "Fill pothole and mark with cones within 48 hours." if issue_type == "pothole" else f"Notify the {department} for immediate action.",
                "Conduct a professional inspection."
            ],
            "responsible_authorities_or_parties": [
                {
                    "name": department,
                    "type": "public",
                    "reason_for_responsibility": f"Handles {issue_type} issues in {category} areas."
                }
            ],
            "additional_notes": f"Location: {location_str}. View live location: {map_link}. Issue ID: {issue_id}",
            "template_fields": {
                "oid": report_id,
                "timestamp": local_time,
                "utc_time": utc_time,
                "priority": priority,
                "tracking_link": f"https://momentum-ai.org/track/{report_id}",
                "image_filename": image_filename,
                "ai_tag": issue_type.title(),
                "app_version": "1.5.3",
                "device_type": "Mobile (Generic)",
                "map_link": map_link
            }
        }