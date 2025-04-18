// src/pages/Deals.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Deals() {
  return (
    <main className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Ongoing Deals</h1>
      <p className="mb-6">Here you’ll see all your current escrow transactions.</p>
      {/* Replace the list below with your real deal cards */}
      <ul className="space-y-4">
        <li className="border p-4 rounded-lg">
          <h2 className="font-semibold">Web Development</h2>
          <p>$1,200 • with Emma Carter</p>
        </li>
        <li className="border p-4 rounded-lg">
          <h2 className="font-semibold">Electronics Sale</h2>
          <p>$750 • with Aiex Johnson</p>
        </li>
      </ul>
      <Link
        to="/share-trading"
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-2 rounded"
      >
        Go Trade Shares
      </Link>
    </main>
  );
}
