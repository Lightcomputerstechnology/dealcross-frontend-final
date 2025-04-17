import React from 'react';

const SecurityCenter = () => {
  const loginActivity = [
    { location: 'Aba, Nigeria', device: 'Chrome - Windows', time: 'Today, 09:23 AM' },
    { location: 'Lagos, Nigeria', device: 'Mobile Safari - iPhone', time: 'Yesterday, 06:45 PM' },
    { location: 'Unknown IP', device: 'Suspicious VPN', time: '2 days ago, 11:12 AM' },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Security Center</h2>

      {/* 2FA Section */}
      <div className="bg-[#1e293b] p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-2">Two-Factor Authentication</h3>
        <p className="text-sm text-gray-400 mb-4">
          Your account is <span className="text-green-400 font-semibold">protected</span> with 2FA.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium">
          Manage 2FA Settings
        </button>
      </div>

      {/* Login Activity */}
      <div className="bg-[#1e293b] p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Login Activity</h3>
        <ul className="space-y-4 text-sm">
          {loginActivity.map((entry, index) => (
            <li
              key={index}
              className="border-b border-gray-700 pb-2 flex justify-between"
            >
              <div>
                <p className="font-medium">{entry.device}</p>
                <p className="text-gray-400">{entry.location}</p>
              </div>
              <p className="text-gray-400">{entry.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecurityCenter;
