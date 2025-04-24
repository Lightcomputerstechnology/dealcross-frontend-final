import React, { useState } from 'react';
import { FiTrendingUp, FiShieldOff, FiPieChart, FiRefreshCw } from 'react-icons/fi';
import { motion } from 'framer-motion';

const initialInsights = [
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
  const [insights, setInsights] = useState(initialInsights);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const refreshInsights = () => {
    // For now, just reset timestamp (simulate fetch)
    setLastUpdated(new Date());
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">AI Insight Center</h2>
        <button
          onClick={refreshInsights}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition"
        >
          <FiRefreshCw /> Refresh
        </button>
      </div>
      <p className="text-sm text-gray-400 mb-4">
        Last updated: {lastUpdated.toLocaleString()}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1e293b] p-6 rounded-lg shadow-lg space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-blue-400">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIInsightCenter;
