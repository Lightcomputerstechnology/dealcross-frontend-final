// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/dealcross-logo.png';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <img src={Logo} alt="Dealcross logo" className="w-32 h-32 mb-6" />
      <h1 className="text-3xl font-bold text-center mb-4">
        Secure Transactions <br /> with Escrow
      </h1>
      <p className="text-center mb-6">
        Trust, protect and save time with Dealcross escrow services.
      </p>
      <Link
        to="/share-trading"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Start a deal
      </Link>
    </main>
  );
}
