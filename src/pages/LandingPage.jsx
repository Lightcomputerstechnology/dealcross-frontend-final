import React from 'react'; import { Link } from 'react-router-dom'; import SEOHead from '@/components/SEOHead'; import HowItWorks from '@/components/HowItWorks'; import TrustLevels from '@/components/TrustLevels'; import FastPayouts from '@/components/FastPayouts'; import DealsInProgress from '@/components/DealsInProgress'; import StartTradingCTA from '@/components/StartTradingCTA'; import FAQPreview from '@/components/FAQPreview'; import ContactSection from '@/components/ContactSection'; import BlogPreviewList from '@/components/BlogPreviewList';

export default function LandingPage() { return ( <> <SEOHead
title="Dealcross - Escrow & Trading Platform"
description="Start secure escrow deals, trade shares, and manage wallet transactions on Dealcross."
keywords="escrow, secure deals, trading, wallet, Dealcross, Bitcoin, USDT"
/>

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
        <Link
          to="/signup"
          className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
        <Link
          to="/learn-more"
          className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
        >
          Learn More
        </Link>
      </div>
    </section>

    {/* Core Features */}
    <DealsInProgress />
    <HowItWorks />
    <TrustLevels />
    <FastPayouts />
    <StartTradingCTA />

    {/* Fee Transparency Section */}
    <section className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Transparent Fees</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Our fee structure is simple and fair. Here’s what you can expect:
      </p>
      <div className="grid sm:grid-cols-2 gap-4 text-left">
        <div>
          <h4 className="font-semibold text-blue-600">Funding Fees</h4>
          <p className="text-sm">2% for Basic users, 1.5% for Pro users.</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-600">Escrow Fees</h4>
          <p className="text-sm">3% for Basic users, 2% for Pro users.</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-600">Share Buyer Fees</h4>
          <p className="text-sm">2% for Basic users, 1.5% for Pro users.</p>
        </div>
        <div>
          <h4 className="font-semibold text-blue-600">Share Seller Fees</h4>
          <p className="text-sm">1% after $1,000 sales (Basic), 0.75% (Pro).</p>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">What Our Users Say</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <p className="italic">"Dealcross made my transactions stress-free!"</p>
          <h4 className="mt-4 font-semibold text-blue-600">- Sarah, Freelancer</h4>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          <p className="italic">"The share trading process is transparent and fair."</p>
          <h4 className="mt-4 font-semibold text-blue-600">- John, Investor</h4>
        </div>
      </div>
    </section>

    {/* Platform Metrics */}
    <section className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Trusted by Users Worldwide</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">1,200+</h3>
          <p>Deals Secured</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">500+</h3>
          <p>Happy Users</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">98%</h3>
          <p>Success Rate</p>
        </div>
      </div>
    </section>

    {/* Referral CTA */}
    <div className="text-center mt-12">
      <Link
        to="/referral"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Join Our Referral Program →
      </Link>
    </div>

    {/* FAQ Section */}
    <FAQPreview />

    {/* Blog Preview */}
    <BlogPreviewList />
    <div className="text-center mt-4">
      <Link to="/blog" className="text-blue-600 hover:underline">
        Read All Blog Posts →
      </Link>
    </div>

    {/* Explore More */}
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Explore More</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        <Link
          to="/referral"
          className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">Referral Program</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Earn money by inviting others to Dealcross.
          </p>
        </Link>
        <Link
          to="/faq"
          className="bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Find quick answers to common user concerns.
          </p>
        </Link>
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
</>

); }

  
