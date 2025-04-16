import React from 'react';

const AIInsightCenter = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">AI Insight Center</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Real-Time Fraud Predictions</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Our AI model continuously scans for patterns and behaviors to detect potential fraud before it happens.
        </p>
        <ul className="list-disc list-inside text-sm">
          <li>Suspicious transaction alerts</li>
          <li>User behavior tracking and scoring</li>
          <li>Historical data comparison</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 mt-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Investment Risk Analysis</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get real-time insights on the safety and volatility of your investment shares using AI-powered analytics.
        </p>
        <ul className="list-disc list-inside text-sm">
          <li>Volatility scores for listed shares</li>
          <li>AI-powered ROI forecasts</li>
          <li>Updated risk indicators per company</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 mt-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">AI Recommendations</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Let the system guide you on the best deals and investment choices.
        </p>
        <ul className="list-disc list-inside text-sm">
          <li>Best share picks based on trend</li>
          <li>Escrow partners scoring high trust</li>
          <li>Flagged users and safe trading tips</li>
        </ul>
      </div>
    </div>
  );
};

export default AIInsightCenter;
      
