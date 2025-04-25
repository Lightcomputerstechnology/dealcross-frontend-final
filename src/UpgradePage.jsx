// File: src/pages/UpgradePage.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { upgradeSubscription } from '@/api';  // ✅ Backend API endpoint
import useAuthRedirect from '@/hooks/useAuthRedirect';

const UpgradePage = () => {
  useAuthRedirect();  // Protect page for logged-in users

  const [plan, setPlan] = useState('pro');
  const [method, setMethod] = useState('card');
  const [cryptoType, setCryptoType] = useState('usdt');
  const [submitting, setSubmitting] = useState(false);

  const handleUpgrade = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await upgradeSubscription({ plan, method, cryptoType });
      toast.success('Upgrade initiated! Please complete your payment.');
    } catch (err) {
      toast.error(err.message || 'Upgrade failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet><title>Upgrade Plan - Dealcross</title></Helmet>
      <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12">
        <form onSubmit={handleUpgrade} className="w-full max-w-sm bg-[#1e293b] p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-center">Upgrade Your Plan</h2>

          <label className="block text-sm">Choose Plan</label>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          >
            <option value="pro">Investor Pro</option>
            <option value="business">Business Pro</option>
          </select>

          <label className="block text-sm">Payment Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          >
            <option value="card">Card</option>
            <option value="bank">Bank Transfer</option>
            <option value="crypto">Crypto (Bitcoin, USDT)</option>
          </select>

          {method === 'crypto' && (
            <select
              value={cryptoType}
              onChange={(e) => setCryptoType(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
            >
              <option value="usdt">USDT</option>
              <option value="bitcoin">Bitcoin</option>
            </select>
          )}

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-2 rounded font-semibold transition ${
              submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {submitting ? 'Processing...' : 'Upgrade Now'}
          </button>
        </form>
      </div>
    </>
  );
};

export default UpgradePage;