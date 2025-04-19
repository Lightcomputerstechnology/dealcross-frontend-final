import React from 'react';

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By accessing and using Dealcross, you agree to be bound by the terms outlined below.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>All deals must comply with local laws and international transaction standards.</li>
        <li>We reserve the right to suspend any user for fraud or suspicious activity.</li>
        <li>Escrow releases will only be processed when both parties confirm delivery.</li>
        <li>Dealcross is not liable for external issues beyond our platform’s control.</li>
      </ul>
    </main>
  );
}
