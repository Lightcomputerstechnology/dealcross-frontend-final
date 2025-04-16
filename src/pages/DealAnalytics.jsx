import React from 'react';

const DealAnalytics = () => {
  const analyticsData = [
    {
      metric: 'Total Deals Created',
      value: 128,
    },
    {
      metric: 'Completed Deals',
      value: 112,
    },
    {
      metric: 'Pending Deals',
      value: 9,
    },
    {
      metric: 'Disputed Deals',
      value: 7,
    },
    {
      metric: 'Total Escrow Volume',
      value: '$52,300',
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Deal Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analyticsData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              {item.metric}
            </h2>
            <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealAnalytics;
