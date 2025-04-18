// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/dealcross-logo.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        <img src={Logo} alt="Dealcross" className="w-24 h-24 mb-6" />
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Secure Transactions <span className="text-blue-500">with Escrow</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
          Trust, protect and save time with Dealcross escrow services. Fast, transparent, and reliable.
        </p>
        <Link
          to="/deals"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Start a Deal
        </Link>
      </main>
    </div>
  );
}
