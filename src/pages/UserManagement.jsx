// File: src/pages/UserManagement.jsx

import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Helmet } from 'react-helmet'; import { FiUsers, FiUserCheck, FiUserX } from 'react-icons/fi';

const UserManagement = () => { const [users, setUsers] = useState([]); const [status, setStatus] = useState('Loading users...');

useEffect(() => { const fetchUsers = async () => { const token = localStorage.getItem('token');

if (!token) {
    setStatus('Admin login required.');
    return;
  }

  try {
    const response = await axios.get('https://d-final.onrender.com/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.data || response.data.length === 0) {
      setStatus('No users found.');
    } else {
      setUsers(response.data);
      setStatus(null);
    }
  } catch (error) {
    setStatus('Failed to load users.');
  }
};

fetchUsers();

}, []);

return ( <> <Helmet> <title>User Management - Dealcross Admin</title> <meta name="description" content="Admin view of all registered users on Dealcross platform." /> <meta name="keywords" content="dealcross admin, user management, admin panel" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
    <div className="flex items-center gap-3 mb-6">
      <FiUsers className="text-blue-500 text-2xl" />
      <h2 className="text-2xl font-bold">User Management (Admin)</h2>
    </div>

    {status && <p className="text-yellow-400 mb-4 font-medium">{status}</p>}

    {users.length > 0 && (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#1e293b] rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left border-b border-gray-700 text-sm text-gray-400">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={index} className="border-t border-gray-800 text-sm hover:bg-gray-800">
                <td className="px-4 py-2">{u.name || 'N/A'}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2 capitalize">{u.role}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  {u.status === 'banned' ? (
                    <><FiUserX className="text-red-400" /> <span className="text-red-400">Banned</span></>
                  ) : (
                    <><FiUserCheck className="text-green-400" /> <span className="text-green-400">Active</span></>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
</>

); };

export default UserManagement;

                
