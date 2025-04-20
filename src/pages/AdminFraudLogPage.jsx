// File: src/pages/AdminFraudLogPage.jsx

import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Helmet } from 'react-helmet';

const AdminFraudLogPage = () => { const [frauds, setFrauds] = useState([]); const [status, setStatus] = useState('Loading fraud reports...');

useEffect(() => { const token = localStorage.getItem('token'); if (!token) { setStatus('Admin login required.'); return; }

axios
  .get('https://d-final.onrender.com/admin/fraud-reports', {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
    setFrauds(res.data || []);
    setStatus(null);
  })
  .catch(() => setStatus('Failed to load fraud logs.'));

}, []);

return ( <> <Helmet> <title>Fraud Reports - Dealcross Admin</title> <meta name="description" content="Admin page to monitor and review reported fraudulent activity." /> </Helmet>

<div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
    <h1 className="text-2xl font-bold mb-4">Fraud Reports & Alerts</h1>

    {status && <p className="text-yellow-400 mb-4">{status}</p>}

    <div className="space-y-4">
      {frauds.map((entry, index) => (
        <div key={index} className="bg-[#1e293b] p-4 rounded border border-red-500 shadow-md">
          <h2 className="text-lg font-semibold text-red-400">{entry.report_type}</h2>
          <p className="text-sm text-gray-400">Reported User: {entry.user_email}</p>
          <p className="text-sm text-gray-400">Deal ID: {entry.deal_id}</p>
          <p className="text-sm text-gray-400">Reason: {entry.reason}</p>
          <p className="text-sm text-gray-500">Time: {entry.timestamp}</p>
        </div>
      ))}
    </div>
  </div>
</>

); };

export default AdminFraudLogPage;

