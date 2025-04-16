import React from 'react';

const InvestorMessages = () => {
  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-3xl font-bold mb-4">Investor Messages</h1>
      <p className="text-lg text-gray-300 mb-6">
        View and manage important communications between investors, admins, and project teams.
      </p>

      <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
        <p className="text-gray-400 italic">No messages yet. Once you receive communications from investors, they will appear here.</p>
      </div>
    </div>
  );
};

export default InvestorMessages;
