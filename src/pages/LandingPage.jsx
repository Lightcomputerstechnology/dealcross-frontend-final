// src/pages/ShareTrading.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ShareTrading() {
  return (
    <main className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Buy &amp; Sell Company Shares</h1>
      <p className="mb-6">Trade company shares securely and efficiently.</p>
      <Link to="/deals" className="inline-block bg-blue-600 text-white px-6 py-2 rounded">
        Start trading
      </Link>
    </main>
  );
}
