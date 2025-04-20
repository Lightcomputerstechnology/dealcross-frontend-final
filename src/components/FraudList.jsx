import React from 'react';

const FraudList = ({ loading, fraudReports }) => {
  if (loading) return <p className="text-yellow-400">Loading fraud alerts...</p>;

  if (!fraudReports.length)
    return <p className="text-gray-400 text-sm">No fraud alerts available.</p>;

  return (
    <ul className="text-sm space-y-2">
      {fraudReports.map((item, index) => (
        <li key={index}>
          {item.message} —{' '}
          <span className="text-xs text-gray-400">
            {new Date(item.timestamp).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FraudList;
