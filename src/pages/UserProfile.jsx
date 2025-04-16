import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const UserProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Profile updated successfully!');
    // Add API call here in future to update user profile
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black px-4 py-8 text-gray-900 dark:text-white">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-medium">Profile Picture</label>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={handleChange}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-gray-700 file:text-blue-700 dark:file:text-white"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
