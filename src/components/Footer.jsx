// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 px-4 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Link section */}
        <div className="flex flex-wrap gap-4 text-sm justify-center md:justify-start">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/deals" className="hover:text-blue-500">Deals</Link>
          <Link to="/share-trading" className="hover:text-blue-500">Share Trading</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          <Link to="/docs" className="hover:text-blue-500">Docs</Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center md:text-right mt-2 md:mt-0">
          © {new Date().getFullYear()} Dealcross. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
