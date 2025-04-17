import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import Logo from '../assets/dealcross-logo.png'; // <-- your transparent PNG

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Dealcross"
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
              Home
            </Link>
            <Link to="/deals" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
              Deals
            </Link>
            <Link to="/share-trading" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
              Share Trading
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/login"
              className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-1 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 text-gray-700 dark:text-gray-200"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-200">
            Home
          </Link>
          <Link to="/deals" onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-200">
            Deals
          </Link>
          <Link to="/share-trading" onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-200">
            Share Trading
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-200">
            Contact
          </Link>
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-4 py-2 border border-blue-500 text-blue-500 rounded-md"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
          }
