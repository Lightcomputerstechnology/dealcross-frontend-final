// File: src/components/admin/AdminCharts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const AdminCharts = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchChartData = async () => {
    try {
      const response = await axios.get('https://d-final.onrender.com/admin/chart-data');
      const data = response.data;

      const formatted = data.timestamps.map((timestamp, idx) => ({
        name: timestamp,
        value: data.data[idx],
      }));

      setChartData(formatted);
      setLoading(false);
    } catch (err) {
      console.error('Chart fetch error:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-white">System Activity Chart</h3>
      {loading ? (
        <p className="text-yellow-400">Loading chart data...</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="value" fill="#60a5fa" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AdminCharts;
