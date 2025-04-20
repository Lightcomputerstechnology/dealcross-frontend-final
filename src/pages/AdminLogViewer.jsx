// File: src/pages/AdminLogsViewer.jsx import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Helmet } from 'react-helmet';

export default function AdminLogsViewer() { const [logs, setLogs] = useState([]); const [loading, setLoading] = useState(true); const [status, setStatus] = useState(null);

useEffect(() => { const fetchLogs = async () => { const token = localStorage.getItem('token'); if (!token) { setStatus('Admin login required.'); setLoading(false); return; }

try {
    const response = await axios.get('https://d-final.onrender.com/admin/logs', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.data || response.data.length === 0) {
      setStatus('No logs available.');
    } else {
      setLogs(response.data);
      setStatus(null);
    }
  } catch (error) {
    setStatus('Failed to fetch logs.');
  } finally {
    setLoading(false);
  }
};

fetchLogs();

}, []);

return ( <> <Helmet> <title>Logs Viewer - Dealcross Admin</title> <meta name="description" content="View system and dispute logs for auditing activity across Dealcross." /> <meta name="keywords" content="admin logs, dealcross audit, system events, dispute logs" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
    <h1 className="text-2xl font-bold mb-6">Dispute & System Logs</h1>

    {loading ? (
      <p className="text-yellow-400">Loading logs...</p>
    ) : status ? (
      <p className="text-yellow-400">{status}</p>
    ) : (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1e293b] rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left border-b border-gray-700 text-sm text-gray-400">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Action</th>
              <th className="px-4 py-3">Details</th>
              <th className="px-4 py-3">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr key={idx} className="border-t border-gray-800 text-sm">
                <td className="px-4 py-2">{log.user || 'System'}</td>
                <td className="px-4 py-2 font-medium">{log.action}</td>
                <td className="px-4 py-2 text-gray-300">{log.message || '—'}</td>
                <td className="px-4 py-2 text-gray-400">{new Date(log.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</>

); }

        
