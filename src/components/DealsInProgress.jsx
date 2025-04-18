// src/components/DealsInProgress.jsx
import React from 'react';

const sampleDeals = [
  {
    title: 'Laptop Sale',
    buyers: ['Alica Bowen', 'Joshua White'],
    amount: '$800',
  },
  {
    title: 'Web Development',
    buyers: ['Kevin Singh', 'Emma Carter'],
    amount: '$1,500',
  },
  {
    title: 'Car Purchase',
    buyers: ['Victoria Shaw', 'Brian Walsh'],
    amount: '$12,000',
  },
];

export default function DealsInProgress() {
  return (
    <section className="bg-white dark:bg-gray-900 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Deals in Progress</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sampleDeals.map((deal, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-5 shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{deal.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{deal.buyers.join(' & ')}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mt-1">{deal.amount}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-right">
          <a
            href="/deals"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
