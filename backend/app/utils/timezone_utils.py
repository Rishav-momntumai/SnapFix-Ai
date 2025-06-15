import logging
from timezonefinder import TimezoneFinder

logger = logging.getLogger(__name__)

def get_timezone_name(latitude: float, longitude: float) -> str:
    """Get timezone name based on coordinates using timezonefinder."""
    try:
        tf = TimezoneFinder()
        timezone_name = tf.timezone_at(lat=latitude, lng=longitude)
        return timezone_name or "UTC"
    except Exception as e:
        logger.warning(f"Timezone lookup failed: {e}")
        return "UTC"