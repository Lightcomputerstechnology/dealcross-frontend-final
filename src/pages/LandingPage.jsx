// src/pages/LandingPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/dealcross-logo.png'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Dealcross" className="h-8" />
        </Link>
        <nav className="space-x-4 hidden md:block">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/deals" className="hover:underline">Deals</Link>
          <Link to="/share-trading" className="hover:underline">Share Trading</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <img src={Logo} alt="Dealcross" className="w-24 h-24 mb-6" />
        <h1 className="text-3xl font-bold">
          Secure Transactions <span className="text-blue-500">with Escrow</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Trust, protect and save time with Dealcross escrow services.
        </p>
        <Link
          to="/deals"
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded"
        >
          Start a deal
        </Link>
      </main>
    </div>
  )
}
