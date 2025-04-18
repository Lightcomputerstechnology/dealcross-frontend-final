// File: src/pages/UserManagement.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('Loading users...');

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');

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

        if (response.data.length === 0) {
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

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">User Management (Admin)</h2>

      {status && <p className="text-yellow-400">{status}</p>}

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
              <tr key={index} className="border-t border-gray-800 text-sm">
                <td className="px-4 py-2">{u.name}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2 capitalize">{u.role}</td>
                <td className="px-4 py-2 text-green-400">{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
