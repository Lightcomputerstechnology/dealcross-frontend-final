// src/pages/AboutPage.jsx import React from 'react'; import { Helmet } from 'react-helmet';

export default function AboutPage() { return ( <> <Helmet> <title>About Dealcross</title> <meta name="description" content="Learn about Dealcross, our mission, team, and the services we provide to protect online transactions and support global trade." /> <meta name="keywords" content="about dealcross, escrow service, team, mission, fintech" /> <meta name="author" content="Dealcross Team" /> <meta property="og:title" content="About Dealcross" /> <meta property="og:description" content="Discover the story behind Dealcross and how we build trust into every transaction." /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://dealcross.com/about" /> <meta name="twitter:card" content="summary" /> <meta name="twitter:title" content="About Dealcross" /> <meta name="twitter:description" content="Global escrow service provider protecting users from fraud and powering share trading." /> </Helmet>

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

      <p className="text-center text-sm text-gray-400 mt-10">
        Together, let’s build trust into every transaction.
      </p>
    </div>
  </div>
</>

); }

