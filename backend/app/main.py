from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from routes.issues import router as issues_router
import logging
import os
import uvicorn
import json
from pathlib import Path

# Setup logging
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(title="SnapFix AI Backend")

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://snapfix-ai-frontend-24jlyd3yv-rishav-momntumais-projects.vercel.app",
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Middleware to log all requests
@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.debug(f"Incoming request: {request.method} {request.url}")
    try:
        response = await call_next(request)
        logger.debug(f"Completed with status: {response.status_code}")
        return response
    except Exception as e:
        logger.error(f"Request error: {str(e)}", exc_info=True)
        raise

# Global error handler
@app.exception_handler(Exception)
async def custom_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled exception in {request.method} {request.url}: {str(exc)}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": f"Internal server error: {str(exc)}"}
    )

# Root endpoint
@app.get("/")
async def read_root():
    return {"message": "SnapFix AI backend is up and running!"}

# Ping endpoint for testing
@app.get("/ping")
async def ping():
    return {"message": "pong"}

# Favicon route
@app.get("/favicon.ico")
async def favicon():
    favicon_path = "static/favicon.ico"
    if os.path.exists(favicon_path):
        return FileResponse(favicon_path)
    raise HTTPException(status_code=404, detail="Favicon not found")

# Health check endpoint
@app.get("/health")
async def health_check():
    try:
        from services.mongodb_service import get_db
        db = get_db()
        db.command("ping")
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=503, detail=f"Database unavailable: {str(e)}")

# Authorities endpoint
@app.get("/api/authorities/{zip_code}")
async def get_authorities_by_zip_code(zip_code: str):
    try:
        zip_code_authorities_path = Path("data/zip_code_authorities.json")
        if not zip_code_authorities_path.exists():
            raise HTTPException(status_code=404, detail="Authorities data not found")

        with open(zip_code_authorities_path, "r") as f:
            authorities_data = json.load(f)

        authorities = authorities_data.get(zip_code, authorities_data.get("default", {}))
        formatted_authorities = {}
        for auth_type, auth_list in authorities.items():
            formatted_authorities.setdefault(auth_type, []).extend(auth_list)
        return formatted_authorities

    except Exception as e:
        logger.error(f"Error fetching authorities for {zip_code}: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error fetching authorities: {str(e)}")

# Mount your API router
app.include_router(issues_router, prefix="/api")

# Startup event
@app.on_event("startup")
async def startup_event():
    logger.info("SnapFix AI backend started successfully")

# Entrypoint for Render
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))  # Use Render's dynamic port
    logger.info(f"Starting server on port {port}")
    uvicorn.run("main:app", host="0.0.0.0", port=port, log_level="debug")
