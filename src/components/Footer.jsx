// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400 py-6 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; 2025 Dealcross. All rights reserved.</p>
        
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
          <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
