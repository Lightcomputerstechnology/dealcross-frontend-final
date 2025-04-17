import React from 'react';
import { FiTrendingUp, FiShieldOff, FiPieChart } from 'react-icons/fi';

const insights = [
  {
    icon: <FiTrendingUp size={22} />,
    title: 'Rising Deal Categories',
    description: 'Freelance design, crypto mentorship, and affiliate marketing are trending.',
  },
  {
    icon: <FiShieldOff size={22} />,
    title: 'Fraud Spike Alerts',
    description: '50% of fraud attempts are now linked to ID document forgery.',
  },
  {
    icon: <FiPieChart size={22} />,
    title: 'Top Share Opportunities',
    description: 'Tesla, Nvidia, and Apple offer strong short-term ROI in Q2.',
  },
];

const AIInsightCenter = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">AI Insight Center</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-lg shadow-lg space-y-2"
          >
            <div className="text-blue-400">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsightCenter;
