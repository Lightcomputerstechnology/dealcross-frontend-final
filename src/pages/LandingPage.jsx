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
    <main className="relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* Hero Section with Watermark */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
          <img
            src={Logo}
            alt="Dealcross Logo Watermark"
            className="w-[80%] max-w-2xl opacity-10 dark:opacity-10"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 relative z-10">
          Secure Transactions with Dealcross
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 relative z-10">
          Trade safely and confidently with our global escrow platform.
        </p>
      </section>

      {/* Deals in Progress Section - directly under hero */}
      <section className="py-12 relative z-10">
        <DealsInProgress />
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          <HowItWorks />
          <TrustLevels />
          <FastPayouts />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 relative z-10">
        <StartTradingCTA />
      </section>

      {/* Contact Section */}
      <section className="py-12 relative z-10">
        <ContactSection />
      </section>
    </main>
  );
          }
