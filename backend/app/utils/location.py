from utils.constants import issue_category_map  # Updated import

def get_authority(address: str, issue_type: str, latitude: float, longitude: float, category: str) -> str:
    issue_category = category if category else issue_category_map.get(issue_type, "public")

    public_department_emails = {
        "fire": "chrishabh07@gmail.com",
        "pothole": "chrishabh100@gmail.com",
        "garbage": "chrishabh1000@gmail.com",
        "vandalism": "chrishabh100@gmail.com",
        "flood": "joel@momentum-ai.org",
        "road_damage": "chrishabh100@gmail.com",
        "broken_streetlight": "chrishabh1000@gmail.com",
        "graffiti": "chrishabh1000@gmail.com",
        "open_drain": "chrishabh100@gmail.com",
        "blocked_drain": "chrishabh100@gmail.com",
        "illegal_construction": "chrishabh1000@gmail.com",
        "tree_fallen": "chrishabh1000@gmail.com",
        "public_toilet_issue": "chrishabh1000@gmail.com",
        "stray_animals": "chrishabh1000@gmail.com",
        "noise_pollution": "chrishabh1000@gmail.com",
        "air_pollution": "chrishabh1000@gmail.com",
        "water_leakage": "chrishabh100@gmail.com",
        "street_vendor_encroachment": "chrishabh1000@gmail.com",
        "signal_malfunction": "chrishabh100@gmail.com",
        "waterlogging": "chrishabh100@gmail.com",
        "other": "chrishabh1000@gmail.com",
        "unknown": "chrishabh1000@gmail.com"
    }

    business_department_emails = {
        "property_damage": "rishav@momentum-ai.org",
        "structural_damage": "chrishabh2002@gmail.com",
        "door_lock_issue": "chrishabh2002@gmail.com",
        "furniture_damage": "chrishabh2002@gmail.com",
        "home_repair": "chrishabh2002@gmail.com",
        "plumbing_issue": "chrishabh2002@gmail.com",
        "electrical_issue": "chrishabh2002@gmail.com",
        "ac_not_working": "chrishabh2002@gmail.com",
        "cctv_issue": "chrishabh2002@gmail.com",
        "internet_issue": "chrishabh2002@gmail.com",
        "water_purifier_issue": "chrishabh2002@gmail.com",
        "paint_damage": "chrishabh2002@gmail.com",
        "ceiling_leakage": "chrishabh2002@gmail.com",
        "appliance_malfunction": "chrishabh2002@gmail.com",
        "other": "chrishabh2002@gmail.com",
        "unknown": "chrishabh2002@gmail.com"
    }

    if issue_category == "public_and_business":
        if 28.5 < latitude < 28.7 and 77.0 < longitude < 77.4:  # Example: Delhi business district
            issue_category = "business"
        else:
            issue_category = "public"

    if issue_category == "business":
        return business_department_emails.get(issue_type, "chrishabh2002@gmail.com")
    else:
        return public_department_emails.get(issue_type, "chrishabh1000@gmail.com")