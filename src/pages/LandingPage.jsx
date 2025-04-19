// src/pages/LandingPage.jsx
import React from 'react';
import HowItWorks from '@/components/HowItWorks';
import TrustLevels from '@/components/TrustLevels';
import FastPayouts from '@/components/FastPayouts';
import DealsInProgress from '@/components/DealsInProgress';
import StartTradingCTA from '@/components/StartTradingCTA';
import BlogPreviewList from '@/components/BlogPreviewList';
import FAQPreview from '@/components/FAQPreview';
import ContactSection from '@/components/ContactSection';

export default function LandingPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Secure Transactions with Dealcross
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Escrow-powered payments, share trading, and digital security all in one place.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/signup"
            className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Feature Sections */}
      <DealsInProgress />
      <HowItWorks />
      <TrustLevels />
      <FastPayouts />
      <StartTradingCTA />
      <FAQPreview />
      <BlogPreviewList />
      <ContactSection />
    </main>
  );
}
