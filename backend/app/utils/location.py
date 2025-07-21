from typing import List, Dict
import logging
from utils.constants import issue_category_map  # Updated import

logger = logging.getLogger(__name__)

def get_authority(address: str, issue_type: str, latitude: float, longitude: float, category: str) -> List[Dict[str, str]]:
    """
    Determine the relevant authorities for an issue based on issue type and location.
    Returns a list of dictionaries with department details (name, email, type).
    """
    try:
        # Normalize issue_type to lowercase
        issue_type = issue_type.lower() if issue_type else "unknown"
        issue_category = category if category else issue_category_map.get(issue_type, "public")

        # Define department mappings with multiple authorities where applicable
        public_department_emails = {
            "fire": [
                {"name": "Fire Department", "email": "chrishabh07@gmail.com", "type": "fire"},
                {"name": "Police Department", "email": "chrishabh100@gmail.com", "type": "police"}
            ],
            "pothole": [
                {"name": "Public Works Department", "email": "chrishabh100@gmail.com", "type": "public_works"}
            ],
            "garbage": [
                {"name": "Sanitation Department", "email": "chrishabh1000@gmail.com", "type": "sanitation"}
            ],
            "vandalism": [
                {"name": "Police Department", "email": "chrishabh100@gmail.com", "type": "police"}
            ],
            "flood": [
                {"name": "Public Works Department", "email": "joel@momntumai.com", "type": "public_works"},
                {"name": "Emergency Services", "email": "chrishabh1000@gmail.com", "type": "emergency"}
            ],
            "road_damage": [
                {"name": "Public Works Department", "email": "chrishabh100@gmail.com", "type": "public_works"}
            ],
            "broken_streetlight": [
                {"name": "Public Works Department", "email": "chrishabh1000@gmail.com", "type": "public_works"}
            ],
            "graffiti": [
                {"name": "Sanitation Department", "email": "chrishabh1000@gmail.com", "type": "sanitation"}
            ],
            "open_drain": [
                {"name": "Public Works Department", "email": "chrishabh100@gmail.com", "type": "public_works"}
            ],
            "blocked_drain": [
                {"name": "Public Works Department", "email": "chrishabh100@gmail.com", "type": "public_works"}
            ],
            "illegal_construction": [
                {"name": "Municipal Authority", "email": "chrishabh1000@gmail.com", "type": "municipal"}
            ],
            "tree_fallen": [
                {"name": "Public Works Department", "email": "chrishabh1000@gmail.com", "type": "public_works"}
            ],
            "public_toilet_issue": [
                {"name": "Sanitation Department", "email": "chrishabh1000@gmail.com", "type": "sanitation"}
            ],
            "stray_animals": [
                {"name": "Animal Control", "email": "joel@momntumai.com", "type": "animal_control"}
            ],
            "noise_pollution": [
                {"name": "Environmental Department", "email": "chrishabh1000@gmail.com", "type": "environmental"}
            ],
            "air_pollution": [
                {"name": "Environmental Department", "email": "chrishabh1000@gmail.com", "type": "environmental"}
            ],
            "water_leakage": [
                {"name": "Public Works Department", "email": "chrishabh100@gmail.com", "type": "public_works"}
            ],
            "street_vendor_encroachment": [
                {"name": "Municipal Authority", "email": "chrishabh1000@gmail.com", "type": "municipal"}
            ],
            "signal_malfunction": [
                {"name": "Traffic Department", "email": "chrishabh100@gmail.com", "type": "traffic"},
                {"name": "Police Department", "email": "chrishabh100@gmail.com", "type": "police"}
            ],
            "waterlogging": [
                {"name": "Public Works Department", "email": "chrishabh100@gmail.com", "type": "public_works"},
                {"name": "Emergency Services", "email": "chrishabh1000@gmail.com", "type": "emergency"}
            ],
            "other": [
                {"name": "City Department", "email": "chrishabh1000@gmail.com", "type": "general"}
            ],
            "unknown": [
                {"name": "City Department", "email": "chrishabh1000@gmail.com", "type": "general"}
            ]
        }

        business_department_emails = {
            "property_damage": [
                {"name": "Property Management", "email": "rishav@momntumai.com", "type": "property_management"}
            ],
            "structural_damage": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "door_lock_issue": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "furniture_damage": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "home_repair": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "plumbing_issue": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "electrical_issue": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "ac_not_working": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "cctv_issue": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "internet_issue": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "water_purifier_issue": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "paint_damage": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "ceiling_leakage": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "appliance_malfunction": [
                {"name": "Maintenance Department", "email": "chrishabh2002@gmail.com", "type": "maintenance"}
            ],
            "other": [
                {"name": "Business Support", "email": "chrishabh2002@gmail.com", "type": "business_support"}
            ],
            "unknown": [
                {"name": "Business Support", "email": "chrishabh2002@gmail.com", "type": "business_support"}
            ]
        }

        # Handle public_and_business category based on location
        if issue_category == "public_and_business":
            if 28.5 < latitude < 28.7 and 77.0 < longitude < 77.4:  # Example: Delhi business district
                issue_category = "business"
            else:
                issue_category = "public"

        # Select authorities based on category
        authorities = (
            business_department_emails.get(issue_type, [{"name": "Business Support", "email": "chrishabh2002@gmail.com", "type": "business_support"}])
            if issue_category == "business"
            else public_department_emails.get(issue_type, [{"name": "City Department", "email": "chrishabh1000@gmail.com", "type": "general"}])
        )

        # Log selected authorities
        logger.info(f"Authorities for issue type {issue_type} at {address}: {[auth['name'] for auth in authorities]}")
        return authorities
    except Exception as e:
        logger.error(f"Failed to determine authorities for issue type {issue_type}: {str(e)}")
        return [{"name": "City Department", "email": "chrishabh1000@gmail.com", "type": "general"}]
