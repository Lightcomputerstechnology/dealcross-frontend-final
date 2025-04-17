// File: src/pages/AnalyticsDashboard.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnalyticsDashboard = () => {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('Loading analytics...');

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setStatus('Admin login required.');
        return;
      }

      try {
        const response = await axios.get('https://d-final.onrender.com/admin/analytics', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(response.data);
        setStatus(null);
      } catch (error) {
        setStatus('Failed to load analytics.');
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Admin Analytics</h2>

      {status && <p className="text-yellow-400 mb-4">{status}</p>}

      {stats && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1e293b] p-6 rounded-lg shadow text-center">
            <p className="text-sm text-gray-400">Registered Users</p>
            <h3 className="text-3xl font-bold mt-1">{stats.users}</h3>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg shadow text-center">
            <p className="text-sm text-gray-400">Deals Created</p>
            <h3 className="text-3xl font-bold mt-1">{stats.deals}</h3>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg shadow text-center">
            <p className="text-sm text-gray-400">Wallets Funded</p>
            <h3 className="text-3xl font-bold mt-1">{stats.wallets_funded}</h3>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg shadow text-center">
            <p className="text-sm text-gray-400">Disputes Raised</p>
            <h3 className="text-3xl font-bold mt-1 text-red-400">{stats.disputes}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsDashboard;
