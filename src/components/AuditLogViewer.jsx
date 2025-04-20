// src/components/admin/AuditLogViewer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuditLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState('Loading logs...');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get('https://d-final.onrender.com/admin/audit-logs');
        setLogs(res.data);
        setStatus('');
      } catch (err) {
        setStatus('Failed to load audit logs.');
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-3 text-white">Admin Audit Logs</h3>
      {status ? (
        <p className="text-yellow-400 text-sm">{status}</p>
      ) : (
        <ul className="text-sm text-gray-300 space-y-2 max-h-72 overflow-y-auto">
          {logs.map((log, idx) => (
            <li key={idx}>
              [{new Date(log.timestamp).toLocaleTimeString()}] {log.action}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AuditLogViewer;
