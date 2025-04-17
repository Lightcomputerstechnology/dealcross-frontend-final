// src/pages/StartDealPairing.jsx
import React, { useState } from 'react';

const StartDealPairing = () => {
  const [buyerEmail, setBuyerEmail] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePairingSubmit = (e) => {
    e.preventDefault();
    if (!buyerEmail || !sellerEmail) {
      setMessage('Both emails are required to pair users.');
      return;
    }

    // Simulate pairing confirmation
    setMessage(`Deal pairing request sent to:\nBuyer: ${buyerEmail}\nSeller: ${sellerEmail}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Start Deal Pairing</h1>

      <form onSubmit={handlePairingSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Buyer Email
          </label>
          <input
            type="email"
            value={buyerEmail}
            onChange={(e) => setBuyerEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Enter buyer email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Seller Email
          </label>
          <input
            type="email"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Enter seller email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          Send Pairing Request
        </button>
      </form>

      {message && (
        <div className="mt-4 text-sm text-green-600 dark:text-green-400 whitespace-pre-line">
          {message}
        </div>
      )}
    </div>
  );
};

export default StartDealPairing;
