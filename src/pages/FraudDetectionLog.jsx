import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';

const fraudLogs = [
  { type: 'VPN Login Detected', user: 'mikejohnson', time: '5 mins ago', severity: 'High' },
  { type: 'Fake ID Uploaded', user: 'lucaslee', time: '12 mins ago', severity: 'Medium' },
  { type: 'Multiple Accounts Linked', user: 'rebecca_x', time: '1 hour ago', severity: 'High' },
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
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState(fraudLogs);

  const refreshLogs = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Simulate API refresh
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Fraud Detection Log - Dealcross</title>
        <meta name="description" content="Admin fraud detection logs, including flagged user activities." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FiAlertTriangle className="text-red-500" /> Fraud Detection Log
          </h2>
          <button
            onClick={refreshLogs}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            <FiRefreshCw className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>

        {loading ? (
          <p className="text-yellow-400">Refreshing logs...</p>
        ) : (
          <div className="space-y-4">
            {logs.map((log, index) => (
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
        )}
      </div>
    </>
  );
};

export default FraudDetectionLog;
