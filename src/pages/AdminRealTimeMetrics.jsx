// src/pages/AdminRealTimeMetrics.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function AdminRealTimeMetrics() {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('Loading...');
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setStatus('Admin login required.');
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await axios.get('https://d-final.onrender.com/admin/realtime-metrics', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
        setStatus(null);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (err) {
        setStatus('Failed to fetch real-time metrics.');
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Real-Time Metrics - Dealcross Admin</title>
        <meta name="description" content="Live analytics and system metrics for Dealcross administrators." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <h2 className="text-2xl font-bold mb-2">Live Admin Metrics</h2>
        {lastUpdated && (
          <p className="text-sm text-gray-400 mb-4">Last updated: {lastUpdated}</p>
        )}
        {status && <p className="text-yellow-400 mb-4">{status}</p>}

        {stats && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1e293b] p-6 rounded-lg shadow text-center">
              <p className="text-sm text-gray-400">Active Users</p>
              <h3 className="text-3xl font-bold mt-1">{stats.active_users}</h3>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg shadow text-center">
              <p className="text-sm text-gray-400">Live Deals</p>
              <h3 className="text-3xl font-bold mt-1">{stats.live_deals}</h3>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg shadow text-center">
              <p className="text-sm text-gray-400">Recent Transactions</p>
              <h3 className="text-3xl font-bold mt-1">{stats.recent_transactions}</h3>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-lg shadow text-center">
              <p className="text-sm text-gray-400">Fraud Warnings</p>
              <h3 className={`text-3xl font-bold mt-1 ${stats.fraud_alerts > 0 ? 'text-red-400' : 'text-green-400'}`}>
                {stats.fraud_alerts}
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
              }
