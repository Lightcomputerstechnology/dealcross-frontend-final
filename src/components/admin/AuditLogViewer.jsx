// File: src/components/admin/AuditLogViewer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuditLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      const response = await axios.get('https://d-final.onrender.com/admin/audit-logs');
      setLogs(response.data);
    } catch (error) {
      console.error('Error fetching audit logs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      {loading ? (
        <p className="text-yellow-400 text-sm">Loading audit logs...</p>
      ) : logs.length === 0 ? (
        <p className="text-gray-400 text-sm">No audit logs found.</p>
      ) : (
        <ul className="text-sm text-gray-200 space-y-1">
          {logs.map((log, index) => (
            <li key={index} className="border-b border-gray-600 pb-1">
              <span className="font-medium text-blue-400">{log.admin}</span> performed <strong>{log.action}</strong> on <span className="text-yellow-300">{log.target}</span> — {new Date(log.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AuditLogViewer;
