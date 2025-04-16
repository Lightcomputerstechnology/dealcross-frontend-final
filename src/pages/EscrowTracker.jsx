import React from 'react';
import DealChatBox from '../components/DealChatBox';

const EscrowTracker = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0b1120] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Escrow Tracker
        </h1>

        {/* Escrow Summary Section */}
        <div className="mb-6 space-y-3">
          <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 p-4 rounded-md">
            <p>Deal ID: #12345</p>
            <p>Status: Awaiting Delivery</p>
            <p>Funded Amount: $500</p>
            <p>Start Date: April 20, 2025</p>
          </div>
        </div>

        {/* Actions (for demo only) */}
        <div className="mb-8 flex gap-4 flex-wrap">
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
            Mark as Delivered
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
            Raise Dispute
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            View Dispute Center
          </button>
        </div>

        {/* Embedded Real-Time Chat */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
            Deal Chat
          </h2>
          <DealChatBox />
        </div>
      </div>
    </div>
  );
};

export default EscrowTracker;
