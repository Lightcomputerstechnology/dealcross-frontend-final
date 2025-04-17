import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu as MenuIcon, X as XIcon } from 'react-feather'
import Logo from '../assets/dealcross-logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Dealcross" className="h-8 w-auto mr-2" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Dealcross
          </span>
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link
            to="/deals"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Deals
          </Link>
          <Link
            to="/share-trading"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Share Trading
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md"
          >
            Sign Up
          </Link>
        </div>

        {/* mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="h-6 w-6 text-gray-900 dark:text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-gray-900 dark:text-white" />
          )}
        </button>
      </div>

      {/* mobile links */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/deals"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Deals
          </Link>
          <Link
            to="/share-trading"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Share Trading
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
)
          }
