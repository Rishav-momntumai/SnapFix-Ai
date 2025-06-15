from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from routes.issues import router as issues_router

app = FastAPI()

# ✅ Allow CORS from both local and deployed frontend (Netlify)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",                # for Vite local dev
        "https://snapfix-ai.netlify.app"       # for deployed Netlify site
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Root route to verify backend status
@app.get("/")
def read_root():
    return {"message": "SnapFix AI backend is up and running!"}

# ✅ Optional favicon route to avoid browser warnings
@app.get("/favicon.ico")
async def favicon():
    return FileResponse("static/favicon.ico")

# ✅ Include issue handling routes
app.include_router(issues_router, prefix="/api")

# ✅ Run the app locally for development (ignored on Render)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
