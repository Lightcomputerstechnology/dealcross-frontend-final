// File: src/pages/AdminDashboard.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import {
  FiAlertCircle,
  FiMessageSquare,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiBriefcase,
  FiClipboard,
  FiMenu,
} from 'react-icons/fi';

import MetricsCard from '@/components/admin/MetricsCard';
import FraudList from '@/components/admin/FraudList';
import AuditLogViewer from '@/components/admin/AuditLogViewer';
import PendingDealList from '@/components/admin/PendingDealList';
import UserControlList from '@/components/admin/UserControlList';
import AdminCharts from '@/components/admin/AdminCharts'; // NEW chart panel

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [metrics, setMetrics] = useState([]);
  const [fraudReports, setFraudReports] = useState([]);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [loadingFraud, setLoadingFraud] = useState(true);

  const fetchMetrics = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/metrics');
      setMetrics(res.data);
      setLoadingMetrics(false);
    } catch (err) {
      console.error('Metrics error:', err);
      setLoadingMetrics(false);
    }
  };

  const fetchFraudReports = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/fraud-reports');
      setFraudReports(res.data);
      setLoadingFraud(false);
    } catch (err) {
      console.error('Fraud error:', err);
      setLoadingFraud(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
    fetchFraudReports();
    const interval = setInterval(() => {
      fetchMetrics();
      fetchFraudReports();
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const recentDeals = [
    { title: 'Equipment Purchase', amount: 5000, expected_completion: '2025-06-10' },
    { title: 'Web Design Services', amount: 1200, expected_completion: '2025-04-30' },
    { title: 'Vehicle Sale', amount: 3800, expected_completion: '2025-05-15' },
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Dealcross</title>
        <meta name="description" content="Admin dashboard overview for Dealcross system and user control." />
      </Helmet>

      <div className="flex min-h-screen bg-[#0f172a] text-white">
        {/* Sidebar */}
        <aside className={`fixed md:static w-64 bg-[#1e293b] p-6 space-y-6 z-30 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <h2 className="text-2xl font-bold mb-6">Dealcross</h2>
          <nav className="space-y-4 text-sm">
            <Link to="/admin" className="flex items-center gap-2 hover:text-blue-400"><FiBarChart2 /> Dashboard</Link>
            <Link to="/users" className="flex items-center gap-2 hover:text-blue-400"><FiUsers /> Users</Link>
            <Link to="/deal-analytics" className="flex items-center gap-2 hover:text-blue-400"><FiBriefcase /> Deals</Link>
            <Link to="/dispute-log" className="flex items-center gap-2 hover:text-blue-400"><FiAlertCircle /> Disputes</Link>
            <Link to="/settings" className="flex items-center gap-2 hover:text-blue-400"><FiSettings /> Settings</Link>
            <Link to="/admin-deal-log" className="flex items-center gap-2 hover:text-blue-400"><FiClipboard /> Deal Logs</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 space-y-10 w-full">
          <div className="md:hidden mb-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white bg-gray-700 p-2 rounded-lg">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Metrics */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Live System Metrics</h2>
            {loadingMetrics ? (
              <p className="text-sm text-yellow-400">Loading metrics...</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <MetricsCard key={m.id} type={m.type} value={m.value} timestamp={m.timestamp} />
                ))}
              </div>
            )}
          </section>

          {/* Charts */}
          <section className="bg-gray-900 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Platform Activity Charts</h2>
            <AdminCharts />
          </section>

          {/* Recent Deals */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Deals</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="grid grid-cols-3 text-sm text-gray-400 mb-2">
                <span>Deal</span>
                <span>Amount</span>
                <span>Expected</span>
              </div>
              {recentDeals.map((deal, i) => (
                <div key={i} className="grid grid-cols-3 py-2 border-t border-gray-700">
                  <span>{deal.title}</span>
                  <span>${deal.amount.toLocaleString()}</span>
                  <span className="text-yellow-400 text-sm">{deal.expected_completion}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Fraud Alerts */}
          <section className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FiAlertCircle /> Fraud Alerts
            </h3>
            <FraudList loading={loadingFraud} fraudReports={fraudReports} />
          </section>

          {/* Admin Controls */}
          <section className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Pending Deal Approvals</h3>
            <PendingDealList />
          </section>

          <section className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3">User Admin Controls</h3>
            <UserControlList />
          </section>

          {/* Audit Logs */}
          <section className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Admin Audit Logs</h3>
            <AuditLogViewer />
          </section>

          {/* Notifications */}
          <section className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FiMessageSquare /> System Notifications
            </h3>
            <ul className="text-sm space-y-2">
              <li>System operational — {new Date().toLocaleTimeString()}</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
