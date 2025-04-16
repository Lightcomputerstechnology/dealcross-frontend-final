import React from 'react';

const AnalyticsDashboard = () => {
  const stats = [
    { label: 'Total Transactions', value: '12,450' },
    { label: 'Active Users', value: '3,248' },
    { label: 'Pending Deals', value: '87' },
    { label: 'Resolved Disputes', value: '1,540' },
    { label: 'Total Revenue', value: '$92,300' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-8">Analytics Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-blue-600 transition-all">
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <h3 className="text-2xl font-semibold">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
        <h4 className="text-xl font-bold mb-4">User Engagement (Mock Chart)</h4>
        <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-gray-300">
          [ Chart Placeholder – integrate Recharts, ApexCharts, or Chart.js later ]
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
