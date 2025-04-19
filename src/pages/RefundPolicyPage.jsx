import React from 'react';

export default function RefundPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <p className="mb-4">
        Refunds are processed in accordance with our escrow and dispute policies.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Refunds are granted when disputes are resolved in favor of the buyer.</li>
        <li>All refund decisions are final and based on verified evidence.</li>
        <li>Refunds are returned to your Dealcross wallet balance or original payment method.</li>
        <li>Timeframe for refund processing is typically 1–5 business days.</li>
      </ul>
    </main>
  );
}
