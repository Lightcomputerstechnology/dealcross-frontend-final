import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function ShareTrading() {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleTrade = async (type, amount) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in to trade.');
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
                    onClick={() => handleTrade('buy', share.price)}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => handleTrade('sell', share.price)}
                    className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md"
                  >
                    Sell
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}