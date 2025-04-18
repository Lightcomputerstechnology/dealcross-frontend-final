// src/pages/ShareTrading.jsx
import React from 'react';

const mockShares = [
  { name: 'Bitcoin (BTC)', price: '$42,000', change: '+2.5%' },
  { name: 'Ethereum (ETH)', price: '$2,600', change: '-1.2%' },
  { name: 'Apple Inc. (AAPL)', price: '$175', change: '+0.8%' },
  { name: 'Tesla Inc. (TSLA)', price: '$690', change: '-0.3%' },
];

const ShareTrading = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Share Trading</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
          Buy and sell popular shares instantly on Dealcross.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockShares.map((share, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{share.name}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Current Price: <span className="font-medium">{share.price}</span>
              </p>
              <p
                className={`mt-1 text-sm font-medium ${
                  share.change.startsWith('-')
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}
              >
                Change: {share.change}
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                  Buy
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md">
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareTrading;
