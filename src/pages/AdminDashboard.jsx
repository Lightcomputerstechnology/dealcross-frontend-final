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
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi';
import MetricsCard from '@/components/admin/MetricsCard';
import FraudList from '@/components/admin/FraudList';
import { Bar } from 'react-chartjs-2';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [metrics, setMetrics] = useState([]);
  const [fraudReports, setFraudReports] = useState([]);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [loadingFraud, setLoadingFraud] = useState(true);
  const [recentDeals, setRecentDeals] = useState([]);
  const [adminLogs, setAdminLogs] = useState([]);

  const fetchMetrics = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/metrics');
      setMetrics(res.data);
      setLoadingMetrics(false);
    } catch (err) {
      setLoadingMetrics(false);
    }
  };

  const fetchFraudReports = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/fraud-reports');
      setFraudReports(res.data);
      setLoadingFraud(false);
    } catch (err) {
      setLoadingFraud(false);
    }
  };

  const fetchAdminLogs = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/logs');
      setAdminLogs(res.data);
    } catch (err) {}
  };

  const fetchRecentDeals = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/recent-deals');
      setRecentDeals(res.data);
    } catch (err) {}
  };

  const handleApprove = (id) => {
    // placeholder for backend API call
    console.log(`Approved user/deal: ${id}`);
  };

  const handleBan = (id) => {
    // placeholder for backend API call
    console.log(`Banned user/deal: ${id}`);
  };

  useEffect(() => {
    fetchMetrics();
    fetchFraudReports();
    fetchAdminLogs();
    fetchRecentDeals();
    const interval = setInterval(() => {
      fetchMetrics();
      fetchFraudReports();
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: metrics.map((m) => m.type),
    datasets: [
      {
        label: 'Activity Count',
        backgroundColor: '#3b82f6',
        borderRadius: 6,
        data: metrics.map((m) => m.value),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Dealcross</title>
      </Helmet>
      <div className="flex min-h-screen bg-[#0f172a] text-white">
        <aside className={`fixed md:static w-64 bg-[#1e293b] p-6 space-y-6 z-30 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
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

        <main className="flex-1 p-6 md:p-8 space-y-10 w-full">
          <div className="md:hidden mb-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white bg-gray-700 p-2 rounded-lg">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Live System Metrics</h2>
            {loadingMetrics ? (
              <p className="text-yellow-400 text-sm">Loading metrics...</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <MetricsCard key={m.id} type={m.type} value={m.value} timestamp={m.timestamp} />
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">System Activity Chart</h2>
            <div className="bg-gray-800 p-4 rounded">
              <Bar data={chartData} />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Deals</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="grid grid-cols-4 text-sm text-gray-400 mb-2">
                <span>Deal</span><span>Amount</span><span>Expected</span><span>Actions</span>
              </div>
              {recentDeals.map((deal, i) => (
                <div key={i} className="grid grid-cols-4 items-center py-2 border-t border-gray-700">
                  <span>{deal.title}</span>
                  <span>${deal.amount.toLocaleString()}</span>
                  <span className="text-yellow-400 text-sm">{deal.expected_completion}</span>
                  <span className="flex gap-2">
                    <button onClick={() => handleApprove(deal.id)} className="text-green-400 hover:text-green-600"><FiCheckCircle /></button>
                    <button onClick={() => handleBan(deal.id)} className="text-red-400 hover:text-red-600"><FiXCircle /></button>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FiAlertCircle /> Fraud Alerts
            </h3>
            <FraudList loading={loadingFraud} fraudReports={fraudReports} />
          </div>

          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FiMessageSquare /> Admin Audit Trail
            </h3>
            <ul className="text-sm space-y-2">
              {adminLogs.map((log, index) => (
                <li key={index}>{log.action} - {new Date(log.timestamp).toLocaleTimeString()}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
    
