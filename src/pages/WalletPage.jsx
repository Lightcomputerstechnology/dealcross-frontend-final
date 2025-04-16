import React from 'react';
import { Link } from 'react-router-dom';

const WalletPage = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">My Wallet</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Available Balance</p>
            <h2 className="text-4xl font-bold text-green-600">$0.00</h2>
          </div>
          <Link
            to="/fund-wallet"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Fund Wallet
          </Link>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-3">Recent Wallet Activity</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">No transactions yet.</p>
          <Link to="/transactions" className="text-blue-500 hover:underline text-sm mt-2 block">
            View All Transactions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
