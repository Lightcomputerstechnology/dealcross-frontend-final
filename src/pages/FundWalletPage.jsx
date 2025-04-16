import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const FundWalletPage = () => {
  const [amount, setAmount] = useState('');

  const handleFund = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error('Please enter a valid amount.');
      return;
    }

    toast.success(`$${amount} added to your wallet!`);
    setAmount('');
  };

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Fund Your Wallet</h2>

        <form onSubmit={handleFund} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Fund Wallet
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundWalletPage;
