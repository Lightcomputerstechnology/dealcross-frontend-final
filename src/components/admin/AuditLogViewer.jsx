// File: src/components/admin/AuditLogViewer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuditLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://d-final.onrender.com/admin/audit-logs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLogs(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch audit logs:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2 text-sm">
      {loading ? (
        <p className="text-yellow-400">Loading logs...</p>
      ) : logs.length > 0 ? (
        logs.map((log, i) => (
          <div key={i} className="border border-gray-700 rounded p-2 bg-[#1e293b]">
            <p><strong>{log.admin}</strong> — {log.action}</p>
            <p className="text-xs text-gray-400">{new Date(log.timestamp).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No audit logs available.</p>
      )}
    </div>
  );
};

export default AuditLogViewer;
            
