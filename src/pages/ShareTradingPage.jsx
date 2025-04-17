import React from 'react';

const shares = [
  { name: 'Tesla', symbol: 'TSLA', price: 781.23, change: '+1.2%' },
  { name: 'Apple', symbol: 'AAPL', price: 142.81, change: '-0.8%' },
  { name: 'Alphabet', symbol: 'GOOGL', price: 2_412.36, change: '+0.3%' },
  { name: 'Amazon', symbol: 'AMZN', price: 98.25, change: '+2.1%' },
];

const ShareTradingPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Share Trading</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shares.map((stock, index) => (
          <div key={index} className="bg-[#1e293b] p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-1">{stock.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{stock.symbol}</p>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-400">Current Price</p>
                <p className="text-lg font-bold">${stock.price.toLocaleString()}</p>
              </div>
              <span
                className={`text-sm px-2 py-1 rounded font-medium ${
                  stock.change.startsWith('+')
                    ? 'bg-green-700 text-green-300'
                    : 'bg-red-700 text-red-300'
                }`}
              >
                {stock.change}
              </span>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">
                Buy
              </button>
              <button className="flex-1 border border-white hover:bg-white hover:text-black py-2 rounded font-semibold">
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShareTradingPage;
