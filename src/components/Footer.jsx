// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 text-sm text-gray-600 dark:text-gray-400">
      {/* Navigation Links on top */}
      <div className="mb-3 space-x-6">
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
      </div>

      {/* Copyright at the bottom */}
      <div className="text-xs text-gray-500 dark:text-gray-500">
        © 2025 Dealcross. All rights reserved.
      </div>
    </footer>
  );
}
