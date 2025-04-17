// src/pages/LandingPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/dealcross-logo.png'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800">
        <img src={Logo} alt="Dealcross logo" className="h-8 w-auto" />
        <nav className="space-x-4">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <img src={Logo} alt="Dealcross logo" className="h-24 w-auto mb-8" />

        <h1 className="text-4xl font-extrabold mb-4">
          Secure Transactions <span className="text-blue-600">with Escrow</span>
        </h1>
        <p className="text-lg mb-8 max-w-md">
          Trust, protect and save time with Dealcross escrow services.
        </p>

        <Link
          to="/start-deal"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Start a deal
        </Link>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-100 dark:bg-gray-800 text-center text-sm">
        © {new Date().getFullYear()} Dealcross. All rights reserved.
      </footer>
    </div>
  )
}
