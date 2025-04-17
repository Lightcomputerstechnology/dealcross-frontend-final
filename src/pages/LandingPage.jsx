// src/pages/LandingPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/dealcross-logo.png'

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 dark:bg-gray-800 text-center py-20 px-6">
        <img
          src={Logo}
          alt="Dealcross logo"
          className="mx-auto h-24 w-auto mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
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

      {/* …then the rest of your landing‑page sections (features, deals, CTA, contact, etc.) */}
      {/* I gave you the full code in my last message; just paste it in below this Hero block */}
    </>
  )
}
