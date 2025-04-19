// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
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

      {/* Core Feature Sections */}
      <DealsInProgress />
      <HowItWorks />
      <TrustLevels />
      <FastPayouts />
      <StartTradingCTA />

      {/* Referral CTA Button */}
      <div className="text-center mt-12">
        <Link
          to="/referral"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Join Our Referral Program →
        </Link>
      </div>

      {/* FAQ and Blog */}
      <FAQPreview />
      <BlogPreviewList />

      {/* Explore More Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Explore More</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Referral */}
          <Link
            to="/referral"
            className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">Referral Program</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Earn money by inviting others to Dealcross.
            </p>
          </Link>

          {/* FAQ */}
          <Link
            to="/faq"
            className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Find quick answers to common user concerns.
            </p>
          </Link>

          {/* Blog */}
          <Link
            to="/blog"
            className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">Our Blog</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Read tips, product updates, and industry insights.
            </p>
          </Link>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </main>
  );
      }
