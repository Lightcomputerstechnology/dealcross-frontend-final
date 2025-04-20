// File: src/components/admin/AdminChartAdvanced.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CSVLink } from 'react-csv';

const COLORS = ['#3b82f6', '#22c55e', '#facc15', '#ef4444'];

export default function AdminChartAdvanced() {
  const [chartData, setChartData] = useState([]);
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/metrics/charts');
      setChartData(res.data.bar || []);
      setPieData(res.data.pie || []);
    } catch (err) {
      console.error('Error fetching chart data:', err);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Admin Visual Analytics</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div>
          <h4 className="text-sm mb-2 text-gray-300">User & Deal Growth</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="label" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip wrapperClassName="text-xs" />
              <Legend />
              <Bar dataKey="users" fill="#3b82f6" name="Users" />
              <Bar dataKey="deals" fill="#22c55e" name="Deals" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div>
          <h4 className="text-sm mb-2 text-gray-300">Deal Category Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Export CSV */}
      <div className="mt-6 text-right">
        <CSVLink
          data={chartData}
          filename="dealcross_metrics_chart.csv"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-1 text-sm rounded text-white"
        >
          Export Bar Data CSV
        </CSVLink>
      </div>
    </div>
  );
}
