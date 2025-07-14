from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from routes.issues import router as issues_router
import logging
import os
import uvicorn

# Setup logging with detailed format
logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI(title="SnapFix AI Backend")

# Enable CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://snapfix-ai-1.onrender.com",  # Frontend URL on Render
        "https://snapfix-ai.onrender.com",    # Backend URL (for same-origin or misconfig)
        "http://localhost:5173"               # Local development
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Log all incoming requests
@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.debug(f"Incoming request: {request.method} {request.url} from {request.client.host}")
    try:
        response = await call_next(request)
        logger.debug(f"Response status: {response.status_code} for {request.method} {request.url}")
        return response
    except Exception as e:
        logger.error(f"Error processing request {request.method} {request.url}: {str(e)}", exc_info=True)
        raise

# Global exception handler for unhandled errors
@app.exception_handler(Exception)
async def custom_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled exception in {request.method} {request.url}: {str(exc)}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": f"Internal server error: {str(exc)}"}
    )

# Root route to test backend
@app.get("/")
async def read_root():
    logger.debug("Root endpoint accessed")
    return {"message": "SnapFix AI backend is up and running!"}

# Favicon route
@app.get("/favicon.ico")
async def favicon():
    logger.debug("Favicon requested")
    favicon_path = "static/favicon.ico"
    if os.path.exists(favicon_path):
        return FileResponse(favicon_path)
    logger.warning("Favicon file not found")
    raise HTTPException(status_code=404, detail="Favicon not found")

# Health check endpoint
@app.get("/health")
async def health_check():
    logger.debug("Health check endpoint called")
    try:
        from services.mongodb_service import get_db
        db = get_db()
        db.command("ping")
        logger.debug("Database ping successful")
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(status_code=503, detail=f"Database unavailable: {str(e)}")

# Include API routes
app.include_router(issues_router, prefix="/api")

# Log startup
@app.on_event("startup")
async def startup_event():
    logger.info("SnapFix AI backend started successfully")

# Run the app
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))  # Render injects PORT
    logger.info(f"Starting server on port {port}")
    uvicorn.run("main:app", host="0.0.0.0", port=port, log_level="debug")