import React from 'react';
import { Link } from 'react-router-dom';

const WalletPage = () => {
  const balance = 1250.75;

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">My Wallet</h2>

        <div className="text-center mb-6">
          <p className="text-lg">Current Balance:</p>
          <p className="text-3xl font-bold text-green-600">${balance.toFixed(2)}</p>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            to="/fund-wallet"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Fund Wallet
          </Link>
          <Link
            to="/transactions"
            className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          >
            View History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
