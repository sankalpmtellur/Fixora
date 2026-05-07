import axios from 'axios';

const resolvedBaseUrl = (() => {
  const envBase = import.meta.env.VITE_API_BASE_URL?.trim();
  if (envBase) return envBase.replace(/\/+$/, '');

  if (window.location.hostname === 'localhost') {
    return 'http://localhost:5005/api';
  }

  // On Vercel, default to same-origin API path.
  return '/api';
})();

const api = axios.create({
  baseURL: resolvedBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('fixora_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
