// File: src/pages/UpgradePlanPage.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UpgradePlanPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submitting, setSubmitting] = useState(false);

  const handleUpgrade = async () => {
    setSubmitting(true);
    try {
      // Mock payment action (replace with actual payment trigger later)
      toast.success(`Payment initiated for ${selectedPlan.toUpperCase()} via ${paymentMethod.toUpperCase()}`);
    } catch (err) {
      toast.error('Upgrade failed. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet><title>Upgrade Plan - Dealcross</title></Helmet>
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center px-4 py-12 space-y-8">
        <h1 className="text-3xl font-bold">Upgrade Your Plan</h1>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* PRO Plan */}
          <div
            className={`border rounded-lg p-6 cursor-pointer ${selectedPlan === 'pro' ? 'border-blue-500' : 'border-gray-600'}`}
            onClick={() => setSelectedPlan('pro')}
          >
            <h2 className="text-2xl font-semibold mb-2">Pro Plan</h2>
            <p className="text-gray-400 mb-4">$10/month</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✔ Lower escrow fees (2%)</li>
              <li>✔ Share buyer fee reduced to 1.5%</li>
              <li>✔ Seller fee drops to 0.75%</li>
              <li>✔ Priority KYC processing</li>
              <li>✔ Access to analytics tools</li>
            </ul>
          </div>

          {/* BUSINESS Plan */}
          <div
            className={`border rounded-lg p-6 cursor-pointer ${selectedPlan === 'business' ? 'border-blue-500' : 'border-gray-600'}`}
            onClick={() => setSelectedPlan('business')}
          >
            <h2 className="text-2xl font-semibold mb-2">Business Plan</h2>
            <p className="text-gray-400 mb-4">$25/month</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✔ All Pro benefits</li>
              <li>✔ Higher share limits</li>
              <li>✔ Dedicated support</li>
            </ul>
          </div>
        </div>

        {/* Payment Method */}
        <div className="w-full max-w-md">
          <label className="block mb-2 text-sm">Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          >
            <option value="card">Card (Stripe)</option>
            <option value="paystack">Paystack</option>
            <option value="flutterwave">Flutterwave</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="usdt">USDT (Tether)</option>
          </select>
        </div>

        {/* Upgrade Button */}
        <button
          onClick={handleUpgrade}
          disabled={submitting}
          className={`px-6 py-2 rounded font-semibold transition ${
            submitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {submitting ? 'Processing...' : `Upgrade to ${selectedPlan.toUpperCase()}`}
        </button>

        <Link to="/" className="text-blue-400 text-sm underline">Back to Dashboard</Link>
      </div>
    </>
  );
};

export default UpgradePlanPage;