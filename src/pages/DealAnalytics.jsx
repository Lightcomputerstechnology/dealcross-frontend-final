import React from 'react';

const DealAnalytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Deal Analytics</h1>
      <p className="text-gray-300 mb-4">Visualize data and insights about deals conducted on the platform.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Total Deals</h2>
          <p className="text-3xl font-bold text-green-400">1,254</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Success Rate</h2>
          <p className="text-3xl font-bold text-blue-400">97%</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Disputes</h2>
          <p className="text-3xl font-bold text-red-400">36</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Active Deals</h2>
          <p className="text-3xl font-bold text-yellow-300">178</p>
        </div>
      </div>
    </div>
  );
};

export default DealAnalytics;
