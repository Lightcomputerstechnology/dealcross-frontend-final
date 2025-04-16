import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const DealConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const deal = location.state;

  const confirmDeal = () => {
    // This is where API logic would go
    toast.success('Deal confirmed and submitted!');
    navigate('/deal-tracker');
  };

  if (!deal) {
    return (
      <div className="min-h-screen p-8 text-center text-gray-700 dark:text-white">
        <h2 className="text-xl font-semibold">No deal information available</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Confirm Your Deal</h1>
      <div className="max-w-xl bg-white dark:bg-gray-800 rounded-xl p-6 shadow space-y-4 mx-auto">
        <div>
          <strong>Title:</strong> <p>{deal.title}</p>
        </div>
        <div>
          <strong>Amount (USD):</strong> <p>${deal.amount}</p>
        </div>
        <div>
          <strong>Counterparty:</strong> <p>{deal.counterparty}</p>
        </div>
        <div>
          <strong>Description:</strong> <p>{deal.description}</p>
        </div>

        <button
          onClick={confirmDeal}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
        >
          Confirm and Submit Deal
        </button>
      </div>
    </div>
  );
};

export default DealConfirmation;
