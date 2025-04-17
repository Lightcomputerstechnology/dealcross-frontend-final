// File: src/pages/DisputeLogViewer.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisputeLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState('Loading disputes...');

  useEffect(() => {
    const fetchLogs = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setStatus('Admin login required.');
        return;
      }

      try {
        const response = await axios.get('https://d-final.onrender.com/disputes/logs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.length === 0) {
          setStatus('No disputes found.');
        } else {
          setLogs(response.data);
          setStatus(null);
        }
      } catch (error) {
        setStatus('Failed to load disputes.');
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Dispute Log Viewer (Admin)</h2>

      {status && <p className="text-yellow-400">{status}</p>}

      <div className="space-y-4">
        {logs.map((log, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-4 rounded-lg shadow-md flex justify-between"
          >
            <div>
              <h4 className="font-semibold">Deal ID: {log.deal_id}</h4>
              <p className="text-sm text-gray-400">Reason: {log.reason}</p>
              <p className="text-sm text-gray-400">User: {log.submitted_by}</p>
            </div>
            <p className="text-sm text-gray-400">{log.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisputeLogViewer;
