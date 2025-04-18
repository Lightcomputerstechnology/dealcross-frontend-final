import React from 'react';
import { Link } from 'react-router-dom';

export default function StartTradingCTA() {
  return (
    <section className="bg-blue-600 text-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="mb-6 text-lg">
          Start a secure deal today and experience peace of mind in every transaction.
        </p>
        <Link
          to="/start-deal"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Start Trading
        </Link>
      </div>
    </section>
  );
}
