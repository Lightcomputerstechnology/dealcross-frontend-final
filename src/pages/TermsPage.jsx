// // File: src/pages/TermsPage.jsx import React from 'react'; import { Helmet } from 'react-helmet';

export default function TermsPage() { return ( <> <Helmet> <title>Terms of Service - Dealcross</title> <meta name="description" content="Read the full terms and conditions for using the Dealcross platform." /> <meta name="keywords" content="terms, conditions, agreement, policy, dealcross" /> <meta name="author" content="Dealcross Team" /> <meta property="og:title" content="Dealcross Terms of Service" /> <meta property="og:description" content="Understand your rights and responsibilities when using the Dealcross platform." /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://dealcross.com/terms" /> <meta name="twitter:card" content="summary" /> <meta name="twitter:title" content="Terms of Service - Dealcross" /> <meta name="twitter:description" content="Review Dealcross usage terms and platform policies." /> </Helmet>

<main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing and using Dealcross, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you must not use our platform.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">2. Account Responsibility</h2>
        <p>
          Users are responsible for maintaining the confidentiality of their account information and are liable for all activities under their account.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">3. Platform Usage</h2>
        <p>
          You agree not to misuse the platform for any illegal or unauthorized purpose, including fraud or money laundering.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">4. Payment & Fees</h2>
        <p>
          Dealcross may charge fees for certain transactions. These will be clearly communicated before execution.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Dispute Resolution</h2>
        <p>
          In case of a dispute between parties, Dealcross offers a built-in resolution process. Our team reserves the right to make final decisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the platform constitutes your acceptance of the new terms.
        </p>
      </section>

      <p className="text-sm text-gray-400 mt-10">
        Last updated: April 2025
      </p>
    </div>
  </main>
</>

); }

