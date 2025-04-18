// src/pages/LandingPage.jsx
import React from 'react';
import HowItWorks from '@/components/HowItWorks';
import TrustLevels from '@/components/TrustLevels';
import FastPayouts from '@/components/FastPayouts';
import DealsInProgress from '@/components/DealsInProgress';
import StartTradingCTA from '@/components/StartTradingCTA';
import ContactSection from '@/components/ContactSection';
import Logo from '@/assets/dealcross-logo.png';

export default function LandingPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section
        className="relative text-center py-20 px-4 bg-white dark:bg-gray-950 overflow-hidden"
      >
        {/* Background Logo */}
        <div
          className="absolute inset-0 flex justify-center items-center z-0 opacity-10"
          style={{
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '140px',
          }}
        ></div>

        {/* Main Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Secure Transactions with Dealcross
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Trade safely and confidently with our global escrow platform.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          <HowItWorks />
          <TrustLevels />
          <FastPayouts />
        </div>
      </section>

      {/* Deals in Progress Section */}
      <section className="py-12">
        <DealsInProgress />
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <StartTradingCTA />
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <ContactSection />
      </section>
    </main>
  );
      }
