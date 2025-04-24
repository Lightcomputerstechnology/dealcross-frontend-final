import React, { useState } from 'react';

const AdminControls = () => {
  const userLogs = [
    {
      name: 'Alice Okoro',
      email: 'alice@example.com',
      activity: 'Funded Wallet - ₦15,000',
      type: 'fund',
      date: '2025-04-24T10:15:00',
    },
    {
      name: 'John Doe',
      email: 'john@example.com',
      activity: 'Started a Deal with Seller',
      type: 'deal',
      date: '2025-04-23T16:32:00',
    },
    {
      name: 'Ifeoma Charles',
      email: 'ifeoma@example.com',
      activity: 'Dispute Raised on Deal #7854',
      type: 'dispute',
      date: '2025-04-22T11:45:00',
    },
    {
      name: 'Ahmed Musa',
      email: 'ahmed@example.com',
      activity: 'Updated Profile Picture',
      type: 'profile',
      date: '2025-04-21T09:28:00',
    },
  ];

  const [search, setSearch] = useState('');

  const filteredLogs = userLogs.filter(
    (log) =>
      log.name.toLowerCase().includes(search.toLowerCase()) ||
      log.email.toLowerCase().includes(search.toLowerCase()) ||
      log.activity.toLowerCase().includes(search.toLowerCase())
  );

  const getActivityColor = (type) => {
    switch (type) {
      case 'fund':
        return 'text-green-400';
      case 'deal':
        return 'text-blue-400';
      case 'dispute':
        return 'text-red-400';
      default:
        return 'text-gray-300';
    }
  };

  const relativeTime = (date) => {
    const delta = Math.floor((new Date() - new Date(date)) / 1000);
    if (delta < 60) return `${delta} sec ago`;
    if (delta < 3600) return `${Math.floor(delta / 60)} min ago`;
    if (delta < 86400) return `${Math.floor(delta / 3600)} hrs ago`;
    return `${Math.floor(delta / 86400)} days ago`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Controls – User Activity Logs</h2>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search logs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-700">
        <table className="min-w-full bg-gray-800 text-left">
          <thead className="bg-gray-700 text-gray-300">
            <tr>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Recent Activity</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/40">
                <td className="px-4 py-3">{log.name}</td>
                <td className="px-4 py-3">{log.email}</td>
                <td className={`px-4 py-3 ${getActivityColor(log.type)}`}>{log.activity}</td>
                <td className="px-4 py-3 text-sm text-gray-400">
                  {new Date(log.date).toLocaleString()}<br />
                  <span className="text-xs">{relativeTime(log.date)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminControls;
