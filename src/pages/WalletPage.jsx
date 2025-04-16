import React from 'react';

const WalletPage = () => {
  return (
    <div className="max-w-xl mx-auto text-center py-10">
      <h2 className="text-2xl font-bold mb-4">My Wallet</h2>
      <p className="text-lg mb-6">Available Balance: <strong>$0.00</strong></p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Fund Wallet
      </button>
    </div>
  );
};

export default WalletPage;
