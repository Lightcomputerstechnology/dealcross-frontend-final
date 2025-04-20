import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuditLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('https://d-final.onrender.com/admin/audit-logs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLogs(res.data);
    } catch (err) {
      toast.error('Failed to load audit logs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 20000); // refresh every 20s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {loading ? (
        <p className="text-yellow-400">Loading audit logs...</p>
      ) : logs.length === 0 ? (
        <p className="text-sm text-gray-400">No admin actions logged yet.</p>
      ) : (
        logs.map((log, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white text-sm">
                  <span className="font-semibold">{log.admin_username}</span>{' '}
                  performed <span className="text-blue-400">{log.action}</span> on{' '}
                  <span className="text-green-400">{log.target}</span>
                </p>
                {log.note && (
                  <p className="text-gray-400 text-xs mt-1">Note: {log.note}</p>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(log.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AuditLogViewer;
