import axios from 'axios';

const API = axios.create({
  baseURL: 'https://d-final.onrender.com',
  headers: { 'Content-Type': 'application/json' },
});

// Attach auth token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Error handler
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
export const register = async (data) => { try { const res = await API.post('/auth/signup', data); return res.data; } catch (err) { handleError(err); } };
export const login = async (formData) => { try { const res = await API.post('/auth/login', formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}); return res.data; } catch (err) { handleError(err); } };
export const forgotPassword = async (email) => { try { const res = await API.post('/auth/forgot-password', { email }); return res.data; } catch (err) { handleError(err); } };
export const getCurrentUser = async () => { try { const res = await API.get('/auth/me'); return res.data; } catch (err) { handleError(err); } };

// ========== WALLET ==========
export const fundWalletCard = async (amount) => { try { const res = await API.post('/wallet/fund/card', { amount }); return res.data; } catch (err) { handleError(err); } };
export const fundWalletBank = async (amount) => { try { const res = await API.post('/wallet/fund/bank', { amount }); return res.data; } catch (err) { handleError(err); } };
export const fundWalletCrypto = async (amount, cryptoType) => { try { const res = await API.post('/wallet/fund/crypto', { amount, crypto_type: cryptoType }); return res.data; } catch (err) { handleError(err); } };
export const getWalletBalance = async () => { try { const res = await API.get('/wallet/balance'); return res.data; } catch (err) { handleError(err); } };
export const getWalletHistory = async () => { try { const res = await API.get('/wallet/transactions'); return res.data; } catch (err) { handleError(err); } };
// ========== WALLET SUMMARY ==========
export const getWalletSummary = async () => {
  try {
    const res = await API.get('/wallet/summary');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};


// ========== KYC ==========
export const getKYCStatus = async () => {
  try {
    const res = await API.get('/kyc/my-status');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};


// ========== DEALS ==========
export const getMyDeals = async () => { try { const res = await API.get('/deals/tracker'); return res.data.data; } catch (err) { handleError(err); } };
export const getConfirmedPairing = async () => {
  try {
    const res = await API.get('/deals/pairing/confirmed');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

// ========== NEW (FIX) DEAL ACTIONS ==========
export const fundDeal = async (dealId) => { 
  try { const res = await API.post(`/deals/${dealId}/fund`); return res.data; } 
  catch (err) { handleError(err); } 
};

export const deliverDeal = async (dealId, deliveryData) => { 
  try { const res = await API.post(`/deals/${dealId}/deliver`, deliveryData); return res.data; } 
  catch (err) { handleError(err); } 
};

export const releaseDeal = async (dealId) => { 
  try { const res = await API.post(`/deals/${dealId}/release`); return res.data; } 
  catch (err) { handleError(err); } 
};

export const disputeDeal = async (dealId, reason) => { 
  try { const res = await API.post(`/disputes/`, { deal_id: dealId, reason }); return res.data; } 
  catch (err) { handleError(err); } 
};

// ========== UPGRADE ==========
export const upgradeSubscriptionCard = async (plan) => { try { const res = await API.post('/subscriptions/upgrade/card', { plan }); return res.data; } catch (err) { handleError(err); } };
export const upgradeSubscriptionBank = async (plan) => { try { const res = await API.post('/subscriptions/upgrade/bank', { plan }); return res.data; } catch (err) { handleError(err); } };
export const upgradeSubscriptionCrypto = async (plan, cryptoType) => { try { const res = await API.post('/subscriptions/upgrade/crypto', { plan, crypto_type: cryptoType }); return res.data; } catch (err) { handleError(err); } };

// ========== ADMIN ==========
export const getAuditLogs = async () => { try { const res = await API.get('/admin/audit-logs'); return res.data; } catch (err) { handleError(err); } };

// ========== ADMIN METRICS ==========
export const getAdminMetrics = async () => {
  try {
    const res = await API.get('/admin-metrics');
    return res.data;
  } catch (err) {
    handleError(err);
  }
};

export default API;
