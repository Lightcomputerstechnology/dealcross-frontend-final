import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c1e3c] to-[#08162e] text-white px-4 py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Welcome to <span className="text-blue-400">Dealcross</span>
      </h1>
      <p className="text-center max-w-xl text-base md:text-lg mb-8">
        Secure your online transactions with our powerful escrow platform. Buy, sell, and invest with full protection.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm text-center">
          Get Started
        </Link>
        <Link to="/learn-more" className="border border-white hover:bg-white hover:text-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-sm text-center">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
