import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const AnalyticsDashboard = () => {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('Loading analytics...');
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchStats = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setStatus('Admin login required.');
      return;
    }

    try {
      const response = await axios.get('https://d-final.onrender.com/admin/analytics', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStats(response.data);
      setStatus(null);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (error) {
      setStatus('Failed to load analytics.');
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 20000); // every 20s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <Helmet>
        <title>Admin Analytics - Dealcross</title>
        <meta name="description" content="View real-time admin analytics and statistics on Dealcross." />
        <meta name="keywords" content="dealcross, analytics, admin, metrics, stats, dashboard" />
        <meta name="author" content="Dealcross Team" />
      </Helmet>

      <h2 className="text-2xl font-bold mb-2">Admin Analytics</h2>
      {lastUpdated && <p className="text-sm text-gray-400 mb-4">Last updated at: {lastUpdated}</p>}
      {status && <p className="text-yellow-400 mb-4">{status}</p>}

      {stats && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1e293b] p-6 rounded-lg border border-blue-500 shadow text-center hover:scale-105 transition-transform">
            <p className="text-sm text-gray-400">Registered Users</p>
            <h3 className="text-3xl font-bold mt-1">{stats.users ?? '-'}</h3>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg border border-green-500 shadow text-center hover:scale-105 transition-transform">
            <p className="text-sm text-gray-400">Deals Created</p>
            <h3 className="text-3xl font-bold mt-1">{stats.deals ?? '-'}</h3>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg border border-yellow-400 shadow text-center hover:scale-105 transition-transform">
            <p className="text-sm text-gray-400">Wallets Funded</p>
            <h3 className="text-3xl font-bold mt-1">{stats.wallets_funded ?? '-'}</h3>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg border border-red-500 shadow text-center hover:scale-105 transition-transform">
            <p className="text-sm text-gray-400">Disputes Raised</p>
            <h3 className="text-3xl font-bold mt-1 text-red-400">{stats.disputes ?? '-'}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsDashboard;
