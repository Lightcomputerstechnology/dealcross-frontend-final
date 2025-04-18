import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/dealcross-logo.png';
import TrustLevels from '../components/TrustLevels';
import FastPayouts from '../components/FastPayouts';
import HowItWorks from '../components/HowItWorks';
import DealsInProgress from '../components/DealsInProgress';
import StartTradingCTA from '../components/StartTradingCTA';
export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300">
      {/* Header */}
      <header className="w-full p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Dealcross" className="h-10 w-auto" />
            <span className="text-xl font-bold">Dealcross</span>
          </Link>
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/deals" className="hover:text-blue-500">Deals</Link>
            <Link to="/share-trading" className="hover:text-blue-500">Share Trading</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        <img src={Logo} alt="Dealcross" className="w-24 h-24 mb-6" />
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Secure Transactions <span className="text-blue-500">with Escrow</span>
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
          Trust, protect and save time with Dealcross escrow services. Fast, transparent, and reliable.
        </p>
        <Link
          to="/deals"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Start a Deal
        </Link>
      </main>

      {/* New Sections */}
      <TrustLevels />
      <FastPayouts />
      <DealsInProgress />
      <StartTradingCTA />
    </div>
  );
          }
