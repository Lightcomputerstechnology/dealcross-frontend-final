import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const fraudLogs = [
  {
    type: 'VPN Login Detected',
    user: 'mikejohnson',
    time: '5 mins ago',
    severity: 'High',
  },
  {
    type: 'Fake ID Uploaded',
    user: 'lucaslee',
    time: '12 mins ago',
    severity: 'Medium',
  },
  {
    type: 'Multiple Accounts Linked',
    user: 'rebecca_x',
    time: '1 hour ago',
    severity: 'High',
  },
];

const getBadgeColor = (severity) => {
  switch (severity) {
    case 'High':
      return 'bg-red-600 text-white';
    case 'Medium':
      return 'bg-yellow-500 text-black';
    case 'Low':
      return 'bg-green-500 text-black';
    default:
      return 'bg-gray-500 text-white';
  }
};

const FraudDetectionLog = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FiAlertTriangle className="text-red-500" /> Fraud Detection Log
      </h2>

      <div className="space-y-4">
        {fraudLogs.map((log, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-4 rounded-lg flex justify-between items-start shadow"
          >
            <div>
              <h4 className="text-lg font-semibold">{log.type}</h4>
              <p className="text-sm text-gray-400">
                User: <span className="text-white">{log.user}</span> — {log.time}
              </p>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${getBadgeColor(
                log.severity
              )}`}
            >
              {log.severity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FraudDetectionLog;
