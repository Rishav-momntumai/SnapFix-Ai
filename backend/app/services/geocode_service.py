import requests
import logging
from typing import Dict, Any
import os
from dotenv import load_dotenv

load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY") or "YOUR_GOOGLE_API_KEY"

def geocode_address(address: str) -> Dict[str, Any]:
    if not address:
        return {"latitude": 0.0, "longitude": 0.0, "address": "Unknown Address", "zip_code": ""}
    if GOOGLE_API_KEY == "YOUR_GOOGLE_API_KEY":
        logger.error("Invalid Google API key. Set GOOGLE_API_KEY in environment variables.")
        raise ValueError("Invalid Google API key")
    try:
        url = "https://maps.googleapis.com/maps/api/geocode/json"
        params = {
            "address": address,
            "key": GOOGLE_API_KEY
        }
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        if data["status"] != "OK":
            logger.error(f"Geocoding failed: {data['status']}")
            return {"latitude": 0.0, "longitude": 0.0, "address": address, "zip_code": ""}
        result = data["results"][0]
        location = result["geometry"]["location"]
        zip_code = ""
        for component in result["address_components"]:
            if "postal_code" in component["types"]:
                zip_code = component["long_name"]
                break
        return {
            "latitude": location["lat"],
            "longitude": location["lng"],
            "address": result["formatted_address"],
            "zip_code": zip_code
        }
    except Exception as e:
        logger.error(f"Geocoding error: {str(e)}")
        return {"latitude": 0.0, "longitude": 0.0, "address": address, "zip_code": ""}

def reverse_geocode(latitude: float, longitude: float) -> Dict[str, str]:
    if not latitude or not longitude:
        return {"address": "Unknown Address", "zip_code": ""}
    if GOOGLE_API_KEY == "YOUR_GOOGLE_API_KEY":
        logger.error("Invalid Google API key. Set GOOGLE_API_KEY in environment variables.")
        raise ValueError("Invalid Google API key")
    try:
        url = "https://maps.googleapis.com/maps/api/geocode/json"
        params = {
            "latlng": f"{latitude},{longitude}",
            "key": GOOGLE_API_KEY
        }
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        if data["status"] != "OK":
            logger.error(f"Reverse geocoding failed: {data['status']}")
            return {"address": "Unknown Address", "zip_code": ""}
        result = data["results"][0]
        zip_code = ""
        for component in result["address_components"]:
            if "postal_code" in component["types"]:
                zip_code = component["long_name"]
                break
        return {
            "address": result["formatted_address"],
            "zip_code": zip_code
        }
    except Exception as e:
        logger.error(f"Reverse geocoding error: {str(e)}")
        return {"address": "Unknown Address", "zip_code": ""}