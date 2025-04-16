// src/pages/LandingPage.jsx
import React from 'react';
import { toast } from 'react-hot-toast';

const LandingPage = () => {
  const handleTestToast = () => {
    toast.success('This is a test notification!');
  };

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Dealcross</h1>
      <p className="text-lg text-gray-300 dark:text-gray-400 mb-6">
        Secure your deals and trade confidently.
      </p>
      <button
        onClick={handleTestToast}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Show Test Notification
      </button>
    </div>
  );
};

export default LandingPage;
