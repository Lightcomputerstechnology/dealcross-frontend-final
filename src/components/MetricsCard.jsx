import React from 'react';
import PropTypes from 'prop-types';

const MetricsCard = ({ type, value, timestamp }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition duration-300 text-center">
      <p className="text-sm text-gray-400 uppercase tracking-wide">{type}</p>
      <h3 className="text-3xl font-bold mt-1 text-blue-400">{value}</h3>
      <p className="text-xs text-gray-500 mt-1">{new Date(timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

MetricsCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default MetricsCard;
