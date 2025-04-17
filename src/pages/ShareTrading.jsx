// src/pages/ShareTrading.jsx
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const companies = [
  { symbol: 'AAPL', name: 'Apple', price: 172.50 },
  { symbol: 'TSLA', name: 'Tesla', price: 190.00 },
  { symbol: 'MSFT', name: 'Microsoft', price: 320.10 },
  // add more as desired
]

export default function ShareTradingPage() {
  const [selected, setSelected] = useState(companies[0])
  const [amount, setAmount] = useState('')
  const [estimated, setEstimated] = useState(0)

  // Recalculate estimated shares whenever amount or selected company changes
  useEffect(() => {
    const num = parseFloat(amount) / selected.price
    setEstimated(isNaN(num) ? 0 : num)
  }, [amount, selected])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Buy and Sell Company Shares
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Select Company
            </label>
            <select
              value={selected.symbol}
              onChange={e => {
                const comp = companies.find(c => c.symbol === e.target.value)
                setSelected(comp)
              }}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              {companies.map(c => (
                <option key={c.symbol} value={c.symbol}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              Current price per share:{' '}
              <span className="font-medium">${selected.price.toFixed(2)}</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Amount to invest (USD)
            </label>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Estimated shares:{' '}
              <span className="font-medium">{estimated.toFixed(4)}</span>
            </p>
          </div>

          <button
            type="button"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            Invest Now
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
          }
