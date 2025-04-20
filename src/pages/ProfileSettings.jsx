// ... (previous pages remain unchanged)

// src/pages/ProfileSettings.jsx import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Helmet } from 'react-helmet';

export default function ProfileSettings() { const [email, setEmail] = useState(''); const [role, setRole] = useState('buyer'); const [status, setStatus] = useState(null);

useEffect(() => { const storedUser = JSON.parse(localStorage.getItem('user')); if (storedUser) { setEmail(storedUser.email || ''); setRole(storedUser.role || 'buyer'); } }, []);

const handleUpdate = async (e) => { e.preventDefault(); const token = localStorage.getItem('token'); if (!token) return;

try {
  const response = await axios.put(
    'https://d-final.onrender.com/users/update-profile',
    { email, role },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (response.status === 200) {
    setStatus('Profile updated successfully!');
    localStorage.setItem('user', JSON.stringify({ email, role, token }));
  } else {
    setStatus('Update failed. Try again.');
  }
} catch (err) {
  setStatus(err.response?.data?.detail || 'Update failed.');
}

};

return ( <> <Helmet> <title>Profile Settings - Dealcross</title> <meta name="description" content="Edit your user profile, email, and role settings on Dealcross." /> <meta name="keywords" content="dealcross, profile, settings, account, edit" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<div className="min-h-screen px-6 py-10 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
    <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

    <form onSubmit={handleUpdate} className="max-w-md space-y-4">
      <div>
        <label className="block mb-1 font-medium">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">User Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 rounded border dark:bg-gray-800 dark:border-gray-600"
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
      >
        Save Changes
      </button>

      {status && <p className="mt-4 text-yellow-500">{status}</p>}
    </form>
  </div>
</>

); }

