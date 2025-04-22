// src/pages/AdminCharts.jsx

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { getAdminChartData, getCurrentUser } from '@/api';
import { toast } from 'react-hot-toast';

const AdminCharts = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('Loading charts...');
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timeframe, setTimeframe] = useState('7');
  const [include, setInclude] = useState({
    deals: true,
    users: true,
    kyc: true,
    disputes: true,
    volume: true,
  });

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
      const result = await getAdminChartData(timeframe);
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
    const interval = setInterval(() => {
      fetchData();
    }, 30000);
    return () => clearInterval(interval);
  }, [timeframe]);

  const downloadCSV = (data) => {
    const headers = Object.keys(data[0] || {}).join(',');
    const rows = data.map(row => Object.values(row).join(',')).join('\n');
    const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'admin_chart_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = () => {
    const chartSection = document.querySelector('.admin-chart-panel');
    if (!chartSection) return toast.error('Chart section not found');

    html2canvas(chartSection).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.setFontSize(18);
      pdf.text('Dealcross Admin Analytics Report', 14, 15);
      pdf.addImage(imgData, 'PNG', 0, 20, imgWidth, imgHeight);
      pdf.save('dealcross_admin_charts.pdf');
    });
  };

  return (
    <>
      <Helmet>
        <title>Admin Charts - Dealcross</title>
        <meta name="description" content="Analytics charts for admin insights on Dealcross" />
      </Helmet>

      <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Visual Analytics</h1>
          <div className="flex gap-2 items-center mt-4 md:mt-0">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="bg-gray-800 text-white px-3 py-2 rounded"
            >
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
            </select>
            <button onClick={fetchData} disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
            <button onClick={() => downloadCSV(data)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded">
              Download CSV
            </button>
            <button onClick={exportToPDF} className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded">
              Export PDF
            </button>
          </div>
        </div>

        {/* Chart Selection Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {['deals', 'users', 'kyc', 'disputes', 'volume'].map((key) => (
            <label key={key} className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={include[key]}
                onChange={() => setInclude({ ...include, [key]: !include[key] })}
              />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>

        {isAdmin === false && (
          <p className="text-red-400 font-medium text-center mt-6">
            Access Denied: This page is for admins only.
          </p>
        )}

        {status && isAdmin !== false && <p className="text-yellow-400">{status}</p>}

        {!status && isAdmin && (
          <div className="space-y-12 admin-chart-panel">
            {include.deals && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Deals Created (Last {timeframe} Days)</h3>
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
            )}

            {include.users && (
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
            )}

            {include.kyc && (
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
            )}

            {include.disputes && (
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
            )}

            {include.volume && (
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
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminCharts;
