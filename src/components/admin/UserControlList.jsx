import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserControlList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('https://d-final.onrender.com/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      toast.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `https://d-final.onrender.com/admin/users/${id}/${action}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(`User ${action === 'ban' ? 'banned' : 'unbanned'} successfully`);
      fetchUsers();
    } catch (err) {
      toast.error(`Failed to ${action} user`);
    }
  };

  const filtered = users.filter((u) => {
    const matchSearch = u.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === 'all' || (statusFilter === 'banned' && u.is_banned) || (statusFilter === 'active' && !u.is_banned);
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 border border-gray-600 px-3 py-1 rounded text-white w-60"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-gray-800 border border-gray-600 px-3 py-1 rounded text-white"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="banned">Banned</option>
        </select>
      </div>

      {loading ? (
        <p className="text-yellow-400">Loading users...</p>
      ) : filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((u) => (
            <div
              key={u.id}
              className="bg-gray-800 p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{u.email}</p>
                <p className="text-sm text-gray-400">
                  {u.full_name || 'Unnamed'} — Status:{' '}
                  <span className={u.is_banned ? 'text-red-500' : 'text-green-400'}>
                    {u.is_banned ? 'Banned' : 'Active'}
                  </span>
                </p>
              </div>
              <div>
                {u.is_banned ? (
                  <button
                    onClick={() => handleAction(u.id, 'unban')}
                    className="px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded"
                  >
                    Unban
                  </button>
                ) : (
                  <button
                    onClick={() => handleAction(u.id, 'ban')}
                    className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded"
                  >
                    Ban
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No users found.</p>
      )}
    </div>
  );
};

export default UserControlList;
