// src/components/admin/UserControlList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserControlList = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('Loading users...');

  const fetchUsers = async () => {
    try {
      const res = await axios.get('https://d-final.onrender.com/admin/users');
      setUsers(res.data);
      setStatus('');
    } catch (err) {
      setStatus('Failed to load users.');
    }
  };

  const handleBan = async (userId) => {
    const confirm = window.confirm('Are you sure you want to ban this user?');
    if (!confirm) return;

    try {
      await axios.post(`https://d-final.onrender.com/admin/ban-user/${userId}`);
      toast.success('User banned successfully');
      fetchUsers(); // refresh
    } catch {
      toast.error('Failed to ban user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow mt-8">
      <h3 className="font-semibold mb-3 text-white">User Controls</h3>
      {status ? (
        <p className="text-yellow-400 text-sm">{status}</p>
      ) : (
        <ul className="space-y-3 text-sm">
          {users.map((user) => (
            <li key={user.id} className="flex justify-between items-center text-gray-300">
              <span>{user.username} ({user.email})</span>
              <button
                onClick={() => handleBan(user.id)}
                className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700"
              >
                Ban
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserControlList;
