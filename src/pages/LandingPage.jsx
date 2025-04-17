// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/dealcross-logo.png';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-12 bg-white dark:bg-gray-900">
      {/* Logo */}
      <img src={Logo} alt="Dealcross Logo" className="w-24 h-24 mb-6" />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        Secure Transactions <br />
        <span className="text-blue-600">with Escrow</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg max-w-md">
        Trust, protect and save time with Dealcross escrow services.
      </p>

      {/* Call to action */}
      <Link
        to="/pair-deal"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
      >
        Start a deal
      </Link>
    </div>
  );
};

export default LandingPage;
