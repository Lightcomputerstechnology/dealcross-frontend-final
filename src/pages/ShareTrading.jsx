import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function ShareTrading() {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tradeSummary, setTradeSummary] = useState(null);
  const [tradeAmount, setTradeAmount] = useState(''); // User input for amount

  const fetchShares = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://d-final.onrender.com/shares');
      setShares(response.data || []);
    } catch (error) {
      toast.error('Failed to load shares.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShares();
  }, []);

  const handleTrade = async (type) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in to trade.');
      return;
    }

    const amount = parseFloat(tradeAmount);
    if (!amount || amount <= 0) {
      toast.error('Enter a valid amount.');
      return;
    }

    try {
      const url = type === 'buy'
        ? 'https://d-final.onrender.com/shares/buy'
        : 'https://d-final.onrender.com/shares/sell';
      const response = await axios.post(url, { amount }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(response.data.message);
      setTradeSummary(response.data.data); // Set summary data (fee, net amount)
    } catch (err) {
      toast.error(err.response?.data?.detail?.message || 'Trade failed.');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Share Trading</h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
          Buy and sell popular shares instantly on Dealcross.
        </p>

        {/* Amount Input */}
        <div className="max-w-sm mx-auto mb-8">
          <input
            type="number"
            placeholder="Enter amount to trade (USD)"
            value={tradeAmount}
            onChange={(e) => setTradeAmount(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          />
        </div>

        {loading ? (
          <p className="text-center text-yellow-400">Loading shares...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shares.map((share, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{share.name}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Current Price: <span className="font-medium">${share.price}</span>
                </p>
                <p
                  className={`mt-1 text-sm font-medium ${
                    share.change.startsWith('-') ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  Change: {share.change}
                </p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleTrade('buy')}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => handleTrade('sell')}
                    className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
                  >
                    Sell
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trade Summary */}
        {tradeSummary && (
          <div className="max-w-md mx-auto mt-10 bg-green-100 dark:bg-green-800 p-4 rounded-lg text-black dark:text-white">
            <h3 className="text-lg font-semibold mb-2">Trade Summary</h3>
            <p>Original Amount: ${tradeSummary.original_amount}</p>
            <p>Fee Rate: {tradeSummary.fee_rate}</p>
            <p>Fee Deducted: ${tradeSummary.fee}</p>
            <p className="font-bold">
              {tradeSummary.net_purchase ? 'Net Purchase' : 'Net Received'}: $
              {tradeSummary.net_purchase || tradeSummary.net_received}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}