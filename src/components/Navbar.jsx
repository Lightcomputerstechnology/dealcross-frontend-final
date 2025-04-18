// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/dealcross-logo.png';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Dealcross" className="h-8 w-auto mr-2" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Dealcross</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <Link to="/deals" className="hover:text-blue-600 dark:hover:text-blue-400">Deals</Link>
          <Link to="/share-trading" className="hover:text-blue-600 dark:hover:text-blue-400">Share Trading</Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md">Login</Link>
          <Link to="/signup" className="px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-md">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
                                                                                                            }
