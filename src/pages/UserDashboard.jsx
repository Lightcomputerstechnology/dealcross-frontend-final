import React from 'react';

const UserDashboard = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h2>
      <ul className="space-y-4">
        <li className="p-4 bg-gray-800 rounded shadow text-white">
          <strong>My Wallet:</strong> $0.00
        </li>
        <li className="p-4 bg-gray-800 rounded shadow text-white">
          <strong>Deals in Progress:</strong> 0
        </li>
        <li className="p-4 bg-gray-800 rounded shadow text-white">
          <strong>Past Deals:</strong> 0
        </li>
      </ul>
    </div>
  );
};

export default UserDashboard;
