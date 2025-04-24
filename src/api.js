// File: src/api.js

import axios from 'axios';

const API = axios.create({ baseURL: 'https://d-final.onrender.com', headers: { 'Content-Type': 'application/json', }, });

// Attach auth token API.interceptors.request.use((config) => { const token = localStorage.getItem('token'); if (token) config.headers.Authorization = Bearer ${token}; return config; });

// Global error handler const handleError = (error) => { console.error('API Error:', error); if (error.response) { const message = error.response.data?.detail || 'An error occurred.'; throw new Error(message); } else if (error.request) { throw new Error('No response from server. Please check your connection.'); } else { throw new Error('Request setup failed.'); } };

// ========== AUTH ========== export const register = async (data) => { try { const res = await API.post('/auth/signup', data); return res.data; } catch (err) { handleError(err); } };

export const login = async (formData) => { try { const res = await API.post('/auth/login', formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, }); return res.data; } catch (err) { handleError(err); } };

export const forgotPassword = async (email) => { try { const res = await API.post('/auth/forgot-password', { email }); return res.data; } catch (err) { handleError(err); } };

export const getCurrentUser = async () => { try { const res = await API.get('/auth/me'); return res.data; } catch (err) { handleError(err); } };

// ========== WALLET ========== export const fundWallet = async (data) => { try { const res = await API.post('/wallet/fund', data); return res.data; } catch (err) { handleError(err); } };

export const getWalletBalance = async () => { try { const res = await API.get('/wallet/balance'); return res.data; } catch (err) { handleError(err); } };

export const getWalletHistory = async () => { try { const res = await API.get('/wallet/transactions'); return res.data; } catch (err) { handleError(err); } };

// ========== DEALS PAIRING ========== export const pairWithCounterparty = async (email) => { try { const res = await API.post('/deals/pair', { counterparty_email: email }); return res.data; } catch (err) { handleError(err); } };

export const confirmPairing = async (pairingId) => { try { const res = await API.post(/deals/pair/${pairingId}/confirm); return res.data; } catch (err) { handleError(err); } };

export const getConfirmedPairing = async () => { try { const res = await API.get('/deals/confirmed-pairing'); return res.data; } catch (err) { handleError(err); } };

export const getPendingPairings = async () => { try { const res = await API.get('/deals/pairings/pending'); return res.data; } catch (err) { handleError(err); } };

// ========== DEALS ========== export const getMyDeals = async () => { try { const res = await API.get('/deals/tracker'); return res.data.data; } catch (err) { handleError(err); } };

export const fundDeal = async (dealId) => { try { const res = await API.post(/deals/${dealId}/fund); return res.data; } catch (err) { handleError(err); } };

export const deliverDeal = async (dealId) => { try { const res = await API.post(/deals/${dealId}/deliver); return res.data; } catch (err) { handleError(err); } };

export const releaseDeal = async (dealId) => { try { const res = await API.post(/deals/${dealId}/release); return res.data; } catch (err) { handleError(err); } };

export const disputeDeal = async (dealId) => { try { const res = await API.post(/deals/${dealId}/dispute); return res.data; } catch (err) { handleError(err); } };

// ========== KYC ========== export const submitKYC = async (formData) => { try { const res = await API.post('/kyc/submit', formData); return res.data; } catch (err) { handleError(err); } };

export const getKYCStatus = async () => { try { const res = await API.get('/kyc/user'); return res.data; } catch (err) { handleError(err); } };

// ========== ADMIN ========== export const getAllUsers = async () => { try { const res = await API.get('/admin/users'); return res.data; } catch (err) { handleError(err); } };

export const getAuditLogs = async () => { try { const res = await API.get('/admin/audit-logs'); return res.data; } catch (err) { handleError(err); } };

export const getAdminMetrics = async () => { try { const res = await API.get('/admin/dashboard-metrics'); return res.data; } catch (err) { handleError(err); } };

export default API;

