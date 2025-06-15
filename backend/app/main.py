from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from routes.issues import router as issues_router

app = FastAPI()

# Enable CORS for frontend access (e.g. Vite app on port 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root route to avoid 404 on '/'
@app.get("/")
def read_root():
    return {"message": "SnapFix AI backend is up and running!"}

# Handle favicon requests to avoid 404 in browser
@app.get("/favicon.ico")
async def favicon():
    return FileResponse("static/favicon.ico")

# Include your issue-related routes
app.include_router(issues_router, prefix="/api")

# Run the app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
