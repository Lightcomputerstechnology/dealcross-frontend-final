// File: src/pages/AuditLogViewer.jsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { getAuditLogs, getCurrentUser } from '@/api'; // Full API integration
import { toast } from 'react-hot-toast';

const AuditLogViewer = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const data = await getAuditLogs();
      setLogs(data);
    } catch (err) {
      toast.error(err.message || 'Failed to load audit logs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const user = await getCurrentUser();
        if (user.role !== 'admin') {
          setIsAdmin(false);
          toast.error('Access denied.');
        } else {
          setIsAdmin(true);
          fetchLogs();
          const interval = setInterval(fetchLogs, 20000); // Refresh every 20s
          return () => clearInterval(interval);
        }
      } catch {
        setIsAdmin(false);
        toast.error('User verification failed.');
      }
    };
    verifyAdmin();
  }, []);

  if (isAdmin === false) {
    return <div className="p-10 text-red-500 text-center text-lg">Access denied.</div>;
  }

  return (
    <>
      <Helmet>
        <title>Audit Logs - Dealcross Admin</title>
        <meta name="description" content="View system audit logs for administrative actions on Dealcross." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Audit Log Viewer</h2>
        {loading ? (
          <p className="text-yellow-400">Loading audit logs...</p>
        ) : logs.length === 0 ? (
          <p className="text-gray-400 text-sm">No admin actions logged yet.</p>
        ) : (
          <div className="space-y-4">
            {logs.map((log, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg shadow border border-gray-700"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm">
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
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AuditLogViewer;
