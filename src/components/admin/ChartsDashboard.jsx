// File: src/components/admin/ChartsDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ChartsDashboard = () => {
  const [chartData, setChartData] = useState([]);

  const fetchChartData = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/metrics');
      const transformed = res.data.map((item, i) => ({
        label: item.type,
        value: item.value,
      }));
      setChartData(transformed);
    } catch (err) {
      console.error('Chart fetch error:', err);
    }
  };

  useEffect(() => {
    fetchChartData();
    const interval = setInterval(fetchChartData, 20000); // auto-refresh every 20s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow mt-10">
      <h3 className="text-lg font-semibold mb-4 text-white">System Metrics Overview</h3>

      <div className="w-full h-[300px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsDashboard;
