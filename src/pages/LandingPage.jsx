import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen px-6 pt-20 pb-10">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Secure Transactions with Escrow
        </h1>
        <p className="text-gray-300 mb-6">
          Trust, Protect, and Save Time with Dealcross Escrow Services
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/start-deal">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-medium">
              Start a deal
            </button>
          </Link>
          <Link to="/learn-more">
            <button className="border border-gray-400 hover:bg-white hover:text-black px-6 py-2 rounded-md font-medium">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 text-center mb-16">
        <div className="bg-gray-800 rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg mb-2">How It Works</h3>
          <p className="text-gray-400 text-sm">
            Simple and secure process from start to finish.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg mb-2">Trust Levels</h3>
          <p className="text-gray-400 text-sm">
            Build your reputation with verified business accounts.
          </p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow">
          <h3 className="font-semibold text-lg mb-2">Fast Payouts</h3>
          <p className="text-gray-400 text-sm">
            Receive your funds within 0-5 business days.
          </p>
        </div>
      </div>

      {/* Deals in Progress */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Deals in Progress</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h4 className="font-medium mb-1">Laptop Sale</h4>
            <p className="text-sm text-gray-400">Alice Bowen & Joshua White</p>
            <p className="mt-2 font-bold text-blue-400">$800</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h4 className="font-medium mb-1">Web Development</h4>
            <p className="text-sm text-gray-400">Kevin Singh & Emma Carter</p>
            <p className="mt-2 font-bold text-blue-400">$1,500</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h4 className="font-medium mb-1">Car Purchase</h4>
            <p className="text-sm text-gray-400">Victoria Shaw & Brian Walsh</p>
            <p className="mt-2 font-bold text-blue-400">$12,000</p>
          </div>
        </div>
      </div>

      {/* Share Trading CTA */}
      <div className="bg-blue-900 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Buy and Sell Company Shares</h2>
        <p className="text-gray-300 mb-4">
          Trade company shares securely and efficiently.
        </p>
        <Link to="/share-trading">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-medium">
            Start Trading
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
