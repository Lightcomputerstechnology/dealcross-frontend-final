// src/pages/StartDealPairing.jsx
import React, { useState } from 'react';

const StartDealPairing = () => {
  const [partnerEmail, setPartnerEmail] = useState('');
  const [status, setStatus] = useState('');

  const handlePairing = () => {
    if (!partnerEmail.trim()) {
      setStatus('Please enter a valid email or ID.');
      return;
    }

    // Simulated pairing logic
    setStatus(`Pairing request sent to ${partnerEmail}. Waiting for confirmation...`);
    
    // Normally you'd call an API here to initiate pairing
    // Example: await api.sendPairingRequest(partnerEmail);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Start Deal Pairing</h2>

      <input
        type="text"
        placeholder="Enter partner email or ID"
        className="w-full px-4 py-2 mb-4 border dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 focus:outline-none"
        value={partnerEmail}
        onChange={(e) => setPartnerEmail(e.target.value)}
      />

      <button
        onClick={handlePairing}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
      >
        Send Pairing Request
      </button>

      {status && (
        <p className="mt-4 text-center text-sm text-green-500 dark:text-green-400">
          {status}
        </p>
      )}
    </div>
  );
};

export default StartDealPairing;
