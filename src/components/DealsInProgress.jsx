// src/components/DealsInProgress.jsx
import React from 'react';

const mockDeals = [
  { title: 'Laptop Sale', buyer: 'Alica Bowen', seller: 'Joshua White', amount: '$800' },
  { title: 'Web Development', buyer: 'Kevin Singh', seller: 'Emma Carter', amount: '$1,500' },
  { title: 'Car Purchase', buyer: 'Victoria Shaw', seller: 'Brian Walsh', amount: '$12,000' },
];

export default function DealsInProgress() {
  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Deals in Progress</h2>
          <a href="/deals" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">View All</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockDeals.map((deal, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <h3 className="font-semibold text-lg mb-2">{deal.title}</h3>
              <p className="text-sm">Buyer: {deal.buyer}</p>
              <p className="text-sm">Seller: {deal.seller}</p>
              <p className="text-sm font-bold mt-2">Amount: {deal.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
              }
