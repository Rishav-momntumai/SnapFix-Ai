// src/config.js
const API_BASE_URL = import.meta.env.MODE === 'development'
  ? 'http://localhost:8000'
  : 'https://snapfix-ai.onrender.com';

export default API_BASE_URL;