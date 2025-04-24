// File: src/pages/FundWalletPage.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { fundWallet } from '@/api';  // ✅ Use api.js
import useAuthRedirect from '@/hooks/useAuthRedirect';

const FundWalletPage = () => {
  useAuthRedirect();

  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('card');  // Dropdown kept for future use
  const [submitting, setSubmitting] = useState(false);

  const handleFund = async (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Enter a valid amount.');
      return;
    }
    setSubmitting(true);
    try {
      await fundWallet({ amount: parseFloat(amount) });  // ✅ Only sending amount
      toast.success('Wallet funded successfully!');
      setAmount('');
    } catch (err) {
      toast.error(err.message || 'Funding failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet><title>Fund Wallet - Dealcross</title></Helmet>
      <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12">
        <form onSubmit={handleFund} className="w-full max-w-sm bg-[#1e293b] p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-center">Fund Your Wallet</h2>
          <input
            type="number"
            placeholder="Enter amount (USD)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
            required
          />
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          >
            <option value="card">Card</option>
            <option value="bank">Bank</option>
            <option value="crypto">Crypto</option>
          </select>
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-2 rounded font-semibold transition ${
              submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {submitting ? 'Processing...' : 'Fund Wallet'}
          </button>
        </form>
      </div>
    </>
  );
};

export default FundWalletPage;