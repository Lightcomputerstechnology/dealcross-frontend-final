import React from 'react'
import { Link } from 'react-router-dom'

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-center p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to Dealcross Deals
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Start, track, and manage your escrow deals easily and securely.
      </p>

      <div className="space-x-4">
        <Link
          to="/start-deal"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Start a New Deal
        </Link>

        <Link
          to="/deal-tracker"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          Track Existing Deals
        </Link>
      </div>
    </div>
  )
}
