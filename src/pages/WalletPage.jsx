import React from 'react';
import { Link } from 'react-router-dom';

const WalletPage = () => {
  const balance = 4625.23;
  const currency = 'USD';

  const recentTransactions = [
    { type: 'Funding', amount: '+$500', status: 'Successful', date: 'April 15, 2025' },
    { type: 'Deal Payment', amount: '-$2300', status: 'Released', date: 'April 14, 2025' },
    { type: 'Funding', amount: '+$300', status: 'Pending', date: 'April 13, 2025' },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Wallet</h2>

      {/* Wallet Balance */}
      <div className="bg-[#1e293b] p-6 rounded-lg shadow mb-10">
        <p className="text-sm text-gray-400">Available Balance</p>
        <h1 className="text-3xl font-bold mt-2">{currency} {balance.toLocaleString()}</h1>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/fund-wallet">
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium">
              Fund Wallet
            </button>
          </Link>
          <Link to="/transactions">
            <button className="border border-gray-500 hover:bg-gray-700 px-5 py-2 rounded-md font-medium">
              Transaction History
            </button>
          </Link>
          <button className="border border-red-500 hover:bg-red-700 px-5 py-2 rounded-md font-medium">
            Withdraw
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="bg-gray-800 rounded-lg divide-y divide-gray-700">
          {recentTransactions.map((txn, index) => (
            <div key={index} className="flex justify-between items-center p-4">
              <div>
                <p className="font-medium">{txn.type}</p>
                <p className="text-xs text-gray-400">{txn.date}</p>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${txn.amount.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                  {txn.amount}
                </p>
                <p className="text-xs text-gray-400">{txn.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
