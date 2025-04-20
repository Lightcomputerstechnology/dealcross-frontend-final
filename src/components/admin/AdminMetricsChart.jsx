// File: src/components/admin/AdminMetricsChart.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const AdminMetricsChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartMetrics = async () => {
      try {
        const response = await axios.get('https://d-final.onrender.com/admin/metrics/chart');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load chart data:', err);
        setLoading(false);
      }
    };

    fetchChartMetrics();
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-3">Weekly Activity Overview</h3>
      {loading ? (
        <p className="text-sm text-yellow-400">Loading chart...</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="deals" stroke="#4fd1c5" strokeWidth={2} />
            <Line type="monotone" dataKey="users" stroke="#63b3ed" strokeWidth={2} />
            <Line type="monotone" dataKey="frauds" stroke="#f56565" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AdminMetricsChart;
