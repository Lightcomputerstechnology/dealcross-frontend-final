// File: src/pages/AdminSettingsPage.jsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { FiSettings, FiLock, FiBell } from 'react-icons/fi';

const AdminSettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <Helmet>
        <title>Admin Settings - Dealcross</title>
        <meta name="description" content="Admin settings page for configuring platform preferences, security, and notifications." />
      </Helmet>

      <div className="flex items-center gap-2 mb-6">
        <FiSettings className="text-blue-400 text-2xl" />
        <h2 className="text-2xl font-bold">Admin Settings</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Security Settings */}
        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <FiLock className="text-green-400" />
            <h3 className="text-lg font-semibold">Security Settings</h3>
          </div>
          <p className="text-gray-400">Manage password policies, two-factor authentication, and session controls.</p>
        </div>

        {/* Notification Settings */}
        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <FiBell className="text-yellow-400" />
            <h3 className="text-lg font-semibold">Notification Settings</h3>
          </div>
          <p className="text-gray-400">Configure how admins receive alerts about disputes, fraud, and platform updates.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
