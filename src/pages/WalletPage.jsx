// File: src/pages/WalletPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WalletPage = () => {
  const [balance, setBalance] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchWallet = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setStatus('Login required.');
        return;
      }

      try {
        const response = await axios.get('https://d-final.onrender.com/wallet/balance', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBalance(response.data.balance);
      } catch (error) {
        setStatus(error.response?.data?.detail || 'Unable to fetch wallet balance.');
      }
    };

    fetchWallet();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Wallet</h2>

      {/* Wallet Balance */}
      <div className="bg-[#1e293b] p-6 rounded-lg shadow mb-10">
        {balance !== null ? (
          <>
            <p className="text-sm text-gray-400">Available Balance</p>
            <h1 className="text-3xl font-bold mt-2">USD {balance.toFixed(2)}</h1>
          </>
        ) : (
          <p className="text-yellow-400">{status || 'Loading balance...'}</p>
        )}

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
    </div>
  );
};

export default WalletPage;
