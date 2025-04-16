import React from 'react';

const AnalyticsDashboard = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Total Users */}
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Total Users</h2>
          <p className="text-3xl mt-2 font-bold text-blue-900 dark:text-blue-100">1,024</p>
        </div>

        {/* Total Transactions */}
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-green-800 dark:text-green-200">Transactions</h2>
          <p className="text-3xl mt-2 font-bold text-green-900 dark:text-green-100">2,487</p>
        </div>

        {/* Revenue */}
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Revenue</h2>
          <p className="text-3xl mt-2 font-bold text-yellow-900 dark:text-yellow-100">$4,920</p>
        </div>

        {/* Disputes */}
        <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">Disputes</h2>
          <p className="text-3xl mt-2 font-bold text-red-900 dark:text-red-100">73</p>
        </div>
      </div>

      {/* Charts or Additional Metrics (optional) */}
      <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
        Real-time analytics connection coming soon.
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
