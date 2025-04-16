import React from 'react';

const InvestorProfile = () => {
  const profile = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    joined: 'January 2024',
    totalInvested: 10000,
    numberOfDeals: 12,
    returns: 14250,
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Investor Profile</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-xl">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Name:</h2>
          <p className="text-lg">{profile.name}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Email:</h2>
          <p className="text-lg">{profile.email}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Member Since:</h2>
          <p className="text-lg">{profile.joined}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-sm text-gray-500">Total Invested</h3>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">${profile.totalInvested.toLocaleString()}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-sm text-gray-500">Deals Participated</h3>
            <p className="text-xl font-bold">{profile.numberOfDeals}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
            <h3 className="text-sm text-gray-500">Total Returns</h3>
            <p className="text-xl font-bold text-green-600 dark:text-green-400">${profile.returns.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;
