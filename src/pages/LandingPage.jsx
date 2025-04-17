// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/dealcross-logo.png';

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 md:px-16 lg:px-32">
        {/* Logo */}
        <img
          src={Logo}
          alt="Dealcross logo"
          className="h-20 w-auto mb-8"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          Secure&nbsp;
          <span className="text-blue-600 dark:text-blue-400">
            Transactions
          </span>
          <br className="hidden sm:block" />
          with Escrow
        </h1>

        {/* Subhead */}
        <p className="mt-4 text-lg md:text-xl text-center max-w-xl text-gray-600 dark:text-gray-300">
          Trust, protect and save time with Dealcross escrow services.
        </p>

        {/* Call‑to‑Action */}
        <Link
          to="/start-deal"
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow"
        >
          Start a deal
        </Link>
      </section>

      {/* TODO: Add “How it works” grid here */}

    </div>
  );
}
