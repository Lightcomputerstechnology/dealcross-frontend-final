import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-2xl font-bold text-blue-500">1,234</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Active Deals</h2>
          <p className="text-2xl font-bold text-green-500">87</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Pending Disputes</h2>
          <p className="text-2xl font-bold text-red-500">4</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="bg-white dark:bg-gray-800 p-3 rounded shadow">
            New user registered: <span className="font-medium">jane.doe@example.com</span>
          </li>
          <li className="bg-white dark:bg-gray-800 p-3 rounded shadow">
            Deal marked as completed by <span className="font-medium">user123</span>
          </li>
          <li className="bg-white dark:bg-gray-800 p-3 rounded shadow">
            Dispute resolved by <span className="font-medium">admin</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
