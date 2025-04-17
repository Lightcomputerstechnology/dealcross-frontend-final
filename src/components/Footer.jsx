import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* © Year */}
        <p className="text-sm">
          © {new Date().getFullYear()} Dealcross. All rights reserved.
        </p>
        
        {/* Legal links */}
        <div className="mt-3 md:mt-0 space-x-6">
          <Link to="/privacy" className="hover:text-gray-700 dark:hover:text-gray-200 text-sm">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-700 dark:hover:text-gray-200 text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
