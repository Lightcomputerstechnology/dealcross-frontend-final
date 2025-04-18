// src/pages/AboutPage.jsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">About Dealcross</h1>
        <p>
          Dealcross is a global financial platform built to ensure safe, transparent, and trustworthy
          transactions between individuals and businesses across borders. We help users exchange
          services, digital goods, and payments securely through our modern escrow system.
        </p>
        <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
        <p>
          Our mission is to protect users from online fraud while making digital payments and
          share trading seamless and accessible to everyone.
        </p>
        <h2 className="text-xl font-semibold mt-6">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Escrow-secured transactions</li>
          <li>Multi-currency wallet support (Card, Bank, BTC, USDT)</li>
          <li>Instant share trading (Crypto, Stocks, etc.)</li>
          <li>Investor dashboards and business pitch decks</li>
          <li>AI-powered fraud detection</li>
        </ul>
        <h2 className="text-xl font-semibold mt-6">Our Team</h2>
        <p>
          Dealcross is managed by a team of innovators and engineers passionate about fintech,
          security, and economic empowerment.
        </p>
        <p className="text-center text-sm text-gray-400 mt-10">Together, let’s build trust into every transaction.</p>
      </div>
    </div>
  );
}
