import React from 'react';

const MetricsCard = ({ type, value, timestamp }) => {
  return (
    <div className="bg-gray-800 p-4 rounded shadow text-center">
      <p className="text-sm text-gray-400">{type.toUpperCase()}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
      <p className="text-xs text-gray-500">{new Date(timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

export default MetricsCard;
