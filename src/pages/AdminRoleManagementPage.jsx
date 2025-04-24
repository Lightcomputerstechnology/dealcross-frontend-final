// File: src/pages/AdminRoleManagementPage.jsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { FiShield, FiUser } from 'react-icons/fi';

const AdminRoleManagementPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <Helmet>
        <title>Role Management - Dealcross Admin</title>
        <meta name="description" content="Manage user roles and permissions in Dealcross admin." />
      </Helmet>

      <div className="flex items-center gap-2 mb-6">
        <FiShield className="text-blue-400 text-2xl" />
        <h2 className="text-2xl font-bold">Admin Role Management</h2>
      </div>

      <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
        <p className="text-gray-400">This section will allow administrators to manage roles and permissions for different users on the platform.</p>
        <div className="mt-4 flex items-center gap-4">
          <FiUser className="text-green-400" size={20} />
          <p className="text-sm text-gray-300">Role management features coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default AdminRoleManagementPage;
