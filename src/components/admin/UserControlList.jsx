// src/components/admin/UserControlList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const UserControlList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
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
        { headers: { Authorization: `Bearer ${token}` } }
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
      statusFilter === 'all' ||
      (statusFilter === 'banned' && u.is_banned) ||
      (statusFilter === 'active' && !u.is_banned);
    return matchSearch && matchStatus;
  });

  const exportCSV = () => {
    const headers = 'Email,Full Name,Status\n';
    const rows = filtered
      .map((u) => `${u.email},${u.full_name || 'Unnamed'},${u.is_banned ? 'Banned' : 'Active'}`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'user_list.csv';
    link.click();
  };

  const exportPDF = () => {
    const target = document.querySelector('#user-list-export');
    if (!target) return toast.error('User list container not found');

    html2canvas(target).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.text('Dealcross - Admin User List', 14, 15);
      pdf.addImage(imgData, 'PNG', 0, 20, imgWidth, imgHeight);
      pdf.save('user_list.pdf');
    });
  };

  return (
    <div className="space-y-6">
      {/* Filters + Export Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
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
          <button onClick={fetchUsers} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white rounded">
            Refresh
          </button>
        </div>
        <div className="flex gap-2">
          <button onClick={exportCSV} className="bg-green-600 hover:bg-green-700 px-3 py-1 text-white rounded">
            Export CSV
          </button>
          <button onClick={exportPDF} className="bg-red-600 hover:bg-red-700 px-3 py-1 text-white rounded">
            Export PDF
          </button>
        </div>
      </div>

      {/* User List */}
      {loading ? (
        <p className="text-yellow-400">Loading users...</p>
      ) : filtered.length > 0 ? (
        <div id="user-list-export" className="space-y-3">
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
