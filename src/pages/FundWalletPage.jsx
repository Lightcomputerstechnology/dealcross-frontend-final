import React, { useState } from 'react';
import axios from 'axios';

const FundWalletPage = () => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState(null);

  const handleFund = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setStatus('You must be logged in.');
      return;
    }

    try {
      const response = await axios.post(
        'https://d-final.onrender.com/wallet/fund',
        { amount: parseFloat(amount) },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setStatus('Wallet funded successfully!');
      } else {
        setStatus('Funding failed. Please try again.');
      }
    } catch (error) {
      setStatus(
        error.response?.data?.detail || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex justify-center items-center px-4 py-12">
      <form
        onSubmit={handleFund}
        className="w-full max-w-sm bg-[#1e293b] p-6 rounded-lg shadow"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Fund Wallet</h2>
        <input
          type="number"
          placeholder="Enter amount (USD)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
        >
          Fund Wallet
        </button>
        {status && <p className="text-yellow-400 text-sm mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default FundWalletPage;
