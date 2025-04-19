// src/components/DealsInProgress.jsx
import React from 'react';

const mockDeals = [
  { id: 1, title: 'MacBook Pro Purchase', buyer: 'Alice', seller: 'TechZone', amount: '$2,000' },
  { id: 2, title: 'House Painting Contract', buyer: 'John', seller: 'ColorPlus', amount: '$750' },
  { id: 3, title: 'Used Toyota Camry', buyer: 'Chris', seller: 'AutoMart', amount: '$8,500' },
  { id: 4, title: 'Crypto Asset Sale', buyer: 'Grace', seller: 'BlockNet', amount: '$4,200' },
];

const DealsInProgress = () => {
  return (
    <div className="overflow-hidden py-10 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Deals in Progress
        </h2>

        <div className="flex space-x-6 animate-marquee whitespace-nowrap">
          {mockDeals.map((deal) => (
            <div
              key={deal.id}
              className="min-w-[280px] bg-blue-100 dark:bg-gray-800 rounded-xl shadow p-4 text-sm text-left text-gray-800 dark:text-white"
            >
              <h3 className="font-semibold text-base mb-1">{deal.title}</h3>
              <p>Buyer: {deal.buyer}</p>
              <p>Seller: {deal.seller}</p>
              <p className="font-bold mt-2">Amount: {deal.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsInProgress;
