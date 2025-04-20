// File: src/pages/AdminCharts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

const AdminCharts = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('Loading charts...');

  const fetchData = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/metrics/chart');
      setData(res.data);
      setStatus(null);
    } catch (err) {
      console.error('Failed to fetch chart data:', err);
      setStatus('Failed to load chart data.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin Charts - Dealcross</title>
        <meta name="description" content="Analytics charts for admin insights on Dealcross" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Admin Visual Analytics</h1>

        {status && <p className="text-yellow-400">{status}</p>}

        {!status && (
          <div className="space-y-12">
            {/* Bar Chart: Deals Created */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Deals Created (Last 7 Days)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="deals" fill="#38bdf8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Line Chart: User Registrations */}
            <div>
              <h3 className="text-lg font-semibold mb-4">User Signups</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#4ade80" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminCharts;
