// File: src/components/MetricsCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

function MetricsCard({ type, value, timestamp }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
      <p className="text-sm text-gray-400 uppercase tracking-wide">{type}</p>
      <h3 className="text-3xl font-bold text-blue-400 mt-2">{value}</h3>
      <p className="text-xs text-gray-500 mt-1">
        {new Date(timestamp).toLocaleTimeString()}
      </p>
    </div>
  );
}

MetricsCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default MetricsCard;
