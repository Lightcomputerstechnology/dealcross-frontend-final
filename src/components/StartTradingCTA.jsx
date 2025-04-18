// src/components/StartTradingCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StartTradingCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6 text-center rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Experience Safe Digital Deals?
      </h2>
      <p className="text-md md:text-lg mb-6">
        Join Dealcross and take control of your online transactions with confidence.
      </p>
      <Link
        to="/signup"
        className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
      >
        Get Started
      </Link>
    </section>
  );
};

export default StartTradingCTA;

