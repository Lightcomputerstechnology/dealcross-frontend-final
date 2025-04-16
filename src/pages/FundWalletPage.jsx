import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const FundWalletPage = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('card');

  const handleFund = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) {
      toast.error('Enter a valid amount');
      return;
    }

    // Simulate funding
    toast.success(`Wallet funded with $${amount} via ${method}`);
    setAmount('');
    setMethod('card');
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Fund Wallet</h1>

      <form onSubmit={handleFund} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md">
        <div className="mb-4">
          <label className="block text-sm mb-1">Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Payment Method</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="w-full px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="card">Card</option>
            <option value="bank">Bank</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="usdt">USDT</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
        >
          Fund Now
        </button>
      </form>
    </div>
  );
};

export default FundWalletPage;
