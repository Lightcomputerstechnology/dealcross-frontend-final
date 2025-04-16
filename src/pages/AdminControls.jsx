import React from 'react';

const AdminControls = () => {
  const userLogs = [
    {
      name: 'Alice Okoro',
      email: 'alice@example.com',
      activity: 'Funded Wallet - ₦15,000',
      date: '2025-04-24 10:15AM',
    },
    {
      name: 'John Doe',
      email: 'john@example.com',
      activity: 'Started a Deal with Seller',
      date: '2025-04-23 04:32PM',
    },
    {
      name: 'Ifeoma Charles',
      email: 'ifeoma@example.com',
      activity: 'Dispute Raised on Deal #7854',
      date: '2025-04-22 11:45AM',
    },
    {
      name: 'Ahmed Musa',
      email: 'ahmed@example.com',
      activity: 'Updated Profile Picture',
      date: '2025-04-21 09:28AM',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Controls – User Activity Logs</h2>

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
            {userLogs.map((log, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/40">
                <td className="px-4 py-3">{log.name}</td>
                <td className="px-4 py-3">{log.email}</td>
                <td className="px-4 py-3">{log.activity}</td>
                <td className="px-4 py-3 text-sm text-gray-400">{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminControls;
