// src/pages/DealDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import DealChatRoom from '@/components/DealChatRoom';

export default function DealDetailsPage() {
  const { dealId } = useParams();

  return (
    <main className="max-w-4xl mx-auto py-10 px-6 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Deal #{dealId}</h1>

      {/* Deal Info (Simulated) */}
      <section className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-8 shadow">
        <h2 className="text-xl font-semibold mb-2">Escrow Deal Details</h2>
        <p className="mb-1"><strong>Item:</strong> Sample Item Title</p>
        <p className="mb-1"><strong>Status:</strong> In Progress</p>
        <p className="mb-1"><strong>Buyer:</strong> you@example.com</p>
        <p className="mb-1"><strong>Seller:</strong> seller@example.com</p>
      </section>

      {/* Live Chat Area */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Live Chat with Counterparty</h2>
        <DealChatRoom dealId={dealId} />
      </section>
    </main>
  );
}
