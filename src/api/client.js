import axios from 'axios';

/**
 * API Client for MROE Dashboard
 * Configured with base URL and common headers
 */

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const client = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
client.interceptors.request.use(
  (config) => {
    console.log('[API] Request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('[API] Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor
client.interceptors.response.use(
  (response) => {
    console.log('[API] Response:', response.status, response.statusText);
    return response.data;
  },
  (error) => {
    console.error('[API] Response error:', error.message);
    return Promise.reject(error);
  }
);

export default client;
