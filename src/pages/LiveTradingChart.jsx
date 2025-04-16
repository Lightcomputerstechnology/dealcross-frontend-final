import React from 'react';

const LiveTradingChart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Live Trading Chart</h1>
      <p className="text-center max-w-2xl">
        This page will display a real-time trading chart with buy/sell activity, price
        movements, and volume indicators. Chart integrations will be added here using
        live APIs.
      </p>
    </div>
  );
};

export default LiveTradingChart;
