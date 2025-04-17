import React, { useState } from 'react';

const StartDealPairing = () => {
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (email.trim()) {
      setConfirmed(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">Start Deal Pairing</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">
        Enter the email of the person you want to pair with. Both parties must confirm before starting the deal.
      </p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter counterparty email"
        className="w-full px-4 py-2 border rounded-md mb-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
      />
      <button
        onClick={handleConfirm}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
      >
        Confirm Pairing
      </button>
      {confirmed && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
          Deal pairing request sent to <strong>{email}</strong>.
        </div>
      )}
    </div>
  );
};

export default StartDealPairing;
