// src/pages/LandingPage.jsx
import React from 'react';
import HowItWorks from '@/components/HowItWorks';
import TrustLevels from '@/components/TrustLevels';
import FastPayouts from '@/components/FastPayouts';
import DealsInProgress from '@/components/DealsInProgress';
import StartTradingCTA from '@/components/StartTradingCTA';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection'; // <- import FAQ

export default function LandingPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Secure Transactions with Dealcross
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Trade safely and confidently with our global escrow platform.
        </p>
      </section>

      {/* Deals in Progress Section - just under Hero */}
      <section className="py-12">
        <DealsInProgress />
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          <HowItWorks />
          <TrustLevels />
          <FastPayouts />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <StartTradingCTA />
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <ContactSection />
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <FAQSection />
      </section>
    </main>
  );
}
