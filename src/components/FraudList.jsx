import React from 'react';
import PropTypes from 'prop-types';

const FraudList = ({ loading, fraudReports }) => {
  if (loading) {
    return <p className="text-yellow-400">Loading fraud alerts...</p>;
  }

  if (!fraudReports || fraudReports.length === 0) {
    return <p className="text-gray-400 text-sm">No fraud alerts available.</p>;
  }

  return (
    <ul className="text-sm space-y-2">
      {fraudReports.map((item, index) => (
        <li key={index} className="border-b border-gray-700 py-1">
          <span className="text-white">{item.message}</span>{' '}
          <span className="text-xs text-gray-400 block">
            {new Date(item.timestamp).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
};

FraudList.propTypes = {
  loading: PropTypes.bool.isRequired,
  fraudReports: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ),
};

export default FraudList;
