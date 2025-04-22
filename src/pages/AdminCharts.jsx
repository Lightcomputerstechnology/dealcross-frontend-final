// src/pages/AdminCharts.jsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { getAdminChartData, getCurrentUser } from '@/api';
import { toast } from 'react-hot-toast';

const AdminCharts = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('Loading charts...');
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      if (user.role !== 'admin') {
        setIsAdmin(false);
        toast.error('Access denied. Admins only.');
        return;
      }

      setIsAdmin(true);
      const result = await getAdminChartData();
      setData(result);
      setStatus(null);
    } catch (err) {
      setStatus('Failed to load admin data.');
      toast.error(err.message || 'Chart loading error');
    } finally {
      setLoading(false);
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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Visual Analytics</h1>
          {isAdmin && (
            <button
              onClick={fetchData}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              {loading ? 'Refreshing...' : 'Refresh Charts'}
            </button>
          )}
        </div>

        {isAdmin === false && (
          <p className="text-red-400 font-medium text-center mt-6">
            Access Denied: This page is for admins only.
          </p>
        )}

        {status && isAdmin !== false && <p className="text-yellow-400">{status}</p>}

        {!status && isAdmin && (
          <div className="space-y-12">
            {/* Deals Created */}
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

            {/* User Registrations */}
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

            {/* KYC Approvals */}
            <div>
              <h3 className="text-lg font-semibold mb-4">KYC Approved</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="kycApproved" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Disputes */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Disputes Filed</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="disputes" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Escrow Volume */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Escrow Volume</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="escrowVolume" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminCharts;
