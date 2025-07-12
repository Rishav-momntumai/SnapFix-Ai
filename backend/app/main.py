from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from routes.issues import router as issues_router
import logging
import os
import uvicorn

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI()

# Enable CORS for frontend access (production & local dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://snapfix-ai-1.onrender.com",  # ✅ Frontend URL on Render
        "http://localhost:5173"               # ✅ For local development
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root route to test backend is running
@app.get("/")
def read_root():
    logger.info("Root endpoint accessed")
    return {"message": "SnapFix AI backend is up and running!"}

# Favicon route (optional)
@app.get("/favicon.ico")
async def favicon():
    logger.info("Favicon requested")
    return FileResponse("static/favicon.ico")

# Include your API routes
app.include_router(issues_router, prefix="/api")

# Optional: log when the app starts
@app.on_event("startup")
async def startup_event():
    logger.info("SnapFix AI backend started successfully.")

# Run the app (Render will inject the PORT)
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))  # Use the PORT provided by Render
    logger.info(f"Starting server on port {port}")
    uvicorn.run("main:app", host="0.0.0.0", port=port)
