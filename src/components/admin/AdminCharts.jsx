// File: src/components/admin/AdminCharts.jsx
import React from 'react';
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Mocked chart data — replace with backend fetch later
const userTrends = [
  { day: 'Mon', users: 120 },
  { day: 'Tue', users: 98 },
  { day: 'Wed', users: 150 },
  { day: 'Thu', users: 80 },
  { day: 'Fri', users: 200 },
  { day: 'Sat', users: 170 },
  { day: 'Sun', users: 140 },
];

const dealVolume = [
  { type: 'Products', count: 240 },
  { type: 'Services', count: 190 },
  { type: 'Crypto', count: 120 },
  { type: 'Real Estate', count: 60 },
];

const fraudActivity = [
  { day: 'Mon', reports: 2 },
  { day: 'Tue', reports: 1 },
  { day: 'Wed', reports: 4 },
  { day: 'Thu', reports: 3 },
  { day: 'Fri', reports: 5 },
  { day: 'Sat', reports: 0 },
  { day: 'Sun', reports: 2 },
];

const userTypes = [
  { name: 'Business', value: 60 },
  { name: 'Individual', value: 40 },
];

const AdminCharts = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white space-y-10">
      <h2 className="text-xl font-semibold mb-6">Platform Analytics (Charts)</h2>

      {/* Line Chart */}
      <div className="w-full h-72">
        <h3 className="text-sm mb-2">User Registration Trend (Weekly)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#00C49F" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="w-full h-72">
        <h3 className="text-sm mb-2">Deal Volume by Type</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dealVolume}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart */}
      <div className="w-full h-72">
        <h3 className="text-sm mb-2">Fraud Reports (7-Day)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={fraudActivity}>
            <defs>
              <linearGradient id="colorReports" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF8042" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF8042" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="reports" stroke="#FF8042" fillOpacity={1} fill="url(#colorReports)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="w-full h-72">
        <h3 className="text-sm mb-2">User Type Distribution</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={userTypes}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {userTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminCharts;
  
