from typing import List, Dict
import logging
import json
from pathlib import Path
from utils.timezone import get_timezone_name

logger = logging.getLogger(__name__)

def load_json_data(file_name: str) -> dict:
    """Load JSON data from a file."""
    try:
        file_path = Path(__file__).parent.parent / "data" / file_name
        with open(file_path, "r") as file:
            data = json.load(file)
        logger.debug(f"Loaded JSON data from {file_path}")
        return data
    except FileNotFoundError:
        logger.error(f"JSON file {file_path} not found")
        return {}
    except json.JSONDecodeError as e:
        logger.error(f"Failed to decode JSON from {file_path}: {str(e)}")
        return {}

def get_authority(address: str, issue_type: str, latitude: float, longitude: float, category: str) -> List[Dict[str, str]]:
    """
    Determine the relevant authorities for an issue based on issue type, category, and coordinates.
    Returns a list of dictionaries with department details (name, email, type) and timezone.
    """
    try:
        issue_type = issue_type.lower() if issue_type else "unknown"
        issue_category_map = load_json_data("issue_category_map.json")
        issue_category = category if category else issue_category_map.get(issue_type, "public")
        timezone = get_timezone_name(latitude, longitude)
        logger.debug(f"Resolved timezone for coordinates ({latitude}, {longitude}): {timezone}")

        # Default department mappings for fallback
        default_authorities = {
            "public": [{"name": "City Department", "email": "chrishabh1000@gmail.com", "type": "general", "timezone": timezone}],
            "business": [{"name": "Business Support", "email": "chrishabh2002@gmail.com", "type": "business_support", "timezone": timezone}],
            "public_and_business": [{"name": "City Department", "email": "chrishabh1000@gmail.com", "type": "general", "timezone": timezone}]
        }

        authorities = default_authorities.get(issue_category, default_authorities["public"])
        logger.info(f"Authorities for issue type {issue_type} at {address} (timezone: {timezone}): {[auth['name'] for auth in authorities]}")
        return authorities
    except Exception as e:
        logger.error(f"Failed to determine authorities for issue type {issue_type}: {str(e)}")
        return [{"name": "City Department", "email": "chrishabh1000@gmail.com", "type": "general", "timezone": "UTC"}]

def get_authority_by_zip_code(zip_code: str, issue_type: str, category: str) -> List[Dict[str, str]]:
    """
    Determine authorities based on zip code, issue type, and category.
    Returns a list of dictionaries with department details (name, email, type) and timezone,
    or a message if the zip code is not supported.
    """
    try:
        # Validate zip code format (5 digits)
        if not zip_code or not zip_code.isdigit() or len(zip_code) != 5:
            logger.warning(f"Invalid zip code format: {zip_code}. Returning unavailable message.")
            return [{"message": "Snapfix services are not available in this area, coming soon in the future"}]

        issue_type = issue_type.lower() if issue_type else "unknown"
        issue_category_map = load_json_data("issue_category_map.json")
        issue_category = category if category else issue_category_map.get(issue_type, "public")
        issue_department_map = load_json_data("issue_department_map.json")
        departments = issue_department_map.get(issue_type, ["general"])

        zip_code_authorities = load_json_data("zip_code_authorities.json")
        zip_key = zip_code if zip_code in zip_code_authorities else None
        if not zip_key:
            logger.warning(f"Zip code {zip_code} not found in database. Returning unavailable message.")
            return [{"message": "Snapfix services are not available in this area, coming soon in the future"}]

        authorities = []
        for dept in departments:
            if dept in zip_code_authorities.get(zip_key, {}):
                authorities.extend(zip_code_authorities[zip_key][dept])

        if not authorities:
            logger.warning(f"No matching authorities for zip code {zip_code} and issue type {issue_type}. Returning unavailable message.")
            return [{"message": "Snapfix services are not available in this area, coming soon in the future"}]

        logger.info(f"Authorities for zip code {zip_code} and issue type {issue_type} (timezone: {authorities[0]['timezone'] if authorities else 'UTC'}): {[auth['name'] for auth in authorities]}")
        return authorities
    except Exception as e:
        logger.error(f"Failed to determine authorities for zip code {zip_code} and issue type {issue_type}: {str(e)}")
        return [{"message": "Snapfix services are not available in this area, coming soon in the future"}]