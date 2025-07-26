import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
import os
from dotenv import load_dotenv
import logging
from typing import List, Tuple, Optional
import base64
from fastapi import HTTPException

load_dotenv()
logger = logging.getLogger(__name__)

def send_email(
    to_email: str,
    subject: str,
    html_content: str,
    text_content: str,
    attachments: Optional[List[str]] = None,
    embedded_images: Optional[List[Tuple[str, str, str]]] = None
) -> bool:
    """
    Send an email with optional attachments and embedded images using Gmail SMTP.

    Args:
        to_email: Recipient email address.
        subject: Email subject.
        html_content: HTML content of the email, may include zip code.
        text_content: Plain text content of the email, may include zip code.
        attachments: List of file paths for attachments.
        embedded_images: List of tuples (cid, base64_data, mime_type) for embedded images (e.g., issue image, logo).

    Returns:
        bool: True if email was sent successfully, False otherwise.

    Raises:
        ValueError: If email configuration is missing in production.
        HTTPException: If email sending fails in production.
    """
    email_host = os.getenv("EMAIL_HOST", "smtp.gmail.com")
    email_port = os.getenv("EMAIL_PORT", "587")
    email_user = os.getenv("EMAIL_USER", "snapfix@momntumai.com")
    email_password = os.getenv("EMAIL_PASSWORD")

    if not all([email_host, email_port, email_user, email_password]):
        logger.error("Missing environment variables: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD")
        if os.getenv("ENV") == "production":
            raise ValueError("Missing email configuration in production")
        logger.warning("Skipping email sending due to missing configuration")
        return False

    # Log presence of zip code in content for debugging
    has_zip_code = "Zip Code" in text_content or "Zip Code" in html_content
    logger.debug(f"Preparing email to {to_email} with subject '{subject}'. Zip code included: {has_zip_code}")

    msg = MIMEMultipart("related")
    msg["From"] = email_user
    msg["To"] = to_email
    msg["Subject"] = subject

    alt = MIMEMultipart("alternative")
    try:
        alt.attach(MIMEText(text_content, "plain"))
        alt.attach(MIMEText(html_content, "html"))
        msg.attach(alt)
        logger.debug("Attached plain text and HTML content to email")
    except Exception as e:
        logger.error(f"Failed to attach email content: {str(e)}")
        if os.getenv("ENV") == "production":
            raise HTTPException(status_code=500, detail=f"Failed to attach email content: {str(e)}")
        return False

    if embedded_images:
        for cid, base64_data, mime_type in embedded_images:
            try:
                img_data = base64.b64decode(base64_data)
                img = MIMEImage(img_data, _subtype=mime_type.split("/")[-1])
                img.add_header("Content-ID", f"<{cid}>")
                msg.attach(img)
                logger.debug(f"Embedded image {cid} added to email")
            except Exception as e:
                logger.error(f"Failed to embed image {cid}: {str(e)}")
                if os.getenv("ENV") == "production":
                    raise HTTPException(status_code=500, detail=f"Failed to embed image {cid}: {str(e)}")
                continue

    if attachments:
        for file_path in attachments:
            try:
                with open(file_path, "rb") as f:
                    part = MIMEText(f.read(), "base64", "utf-8")
                    part.add_header("Content-Disposition", f"attachment; filename={os.path.basename(file_path)}")
                    msg.attach(part)
                    logger.debug(f"Attached file {file_path} to email")
            except Exception as e:
                logger.error(f"Failed to attach file {file_path}: {str(e)}")
                if os.getenv("ENV") == "production":
                    raise HTTPException(status_code=500, detail=f"Failed to attach file {file_path}: {str(e)}")
                continue

    try:
        logger.debug(f"Connecting to SMTP server {email_host}:{email_port} as {email_user}")
        server = smtplib.SMTP(email_host, int(email_port))
        server.starttls()
        logger.debug(f"Logging in to SMTP server as {email_user}")
        server.login(email_user, email_password)
        logger.debug(f"Sending email to {to_email} with subject: {subject}")
        server.send_message(msg)
        server.quit()
        logger.info(f"Email sent successfully to {to_email}")
        return True
    except smtplib.SMTPAuthenticationError as e:
        logger.error(f"SMTP authentication failed for {email_user}: {str(e)}")
        if os.getenv("ENV") == "production":
            raise HTTPException(status_code=500, detail="SMTP authentication failed")
        return False
    except smtplib.SMTPConnectError as e:
        logger.error(f"Failed to connect to SMTP server {email_host}:{email_port}: {str(e)}")
        if os.getenv("ENV") == "production":
            raise HTTPException(status_code=500, detail=f"SMTP connection failed: {str(e)}")
        return False
    except smtplib.SMTPServerDisconnected as e:
        logger.error(f"SMTP server disconnected during operation: {str(e)}")
        if os.getenv("ENV") == "production":
            raise HTTPException(status_code=500, detail=f"SMTP server disconnected: {str(e)}")
        return False
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {str(e)}")
        if os.getenv("ENV") == "production":
            raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")
        return False