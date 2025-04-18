// src/pages/ShareTrading.jsx
import React from 'react'

export default function ShareTrading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Investment
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Buy and sell company shares directly through the platform.
        </p>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Buy Shares
          </h2>

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Horizon Industries</p>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span>Price per share:</span>
              <span className="font-medium">$50.00</span>
            </div>
            <div className="flex justify-between text-gray-700 dark:text-gray-200">
              <span>Available:</span>
              <span className="font-medium">200</span>
            </div>
          </div>
        </div>

        <button
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
