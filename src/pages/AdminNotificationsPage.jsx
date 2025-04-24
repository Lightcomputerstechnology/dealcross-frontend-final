import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiBell, FiCheckCircle } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
import { toast } from 'react-hot-toast';

const AdminNotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('token'); // Add token for secure requests
      const response = await axios.get('https://d-final.onrender.com/admin/notifications', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotifications(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to load notifications.');
      toast.error('Failed to load notifications.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`https://d-final.onrender.com/admin/notifications/${id}/mark-read`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success('Notification marked as read.');
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, read: true } : n))
      );
    } catch (err) {
      setError('Failed to mark as read.');
      toast.error('Failed to mark as read.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Notifications - Dealcross</title>
        <meta name="description" content="View and manage admin notifications on Dealcross." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-6 text-white">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiBell /> Admin Notifications
        </h1>

        {loading ? (
          <p className="text-yellow-400">Loading notifications...</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : notifications.length === 0 ? (
          <p className="text-gray-400">No notifications available.</p>
        ) : (
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 rounded-lg border ${
                  notif.read
                    ? 'border-gray-600 bg-gray-800'
                    : 'border-blue-500 bg-blue-900'
                } flex justify-between items-center`}
              >
                <div>
                  <p className="font-semibold">{notif.message}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(notif.timestamp).toLocaleString()}
                  </p>
                </div>
                {!notif.read && (
                  <button
                    onClick={() => markAsRead(notif.id)}
                    className="text-blue-400 hover:text-blue-500 flex items-center gap-1"
                  >
                    Mark as read <FiCheckCircle />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AdminNotificationsPage;
