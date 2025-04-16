import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 mt-10 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">User Profile</h2>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p><strong>Full Name:</strong> Jane Doe</p>
        <p><strong>Email:</strong> jane.doe@example.com</p>
        <p><strong>Phone:</strong> +1 (234) 567-8901</p>
        <p><strong>Role:</strong> Individual</p>
      </div>
    </div>
  );
};

export default UserProfile;
