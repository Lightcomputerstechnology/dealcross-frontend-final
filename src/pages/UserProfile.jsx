import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    trustLevel: 'Verified',
    joined: 'February 12, 2024',
    location: 'Lagos, Nigeria',
    phone: '+234-705-889-6668',
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto bg-[#1e293b] p-6 rounded-lg shadow-md">
        {/* Avatar + Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-400">{user.trustLevel}</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Phone:</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Location:</span>
            <span>{user.location}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Joined:</span>
            <span>{user.joined}</span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6 text-right">
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
