// File: src/pages/UpgradePage.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const UpgradePage = () => {
  const [plan, setPlan] = useState('pro');
  const [method, setMethod] = useState('card');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleUpgrade = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing delay
    setTimeout(() => {
      const isSuccess = Math.random() < 0.8;  // Simulate 80% success rate
      if (isSuccess) {
        toast.success('Payment successful!');
        navigate('/payment-status?status=success');
      } else {
        toast.error('Payment failed.');
        navigate('/payment-status?status=failed');
      }
    }, 1500);
  };

  return (
    <>
      <Helmet><title>Upgrade Account - Dealcross</title></Helmet>
      <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12">
        <form onSubmit={handleUpgrade} className="w-full max-w-md bg-[#1e293b] p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-center">Upgrade Your Account</h2>
          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          >
            <option value="pro">Pro Plan</option>
            <option value="business">Business Plan</option>
          </select>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          >
            <option value="card">Card</option>
            <option value="bank">Bank Transfer</option>
            <option value="crypto">Crypto</option>
            <option value="flutterwave">Flutterwave</option>
          </select>
          <button
            type="submit"
            disabled={processing}
            className={`w-full py-2 rounded font-semibold transition ${
              processing ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {processing ? 'Processing...' : 'Proceed to Pay'}
          </button>
        </form>
      </div>
    </>
  );
};

export default UpgradePage;