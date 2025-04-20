// File: src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import {
  FiAlertCircle,
  FiMessageSquare,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiBriefcase,
} from 'react-icons/fi';

const AdminDashboard = () => {
  const [dealLog, setDealLog] = useState([]);
  const [logStatus, setLogStatus] = useState('Loading...');
  const [adminStats, setAdminStats] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return setLogStatus('Admin login required');

    // Fetch deal log
    axios.get('https://d-final.onrender.com/admin/deal-log', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setLogStatus('No deal activity yet.');
        } else {
          setDealLog(res.data);
          setLogStatus(null);
        }
      })
      .catch(() => setLogStatus('Error loading deal log.'));

    // Optional: Fetch admin stats (if available)
    axios.get('https://d-final.onrender.com/admin/analytics', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setAdminStats(res.data))
      .catch(() => {});
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Dealcross</title>
        <meta name="description" content="Admin dashboard overview for managing users, deals, disputes, and settings on Dealcross." />
        <meta name="keywords" content="dealcross, admin, dashboard, manage, fraud, users, deals" />
        <meta name="author" content="Dealcross Team" />
      </Helmet>

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
          {/* Top Grid Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-sm text-gray-400">Pending Approval</h3>
              <p className="text-2xl font-bold mt-2">5</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-sm text-gray-400">Fraud Alerts</h3>
              <p className="text-2xl font-bold mt-2 text-red-500">3</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-sm text-gray-400">User Activity</h3>
              <p className="text-2xl font-bold mt-2">1,204</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-sm text-gray-400">Refund Requests</h3>
              <p className="text-2xl font-bold mt-2">1</p>
            </div>
          </div>

          {/* Recent Deals (Mock) */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Deals (Sample)</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="grid grid-cols-3 text-sm text-gray-400 mb-2">
                <span>Deal</span>
                <span>Amount</span>
                <span>Expected</span>
              </div>
              {[
                { title: 'Equipment Purchase', amount: 5000, expected_completion: '2025-06-10' },
                { title: 'Web Design Services', amount: 1200, expected_completion: '2025-04-30' },
                { title: 'Vehicle Sale', amount: 3800, expected_completion: '2025-05-15' },
              ].map((deal, i) => (
                <div key={i} className="grid grid-cols-3 py-2 border-t border-gray-700">
                  <span>{deal.title}</span>
                  <span>${deal.amount.toLocaleString()}</span>
                  <span className="text-yellow-400">{deal.expected_completion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real-Time Deal Log */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Live Deal Activity Log</h2>
            {logStatus ? (
              <p className="text-yellow-400">{logStatus}</p>
            ) : (
              <div className="space-y-4">
                {dealLog.map((log, i) => (
                  <div key={i} className="bg-gray-800 p-4 rounded-lg shadow">
                    <p><strong>Title:</strong> {log.title}</p>
                    <p><strong>Amount:</strong> ${log.amount}</p>
                    <p><strong>Category:</strong> {log.category}</p>
                    <p><strong>Status:</strong> {log.status}</p>
                    <p className="text-sm text-gray-400">Logged: {new Date(log.timestamp).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <FiAlertCircle /> Fraud Alerts
              </h3>
              <ul className="text-sm space-y-2">
                <li>Suspicious activity by lenesie - 1m ago</li>
                <li>VPN Detected - morevillzos</li>
                <li>Unusual withdrawal - a few hours ago</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <FiMessageSquare /> System Notifications
              </h3>
              <ul className="text-sm space-y-2">
                <li>Dispute by sarshee - 0:98</li>
                <li>New user: thomaswilfams</li>
                <li>Refund: robertsmith</li>
                <li>Approved for lucywhite</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
