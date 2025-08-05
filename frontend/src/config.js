const API_BASE_URL = import.meta.env.MODE === 'development'
  ? 'http://localhost:8000/api'  // ✅ When running locally
  : 'https://snapfix-ai-rqmt.onrender.com/api'; // ✅ Production backend on Render

export default API_BASE_URL;

// const API_BASE_URL = import.meta.env.VITE_API_URL;
// export default API_BASE_URL;
