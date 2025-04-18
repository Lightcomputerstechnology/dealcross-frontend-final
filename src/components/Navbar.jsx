// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X as XIcon } from 'react-feather';
import Logo from '../assets/dealcross-logo.png';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Dealcross" className="h-8 w-auto mr-2" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Dealcross</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
          <Link to="/deals" className="hover:text-blue-600 dark:hover:text-blue-400">Deals</Link>
          <Link to="/share-trading" className="hover:text-blue-600 dark:hover:text-blue-400">Share Trading</Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          <Link to="/docs" className="hover:text-blue-600 dark:hover:text-blue-400">Docs</Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login" className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md">Login</Link>
          <Link to="/signup" className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-md">Sign Up</Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile login/sign up circular buttons */}
        <div className="flex items-center md:hidden space-x-2">
          <Link to="/login" className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">In</Link>
          <Link to="/signup" className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-medium">Up</Link>
          <button className="ml-2" onClick={() => setOpen(!open)}>
            {open ? (
              <XIcon className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-900 p-6 space-y-4 z-50">
            <Link to="/" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/deals" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Deals</Link>
            <Link to="/share-trading" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Share Trading</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <Link to="/docs" onClick={() => setOpen(false)} className="block hover:text-blue-600 dark:hover:text-blue-400">Docs</Link>
            <LanguageSwitcher />
          </div>
        </>
      )}
    </nav>
  );
            }
