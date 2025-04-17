// src/pages/StartDealPairing.jsx

import React, { useState } from 'react';

const StartDealPairing = () => {
  const [counterparty, setCounterparty] = useState('');
  const [invitationSent, setInvitationSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSendInvite = () => {
    if (counterparty.trim() !== '') {
      setInvitationSent(true);
      setTimeout(() => {
        setConfirmed(true);
      }, 2000); // Simulate confirmation after delay
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Start Deal Pairing
      </h2>

      {!invitationSent ? (
        <>
          <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
            Enter Counterparty Email or ID:
          </label>
          <input
            type="text"
            value={counterparty}
            onChange={(e) => setCounterparty(e.target.value)}
            placeholder="example@domain.com"
            className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button
            onClick={handleSendInvite}
            className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Send Pairing Request
          </button>
        </>
      ) : confirmed ? (
        <div className="text-center text-green-500 font-medium text-lg mt-4">
          ✅ Deal successfully paired with {counterparty}!
        </div>
      ) : (
        <div className="text-center text-yellow-400 mt-4">
          Sending pairing invite to <strong>{counterparty}</strong>...
        </div>
      )}
    </div>
  );
};

export default StartDealPairing;
