// File: src/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://d-final.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach auth token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Global error handler
const handleError = (error) => {
  console.error('API Error:', error);
  if (error.response) {
    const message = error.response.data?.detail || 'An error occurred.';
    throw new Error(message);
  } else if (error.request) {
    throw new Error('No response from server. Please check your connection.');
  } else {
    throw new Error('Request setup failed.');
  }
};

// ========== AUTH ==========
export const register = async (data) => {  // ✅ Corrected endpoint
  try {
    const res = await API.post('/auth/signup', data);  // Changed to /auth/signup
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const login = async (formData) => {  // formData is URLSearchParams
  try {
    const res = await API.post('/auth/login', formData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export default API;