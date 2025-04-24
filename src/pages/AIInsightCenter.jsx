import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiTrendingUp, FiShieldOff, FiPieChart, FiRefreshCw } from 'react-icons/fi';
import { motion } from 'framer-motion';

const initialInsights = [
  {
    icon: <FiTrendingUp size={22} />,
    title: 'Rising Deal Categories',
    description: 'Freelance design, crypto mentorship, and affiliate marketing are trending.',
    category: 'Deals',
    confidence: 92,
  },
  {
    icon: <FiShieldOff size={22} />,
    title: 'Fraud Spike Alerts',
    description: '50% of fraud attempts are now linked to ID document forgery.',
    category: 'Fraud',
    confidence: 88,
  },
  {
    icon: <FiPieChart size={22} />,
    title: 'Top Share Opportunities',
    description: 'Tesla, Nvidia, and Apple offer strong short-term ROI in Q2.',
    category: 'Shares',
    confidence: 95,
  },
];

const AIInsightCenter = () => {
  const [insights, setInsights] = useState(initialInsights);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [filter, setFilter] = useState('All');

  const refreshInsights = () => {
    // Simulate AI refresh with confidence variation
    const refreshed = insights.map(item => ({
      ...item,
      confidence: Math.floor(Math.random() * 11) + 85, // 85-95%
    }));
    setInsights(refreshed);
    setLastUpdated(new Date());
  };

  const filteredInsights = filter === 'All' ? insights : insights.filter(i => i.category === filter);

  return (
    <>
      <Helmet>
        <title>AI Insight Center - Dealcross</title>
        <meta name="description" content="AI-generated insights for admin decisions on Dealcross." />
      </Helmet>

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
        <div className="flex gap-4 mb-4">
          {['All', 'Deals', 'Fraud', 'Shares'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded ${
                filter === cat ? 'bg-blue-600' : 'bg-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Last updated: {lastUpdated.toLocaleString()}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((item, index) => (
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
              <p className="text-xs text-green-400">
                Confidence: {item.confidence}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AIInsightCenter;
