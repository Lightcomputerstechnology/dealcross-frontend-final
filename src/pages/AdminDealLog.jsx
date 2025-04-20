// File: src/pages/AdminDealLog.jsx
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const AdminDealLog = () => {
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState('Loading...');

  const fetchLogs = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/deal-activity-log');
      setLogs(res.data);
      setStatus(null);
    } catch (err) {
      console.error('Failed to load deal logs:', err);
      setStatus('Failed to load deal logs.');
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Deal Activity Logs - Admin | Dealcross</title>
        <meta name="description" content="Admin activity logs of deals, with timestamped entries for moderation." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Deal Activity Logs</h1>

        {status && <p className="text-yellow-400 mb-4">{status}</p>}

        <div className="space-y-4">
          {logs.length === 0 && !status && (
            <p className="text-gray-400">No logs available.</p>
          )}
          {logs.map((log) => (
            <div key={log.id} className="bg-[#1e293b] p-4 rounded shadow border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400">{log.title}</h3>
              <p className="text-sm text-gray-300">Amount: ${log.amount}</p>
              <p className="text-sm text-gray-400">
                Public: <span className={log.is_public ? 'text-green-400' : 'text-red-400'}>
                  {log.is_public ? 'Yes' : 'No'}
                </span>
              </p>
              <p className="text-xs text-gray-500">Created: {new Date(log.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDealLog;
