// src/pages/DealsPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function DealsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 text-center">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Welcome to <span className="text-blue-600">Dealcross Deals</span>
      </h1>

      <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md">
        Start, track, and manage your escrow deals easily and securely.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/start-deal"
          className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm md:text-base"
        >
          Start a New Deal
        </Link>
        <Link
          to="/deal-tracker"
          className="w-full md:w-auto px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm md:text-base"
        >
          Track Existing Deals
        </Link>
      </div>
    </div>
  )
}
