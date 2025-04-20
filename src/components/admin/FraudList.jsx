// File: src/components/admin/FraudList.jsx

import React from 'react';
import PropTypes from 'prop-types';

const FraudList = ({ loading, fraudReports }) => {
  if (loading) {
    return <p className="text-yellow-400">Loading fraud alerts...</p>;
  }

  if (fraudReports.length === 0) {
    return <p className="text-gray-400 text-sm">No fraud alerts available.</p>;
  }

  return (
    <ul className="text-sm space-y-3">
      {fraudReports.map((report, index) => (
        <li
          key={index}
          className="p-3 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
        >
          <div className="font-medium text-red-400">{report.message}</div>
          <div className="text-xs text-gray-400">
            {new Date(report.timestamp).toLocaleString()}
          </div>
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
  ).isRequired,
};

export default FraudList;
            
