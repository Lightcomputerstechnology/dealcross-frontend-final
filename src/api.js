// src/api.js
import axios from 'axios';

// Base API config
const API = axios.create({
  baseURL: 'https://d-final.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach auth token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Unified error handler
const handleError = (error) => {
  const message = error?.response?.data?.detail || 'An error occurred.';
  throw new Error(message);
};

// =================== AUTH ===================
export const register = async (data) => {
  try {
    const res = await API.post('/auth/register', data);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const login = async (data) => {
  try {
    const res = await API.post('/auth/login', data);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await API.post('/auth/forgot-password', { email });
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

// =================== WALLET ===================
export const fundWallet = async (data) => {
  try {
    const res = await API.post('/wallet/fund', data);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getWalletBalance = async () => {
  try {
    const res = await API.get('/wallet/balance');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getWalletHistory = async () => {
  try {
    const res = await API.get('/wallet/history');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

// =================== DEALS ===================
export const startDeal = async (data) => {
  try {
    const res = await API.post('/deals/start', data);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getMyDeals = async () => {
  try {
    const res = await API.get('/deals/my-deals');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const markAsDelivered = async (dealId) => {
  try {
    const res = await API.post(`/deals/${dealId}/mark-delivered`);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const releaseFunds = async (dealId) => {
  try {
    const res = await API.post(`/deals/${dealId}/release-funds`);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const raiseDispute = async (dealId) => {
  try {
    const res = await API.post(`/deals/${dealId}/dispute`);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

// =================== KYC ===================
export const submitKYC = async (formData) => {
  try {
    const res = await API.post('/kyc/submit', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getKYCStatus = async () => {
  try {
    const res = await API.get('/kyc/status');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

// =================== ADMIN ===================
export const getKYCRequests = async () => {
  try {
    const res = await API.get('/admin/kyc-requests');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const approveKYC = async (id) => {
  try {
    const res = await API.post(`/admin/kyc-approve/${id}`);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const rejectKYC = async (id) => {
  try {
    const res = await API.post(`/admin/kyc-reject/${id}`);
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getAuditLogs = async () => {
  try {
    const res = await API.get('/admin/audit-logs');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await API.get('/admin/users');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};
