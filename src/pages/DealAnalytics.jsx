import React from 'react';
import { FiCheckCircle, FiXCircle, FiAlertCircle } from 'react-icons/fi';

const stats = [
  {
    icon: <FiCheckCircle size={24} />,
    title: 'Completed Deals',
    count: 158,
    color: 'text-green-400',
  },
  {
    icon: <FiAlertCircle size={24} />,
    title: 'Disputed Deals',
    count: 9,
    color: 'text-yellow-400',
  },
  {
    icon: <FiXCircle size={24} />,
    title: 'Cancelled Deals',
    count: 23,
    color: 'text-red-400',
  },
];

const DealAnalytics = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Deal Analytics</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-lg shadow flex flex-col items-start"
          >
            <div className={`mb-2 ${item.color}`}>{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-3xl font-bold mt-2">{item.count}</p>
          </div>
        ))}
      </div>

      {/* Visual Summary (Static for now) */}
      <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Monthly Deal Summary</h3>
        <p className="text-sm text-gray-400 mb-2">March 2025</p>

        <div className="w-full bg-gray-800 h-4 rounded overflow-hidden">
          <div className="bg-green-600 h-full w-[70%]" title="Completed 70%"></div>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>Completed</span>
          <span>Disputed</span>
          <span>Cancelled</span>
        </div>
      </div>
    </div>
  );
};

export default DealAnalytics;
