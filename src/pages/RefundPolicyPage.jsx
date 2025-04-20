import React from 'react';
import { Helmet } from 'react-helmet';

export default function RefundPolicy() {
  return (
    <>
      <Helmet>
        <title>Refund Policy - Dealcross</title>
        <meta name="description" content="Understand our policy regarding refunds and cancellations on Dealcross." />
        <meta name="keywords" content="refund, cancellation, policy, dealcross" />
        <meta name="author" content="Dealcross Team" />
      </Helmet>

      <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Refund Eligibility</h2>
            <p>
              Refunds are issued only under specific conditions. These include canceled transactions,
              resolution decisions in your favor, or technical payment failures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Processing Time</h2>
            <p>
              Approved refunds are processed within 7–14 business days, depending on the original
              payment method and financial institution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Non-refundable Transactions</h2>
            <p>
              Once funds have been released to a seller or marked as completed, the transaction
              becomes non-refundable unless fraud is proven.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Dispute Required</h2>
            <p>
              To request a refund, users must open a dispute within the transaction window. The
              support team will review the case before approving any refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Contact Support</h2>
            <p>
              For refund inquiries, contact our support team through your dashboard or by emailing
              support@dealcross.com.
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-10">
            Last updated: April 2025
          </p>
        </div>
      </main>
    </>
  );
      }
