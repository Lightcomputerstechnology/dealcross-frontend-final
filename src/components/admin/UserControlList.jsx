// File: src/components/admin/UserControlList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserControlList = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('Loading...');

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://d-final.onrender.com/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
      setStatus(null);
    } catch (err) {
      setStatus('Failed to load users');
    }
  };

  const updateUser = async (id, action, reason = '') => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `https://d-final.onrender.com/admin/user-action`,
        { id, action, reason },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchUsers();
    } catch (err) {
      alert('Failed to update user.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="space-y-4">
      {status && <p className="text-yellow-400 text-sm">{status}</p>}
      {users.map((user) => (
        <div key={user.id} className="bg-gray-800 p-4 rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-semibold">{user.username}</p>
              <p className="text-gray-400 text-sm">{user.email}</p>
              <p className="text-gray-500 text-xs">Status: {user.status}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => updateUser(user.id, 'ban', prompt('Reason for ban:'))}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
              >
                Ban
              </button>
              <button
                onClick={() => updateUser(user.id, 'approve', prompt('Approval note:'))}
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserControlList;
