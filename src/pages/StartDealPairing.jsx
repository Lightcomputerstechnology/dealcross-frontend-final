// src/pages/StartDealPairing.jsx

import React, { useState } from 'react';

const StartDealPairing = () => {
  const [email, setEmail] = useState('');
  const [dealId, setDealId] = useState('');
  const [status, setStatus] = useState('');

  const handlePairDeal = (e) => {
    e.preventDefault();

    if (!email || !dealId) {
      setStatus('Please fill in both fields.');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setStatus(`Pairing request sent for Deal ID ${dealId} to ${email}`);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Start Deal Pairing</h2>
      <form onSubmit={handlePairDeal} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">Counterparty Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter user email"
            required
          />
        </div>
        <div>
          <label htmlFor="dealId" className="block text-gray-700 dark:text-gray-300 mb-1">Deal ID</label>
          <input
            id="dealId"
            type="text"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            value={dealId}
            onChange={(e) => setDealId(e.target.value)}
            placeholder="Enter deal ID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          Pair Deal
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm text-green-500 dark:text-green-400">{status}</p>}
    </div>
  );
};

export default StartDealPairing;
