// src/components/admin/AuditLogViewer.jsx
import React, { useEffect, useState } from 'react';
import { getAuditLogs } from '@/api';
import { FiRefreshCw } from 'react-icons/fi';

const AuditLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState('Loading logs...');
  const [refreshing, setRefreshing] = useState(false);

  const fetchLogs = async () => {
    setRefreshing(true);
    try {
      const data = await getAuditLogs();
      setLogs(data);
      setStatus(data.length === 0 ? 'No audit logs found.' : '');
    } catch (err) {
      setStatus('Failed to load audit logs.');
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-white">Admin Audit Logs</h3>
        <button
          onClick={fetchLogs}
          disabled={refreshing}
          className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-200 transition"
        >
          <FiRefreshCw className={refreshing ? 'animate-spin' : ''} /> Refresh
        </button>
      </div>

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
