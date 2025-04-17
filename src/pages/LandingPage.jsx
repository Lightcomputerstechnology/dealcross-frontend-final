// src/pages/LandingPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/dealcross-logo.png'   // ← your transparent PNG

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* --- Header / Navbar --- */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
          <img src={Logo} alt="Dealcross logo" className="h-8 w-auto" />
          <nav className="space-x-4 text-sm">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/deals" className="hover:text-blue-400">Deals</Link>
            <Link to="/share-trading" className="hover:text-blue-400">Share Trading</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            <Link to="/login" className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded">Login</Link>
            <Link to="/signup" className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded">Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <img src={Logo} alt="Dealcross logo" className="mb-8 w-32 h-32" />
        <h1 className="text-4xl font-bold mb-4">
          Secure Transactions <span className="text-blue-600">with Escrow</span>
        </h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Trust, protect and save time with Dealcross escrow services.
        </p>
        <Link
          to="/share-trading"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Start a deal
        </Link>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-100 text-gray-600 py-6">
        <div className="max-w-4xl mx-auto text-center text-sm">
          © 2025 Dealcross. All rights reserved.
        </div>
      </footer>
    </div>
  )
          }
