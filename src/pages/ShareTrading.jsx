import React from 'react';

const mockShares = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$45,200', change: '+2.5%' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$3,200', change: '+1.8%' },
  { id: 3, name: 'Apple Inc.', symbol: 'AAPL', price: '$175.50', change: '-0.4%' },
  { id: 4, name: 'Tesla', symbol: 'TSLA', price: '$710.10', change: '+4.2%' },
];

const ShareTrading = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Share Trading</h1>
      <p className="text-lg mb-4">Explore current trading options. Prices update in real-time.</p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {mockShares.map((share) => (
          <div key={share.id} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">{share.name} <span className="text-sm text-gray-500">({share.symbol})</span></h2>
            <p className="text-lg font-medium mt-2">Current Price: <span className="text-blue-600 dark:text-blue-400">{share.price}</span></p>
            <p className={`mt-1 font-medium ${share.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
              Change: {share.change}
            </p>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">Buy</button>
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg">Sell</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShareTrading;
            
