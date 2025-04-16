import React from 'react';

const SecurityCenter = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Security Center</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold mb-2">Two-Factor Authentication</h2>
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
          Add an extra layer of security to your account by enabling 2FA.
        </p>
        <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
          Enable 2FA
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mt-6">
        <h2 className="text-xl font-semibold mb-2">Login Activity</h2>
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
          View the history of devices and locations that accessed your account.
        </p>
        <ul className="text-sm list-disc list-inside">
          <li>Device: Chrome on Windows — Location: Lagos — Date: 2025-04-20</li>
          <li>Device: Firefox on Android — Location: Abuja — Date: 2025-04-19</li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mt-6">
        <h2 className="text-xl font-semibold mb-2">Trusted Devices</h2>
        <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
          Manage devices you've previously marked as trusted.
        </p>
        <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
          Remove All Devices
        </button>
      </div>
    </div>
  );
};

export default SecurityCenter;


SecurityCenter.jsx is now ready.
