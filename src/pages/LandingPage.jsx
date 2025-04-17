// src/pages/LandingPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/dealcross-logo.png'

export default function LandingPage() {
  return (
    <>
      {/* ===== Header ===== */}
      <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Dealcross Logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold">Dealcross</span>
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/deals" className="hover:text-blue-600">Deals</Link>
            <Link to="/share-trading" className="hover:text-blue-600">Share Trading</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="bg-gray-50 dark:bg-gray-800 text-center py-20 px-6">
        <img
          src={Logo}
          alt="Dealcross logo"
          className="mx-auto h-24 w-auto mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Secure&nbsp;
          <span className="text-blue-600 dark:text-blue-400">
            Transactions
          </span>
          <br className="hidden sm:block" />
          with Escrow
        </h1>
        <p className="max-w-xl mx-auto text-lg mb-8 text-gray-600 dark:text-gray-300">
          Trust, protect and save time with Dealcross escrow services.
        </p>
        <Link
          to="/start-deal"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow"
        >
          Start a deal
        </Link>
      </section>

      {/* ===== Features ===== */}
      <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">How It Works</h3>
            <p>Simple and secure process from start to finish.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Trust Levels</h3>
            <p>Build your reputation with verified business accounts.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Fast Payouts</h3>
            <p>Receive your funds within business days.</p>
          </div>
        </div>
      </section>

      {/* ===== Deals in Progress ===== */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Deals in Progress</h2>
            <Link to="/deals" className="text-blue-600 hover:underline">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Example cards */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-semibold">Laptop Sale</h3>
              <p className="text-sm text-gray-500">
                Alica Bowen / Joshua White
              </p>
              <p className="mt-2 font-bold">$800</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-semibold">Web Development</h3>
              <p className="text-sm text-gray-500">
                Kevin Singh / Emma Carter
              </p>
              <p className="mt-2 font-bold">$1,500</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h3 className="font-semibold">Car Purchase</h3>
              <p className="text-sm text-gray-500">
                Victoria Shaw / Brian Walsh
              </p>
              <p className="mt-2 font-bold">$12,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Secondary CTA ===== */}
      <section className="py-16 bg-blue-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Buy and Sell Company Shares
        </h2>
        <p className="max-w-lg mx-auto mb-8">
          Trade company shares securely and efficiently.
        </p>
        <Link
          to="/share-trading"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow"
        >
          Start trading
        </Link>
      </section>

      {/* ===== Contact ===== */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your message…"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Send message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-6">
        <div className="max-w-6xl mx-auto text-center px-6">
          © {new Date().getFullYear()} Dealcross. All rights reserved.
        </div>
      </footer>
    </>
  )
                  }
