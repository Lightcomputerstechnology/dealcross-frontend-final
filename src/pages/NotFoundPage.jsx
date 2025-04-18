// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">404 – Page Not Found</h1>
      <p className="mb-6">Sorry, we couldn’t locate that page.</p>
      <Link to="/" className="text-blue-600 underline">
        Back to home
      </Link>
    </main>
  );
}
