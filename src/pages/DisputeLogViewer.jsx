// File: src/pages/DisputeLogViewer.jsx

import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Helmet } from 'react-helmet'; import { FiAlertCircle } from 'react-icons/fi';

const DisputeLogViewer = () => { const [logs, setLogs] = useState([]); const [status, setStatus] = useState('Loading disputes...');

useEffect(() => { const fetchLogs = async () => { const token = localStorage.getItem('token');

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

return ( <> <Helmet> <title>Dispute Logs - Admin | Dealcross</title> <meta name="description" content="View a detailed list of all user dispute logs on Dealcross platform for administrative resolution." /> <meta name="keywords" content="dealcross, admin, disputes, logs, conflicts, resolution" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
    <div className="flex items-center gap-2 mb-6">
      <FiAlertCircle className="text-red-400 text-2xl" />
      <h2 className="text-2xl font-bold">Dispute Log Viewer (Admin)</h2>
    </div>

    {status && <p className="text-yellow-400 font-medium mb-4">{status}</p>}

    <div className="space-y-4">
      {logs.map((log, index) => (
        <div
          key={index}
          className="bg-[#1e293b] p-4 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-lg">Deal ID: {log.deal_id}</h4>
              <p className="text-sm text-gray-400">Reason: {log.reason}</p>
              <p className="text-sm text-gray-400">Submitted by: {log.submitted_by}</p>
            </div>
            <p className="text-sm text-gray-400 text-right min-w-max">
              {new Date(log.created_at).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

); };

export default DisputeLogViewer;

  
