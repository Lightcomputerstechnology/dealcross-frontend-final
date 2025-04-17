import React, { useState } from 'react';

const StartDealPairing = () => {
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handlePairing = (e) => {
    e.preventDefault();
    if (email) {
      setConfirmed(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Start a Deal - Pair with a Buyer/Seller
      </h2>

      {!confirmed ? (
        <form onSubmit={handlePairing}>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Counterparty Email or ID:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email or user ID"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mb-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Pairing Request
          </button>
        </form>
      ) : (
        <p className="text-center text-green-500 mt-4">
          Pairing request sent to <strong>{email}</strong>!
        </p>
      )}
    </div>
  );
};

export default StartDealPairing;
