import React from 'react';
import HowItWorks from '../components/HowItWorks';
import TrustLevels from '../components/TrustLevels';
import FastPayouts from '../components/FastPayouts';
import DealsInProgress from '../components/DealsInProgress';
import StartTradingCTA from '../components/StartTradingCTA';

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 md:px-8 py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Dealcross</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This is a safe test page to confirm rendering works.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HowItWorks />
        <TrustLevels />
        <FastPayouts />
      </section>

      {/* Deals In Progress */}
      <section>
        <DealsInProgress />
      </section>

      {/* CTA */}
      <section>
        <StartTradingCTA />
      </section>
    </div>
  );
}
