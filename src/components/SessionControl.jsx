import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SessionControl = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate clearing session
    localStorage.clear();
    toast.success('You have been logged out.');
    navigate('/login');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-4">Session Control</h2>
      <p className="mb-6 text-gray-400">Manage your session or log out securely.</p>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-lg font-semibold shadow"
      >
        Logout
      </button>
    </div>
  );
};

export default SessionControl;
