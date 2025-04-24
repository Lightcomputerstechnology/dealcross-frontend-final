// File: src/pages/RealTimeMetricsPage.jsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiRefreshCw, FiActivity, FiDollarSign, FiUsers } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const RealTimeMetricsPage = () => {
  const [metrics, setMetrics] = useState({
    activeDeals: 0,
    escrowVolume: 0,
    onlineUsers: 0,
  });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://d-final.onrender.com/admin/realtime-metrics', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMetrics(response.data);
      setLastUpdated(new Date());
    } catch (err) {
      toast.error('Failed to load real-time metrics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000); // Auto-refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const metricsList = [
    { icon: <FiActivity />, label: 'Active Deals', value: metrics.activeDeals, color: 'text-blue-400' },
    { icon: <FiDollarSign />, label: 'Escrow Volume', value: `$${metrics.escrowVolume}`, color: 'text-green-400' },
    { icon: <FiUsers />, label: 'Online Users', value: metrics.onlineUsers, color: 'text-yellow-400' },
  ];

  return (
    <>
      <Helmet>
        <title>Real-Time Metrics - Dealcross Admin</title>
        <meta name="description" content="Live metrics dashboard for Dealcross admin including active deals, escrow volume, and online users." />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Real-Time Metrics</h2>
          <button
            onClick={fetchMetrics}
            disabled={loading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded"
          >
            <FiRefreshCw /> {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        <p className="text-sm text-gray-400 mb-4">Last updated: {lastUpdated.toLocaleString()}</p>

        {/* Metric Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {metricsList.map((metric, index) => (
            <div key={index} className="bg-[#1e293b] p-6 rounded-lg shadow flex items-center gap-4">
              <div className={`text-3xl ${metric.color}`}>{metric.icon}</div>
              <div>
                <p className="text-sm text-gray-400">{metric.label}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Chart Section */}
        <div className="bg-[#1e293b] p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Traffic & Activity Trends (Placeholder)</h3>
          <div className="h-64 bg-gray-800 rounded flex items-center justify-center text-gray-400">
            Future Chart Visualization Here
          </div>
        </div>
      </div>
    </>
  );
};

export default RealTimeMetricsPage;
