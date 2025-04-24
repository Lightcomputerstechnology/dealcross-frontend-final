import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { FiBell, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const AdminNotificationsPage = () => { const [notifications, setNotifications] = useState([]); const [loading, setLoading] = useState(true); const [error, setError] = useState(null);

const fetchNotifications = async () => { try { const response = await axios.get('/api/admin/notifications'); // Replace with your backend endpoint setNotifications(response.data); } catch (err) { setError('Failed to load notifications.'); } finally { setLoading(false); } };

useEffect(() => { fetchNotifications();

const interval = setInterval(() => {
  fetchNotifications(); // Polling every 30 seconds for updates
}, 30000);

return () => clearInterval(interval);

}, []);

const markAsRead = async (id) => { try { await axios.put(/api/admin/notifications/${id}/mark-read); // Replace with your backend endpoint setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)) ); } catch (err) { setError('Failed to mark as read.'); } };

if (loading) return <div>Loading notifications...</div>; if (error) return <div className="text-red-500">{error}</div>;

return ( <div className="max-w-6xl mx-auto px-4 py-6"> <h1 className="text-2xl font-bold mb-4 flex items-center gap-2"> <FiBell /> Notifications </h1>

{notifications.length === 0 ? (
    <div className="text-gray-500">No notifications available.</div>
  ) : (
    <div className="space-y-4">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`p-4 rounded-lg border ${notif.read ? 'border-gray-300 bg-gray-50' : 'border-blue-500 bg-blue-50'} flex justify-between items-center`}
        >
          <div>
            <p className="font-semibold">{notif.message}</p>
            <p className="text-sm text-gray-500">{new Date(notif.timestamp).toLocaleString()}</p>
          </div>
          {!notif.read && (
            <button
              onClick={() => markAsRead(notif.id)}
              className="text-blue-600 hover:text-blue-800"
            >
              Mark as read <FiCheckCircle className="inline ml-1" />
            </button>
          )}
        </div>
      ))}
    </div>
  )}
</div>

); };

export default AdminNotificationsPage;

