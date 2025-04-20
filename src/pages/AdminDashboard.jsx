// File: src/pages/AdminDashboard.jsx import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Helmet } from 'react-helmet'; import { FiAlertCircle, FiMessageSquare, FiBarChart2, FiUsers, FiSettings, FiBriefcase } from 'react-icons/fi';

const AdminDashboard = () => { const [stats, setStats] = useState(null); const [recent, setRecent] = useState([]); const [status, setStatus] = useState('Loading dashboard...');

useEffect(() => { const token = localStorage.getItem('token'); if (!token) { setStatus('Admin login required.'); return; }

const fetchAll = async () => {
  try {
    const statsRes = await axios.get('https://d-final.onrender.com/admin/analytics', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const activityRes = await axios.get('https://d-final.onrender.com/admin/activity-log', {
      headers: { Authorization: `Bearer ${token}` },
    });

    setStats(statsRes.data);
    setRecent(activityRes.data.logs || []);
    setStatus(null);
  } catch (err) {
    setStatus('Failed to load admin data.');
  }
};

fetchAll();

}, []);

return ( <> <Helmet> <title>Admin Dashboard - Dealcross</title> <meta name="description" content="Admin dashboard overview for managing users, deals, disputes, and analytics." /> </Helmet>

<div className="flex min-h-screen bg-[#0f172a] text-white">
    {/* Sidebar */}
    <aside className="w-64 bg-[#1e293b] p-6 space-y-6">
      <h2 className="text-2xl font-bold">Dealcross</h2>
      <nav className="space-y-4 text-sm">
        <button className="w-full flex items-center gap-2 hover:text-blue-400"><FiBarChart2 /> Dashboard</button>
        <button className="w-full flex items-center gap-2 hover:text-blue-400"><FiBriefcase /> Deals</button>
        <button className="w-full flex items-center gap-2 hover:text-blue-400"><FiUsers /> Users</button>
        <button className="w-full flex items-center gap-2 hover:text-blue-400"><FiAlertCircle /> Disputes</button>
        <button className="w-full flex items-center gap-2 hover:text-blue-400"><FiSettings /> Settings</button>
      </nav>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-8 space-y-10">
      {status && <p className="text-yellow-400 text-sm mb-4">{status}</p>}

      {stats && (
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-400">Users</p>
            <h3 className="text-2xl font-bold mt-1">{stats.users}</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-400">Deals</p>
            <h3 className="text-2xl font-bold mt-1">{stats.deals}</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-400">Wallet Funded</p>
            <h3 className="text-2xl font-bold mt-1">{stats.wallets_funded}</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
            <p className="text-sm text-gray-400">Disputes</p>
            <h3 className="text-2xl font-bold mt-1 text-red-400">{stats.disputes}</h3>
          </div>
        </div>
      )}

      {/* Activity Logs */}
      {recent.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Admin Activities</h2>
          <div className="bg-gray-900 rounded-lg p-4 space-y-2 text-sm">
            {recent.slice(0, 6).map((log, i) => (
              <div key={i} className="border-b border-gray-700 py-2">
                <p className="text-gray-300">
                  <span className="text-yellow-400 font-semibold">{log.deal_title || 'Unknown Deal'}:</span> {log.action}
                </p>
                <p className="text-xs text-gray-500">{new Date(log.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alerts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <FiAlertCircle /> Security Notices
          </h3>
          <ul className="text-sm space-y-2">
            <li>2FA recommended for all admins</li>
            <li>Unusual login detected yesterday</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <FiMessageSquare /> System Notices
          </h3>
          <ul className="text-sm space-y-2">
            <li>Dealcross v2.1 deployment successful</li>
            <li>Audit logs exported last week</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</>

); };

export default AdminDashboard;

    
