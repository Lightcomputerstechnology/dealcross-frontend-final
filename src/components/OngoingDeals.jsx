// src/components/OngoingDeals.jsx
import React from 'react';

const deals = [
  {
    id: 1,
    title: 'Logo Design Project',
    amount: '$150',
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'E-commerce Website Setup',
    amount: '$500',
    status: 'Pending Delivery'
  },
  {
    id: 3,
    title: 'Digital Marketing Campaign',
    amount: '$300',
    status: 'Awaiting Payment'
  }
];

export default function OngoingDeals() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Deals in Progress
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow"
            >
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{deal.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Amount: {deal.amount}</p>
              <span className="inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                {deal.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
