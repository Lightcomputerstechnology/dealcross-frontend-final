// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Dealcross
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            Login
          </Link>
          <Link to="/signup" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
