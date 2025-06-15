from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from routes.issues import router as issues_router  # Ensure this exists

app = FastAPI()

# CORS setup to allow both local and Netlify frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://snapfix-ai.onrender.com",              # Local development (Vite)
        "https://snapfix-ai.netlify.app"      # Netlify deployment
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root route for health check
@app.get("/")
def read_root():
    return {"message": "SnapFix AI backend is up and running!"}

# Serve favicon if it exists
@app.get("/favicon.ico")
async def favicon():
    return FileResponse("static/favicon.ico")  # optional, file must exist

# API router for issues
app.include_router(issues_router, prefix="/api")