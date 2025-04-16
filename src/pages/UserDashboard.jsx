import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Wallet Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Wallet Balance</h2>
          <p className="text-2xl font-bold text-green-600">$0.00</p>
          <Link to="/wallet" className="text-sm text-blue-500 hover:underline mt-2 block">
            View Wallet
          </Link>
        </div>

        {/* Start Deal */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Start a New Deal</h2>
          <p className="text-sm mb-4">Secure transactions with escrow support.</p>
          <Link
            to="/start-deal"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Start Deal
          </Link>
        </div>

        {/* Transaction History */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-sm mb-4">No recent transactions yet.</p>
          <Link
            to="/transactions"
            className="text-sm text-blue-500 hover:underline"
          >
            View Transactions
          </Link>
        </div>
      </div>

      <div className="mt-8 flex gap-4 flex-wrap">
        <Link
          to="/dispute-resolution"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Raise a Dispute
        </Link>
        <Link
          to="/investor"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Go to Investor Panel
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
        
