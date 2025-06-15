import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os
import logging
import base64
from dotenv import load_dotenv

load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def send_email(
    to_email: str,
    subject: str,
    html_content: str = None,
    text_content: str = None,
    attachments: list = None,
    embedded_images: list = None
):
    """Send an email with optional HTML content, plain text, attachments, and embedded images."""
    required_env_vars = ["SMTP_HOST", "SMTP_PORT", "SMTP_EMAIL", "SMTP_PASSWORD"]
    missing_vars = [var for var in required_env_vars if not os.getenv(var)]
    if missing_vars:
        logger.error(f"Missing environment variables: {', '.join(missing_vars)}")
        raise ValueError(f"Missing environment variables: {', '.join(missing_vars)}")
    
    try:
        msg = MIMEMultipart('mixed')
        msg['From'] = os.getenv("SMTP_EMAIL")
        msg['To'] = to_email
        msg['Subject'] = subject

        if html_content or text_content:
            msg_alternative = MIMEMultipart('alternative')
            msg.attach(msg_alternative)

            if text_content:
                part1 = MIMEText(text_content, 'plain')
                msg_alternative.attach(part1)

            if html_content:
                part2 = MIMEText(html_content, 'html')
                msg_alternative.attach(part2)

        if attachments:
            for file_content, filename, content_type in attachments:
                part = MIMEBase('application', 'octet-stream')
                part.set_payload(file_content)
                encoders.encode_base64(part)
                part.add_header(
                    'Content-Disposition',
                    f'attachment; filename={filename}'
                )
                msg.attach(part)

        if embedded_images:
            for cid, content, content_type in embedded_images:
                part = MIMEBase('image', content_type.split('/')[-1])
                part.set_payload(base64.b64decode(content))
                encoders.encode_base64(part)
                part.add_header('Content-ID', f'<{cid}>')
                part.add_header('Content-Disposition', 'inline', filename=cid)
                msg.attach(part)

        with smtplib.SMTP(os.getenv("SMTP_HOST"), int(os.getenv("SMTP_PORT"))) as server:
            server.starttls()
            server.login(os.getenv("SMTP_EMAIL"), os.getenv("SMTP_PASSWORD"))
            server.send_message(msg)
        logger.info(f"Email sent successfully to {to_email}")
    except Exception as e:
        logger.error(f"Failed to send email to {to_email}: {e}")
        raise