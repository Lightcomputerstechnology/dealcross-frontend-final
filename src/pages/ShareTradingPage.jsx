// src/pages/ShareTrading.jsx
import React, { useState } from 'react';

const ShareTrading = () => {
  const [amount, setAmount] = useState('');
  const sharePrice = 172.5;

  const estimatedShares = amount ? (parseFloat(amount) / sharePrice).toFixed(4) : 0;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-center px-4 py-10">
      <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Invest in Apple</h2>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple"
          className="w-16 h-16 mx-auto mb-4"
        />
        <div className="text-gray-800 dark:text-gray-300 mb-2">
          <strong>Share Price:</strong> ${sharePrice}
        </div>
        <input
          type="number"
          placeholder="Amount to Invest"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <div className="text-gray-600 dark:text-gray-400 mb-4">
          <strong>Estimated Shares:</strong> {estimatedShares}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg">
          Invest Now
        </button>
      </div>
    </div>
  );
};

export default ShareTrading;
