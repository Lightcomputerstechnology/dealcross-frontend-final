import React from 'react';

const SecurityCenter = () => {
  const securityStatus = {
    lastLogin: 'April 15, 2025',
    location: 'Aba, Nigeria',
    activeSessions: 3,
    twoFactorAuth: true,
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Security Center</h1>

      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Last Login</h2>
          <p>{securityStatus.lastLogin} from {securityStatus.location}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Active Sessions</h2>
          <p>{securityStatus.activeSessions} device(s)</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Two-Factor Authentication</h2>
          <p>{securityStatus.twoFactorAuth ? 'Enabled' : 'Disabled'}</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;
