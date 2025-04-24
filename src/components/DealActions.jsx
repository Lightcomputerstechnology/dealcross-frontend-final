// File: src/components/DealActions.jsx

import React from 'react';
import { fundDeal, deliverDeal, releaseDeal, disputeDeal } from '@/api';
import { toast } from 'react-hot-toast';

const DealActions = ({ dealId, status }) => {
  const handleAction = async (actionFn, actionName) => {
    try {
      await actionFn(dealId);
      toast.success(`${actionName} successful!`);
    } catch (err) {
      toast.error(err.message || `${actionName} failed.`);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {status === 'pending' && (
        <button
          onClick={() => handleAction(fundDeal, 'Funding')}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-white"
        >
          Fund Deal
        </button>
      )}
      {status === 'active' && (
        <>
          <button
            onClick={() => handleAction(deliverDeal, 'Delivery')}
            className="bg-yellow-600 hover:bg-yellow-700 px-4 py-1 rounded text-white"
          >
            Mark as Delivered
          </button>
          <button
            onClick={() => handleAction(disputeDeal, 'Dispute')}
            className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white"
          >
            Raise Dispute
          </button>
        </>
      )}
      {status === 'delivered' && (
        <button
          onClick={() => handleAction(releaseDeal, 'Release')}
          className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded text-white"
        >
          Release Funds
        </button>
      )}
    </div>
  );
};

export default DealActions;