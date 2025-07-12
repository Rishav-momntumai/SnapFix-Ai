from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from routes.issues import router as issues_router
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Enable CORS for frontend access (Vite app running on http://localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root route to confirm backend is running
@app.get("/")
def read_root():
    logger.info("Root endpoint accessed")
    return {"message": "SnapFix AI backend is up and running!"}

# Handle favicon requests to avoid 404 in browser
@app.get("/favicon.ico")
async def favicon():
    logger.info("Favicon requested")
    # Ensure static/favicon.ico exists; create a placeholder if needed
    return FileResponse("static/favicon.ico")

# Include issue-related routes under /api prefix
app.include_router(issues_router, prefix="/api")

# Log startup
@app.on_event("startup")
async def startup_event():
    logger.info("SnapFix AI backend started")

# Run the app
if __name__ == "__main__":
    import uvicorn
    logger.info("Starting Uvicorn server")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)