import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import useAuthRedirect from '@/hooks/useAuthRedirect';
import { motion, AnimatePresence } from 'framer-motion';

const DisputeLogViewer = () => {
  useAuthRedirect({ adminOnly: true }); // Secure this page

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Loading disputes...');

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
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
      toast.error('Failed to load disputes.');
      setStatus('Failed to load disputes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const relativeTime = (timestamp) => {
    const delta = Math.floor((new Date() - new Date(timestamp)) / 1000);
    if (delta < 60) return 'Just now';
    if (delta < 3600) return `${Math.floor(delta / 60)} min ago`;
    if (delta < 86400) return `${Math.floor(delta / 3600)} hrs ago`;
    return `${Math.floor(delta / 86400)} days ago`;
  };

  return (
    <>
      <Helmet>
        <title>Dispute Logs - Admin | Dealcross</title>
        <meta name="description" content="View a detailed list of all user dispute logs on Dealcross platform for administrative resolution." />
        <meta name="keywords" content="dealcross, admin, disputes, logs, conflicts, resolution" />
        <meta name="author" content="Dealcross Team" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <FiAlertCircle className="text-red-400 text-2xl" />
            <h2 className="text-2xl font-bold">Dispute Log Viewer (Admin)</h2>
          </div>
          <button
            onClick={fetchLogs}
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded"
          >
            <FiRefreshCw /> Refresh
          </button>
        </div>

        {status && (
          <p className="text-yellow-400 font-medium mb-4">{status}</p>
        )}

        <AnimatePresence>
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-[#1e293b] p-4 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-lg">Deal ID: {log.deal_id}</h4>
                  <p className="text-sm text-gray-400">Reason: {log.reason}</p>
                  <p className="text-sm text-gray-400">Submitted by: {log.submitted_by}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">
                    {relativeTime(log.created_at)}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(log.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && <p className="text-sm text-gray-400 mt-6">Refreshing disputes...</p>}
      </div>
    </>
  );
};

export default DisputeLogViewer;
