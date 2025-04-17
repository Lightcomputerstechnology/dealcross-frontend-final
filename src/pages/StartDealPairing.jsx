// src/pages/StartDealPairing.jsx
import React, { useState } from 'react';

const StartDealPairing = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handlePairing = (e) => {
    e.preventDefault();

    // Simulate API call
    if (email) {
      setStatus(`Pairing request sent to ${email}. Waiting for confirmation.`);
    } else {
      setStatus('Please enter a valid email to pair the deal.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-center mb-4">Start Deal Pairing</h2>
      <form onSubmit={handlePairing} className="space-y-4">
        <input
          type="email"
          placeholder="Enter counterparty's email"
          className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Pair Request
        </button>
      </form>

      {status && (
        <div className="mt-4 text-center text-sm text-green-500 dark:text-green-400">
          {status}
        </div>
      )}
    </div>
  );
};

export default StartDealPairing;
