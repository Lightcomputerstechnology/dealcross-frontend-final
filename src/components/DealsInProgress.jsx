// src/components/DealsInProgress.jsx
import React from 'react';

const dummyDeals = [
  { id: 1, title: 'iPhone 14 Pro - Buyer: Sarah' },
  { id: 2, title: 'Web Design Service - Seller: James' },
  { id: 3, title: 'Crypto Transfer - Buyer: Michael' },
  { id: 4, title: 'Used Toyota Camry - Seller: Linda' },
  { id: 5, title: 'Freelance Logo Project - Buyer: Anna' },
  { id: 6, title: 'Real Estate Payment - Buyer: Kelvin' },
];

const DealsInProgress = () => {
  return (
    <div className="overflow-hidden py-10 bg-white dark:bg-gray-950">
      <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-900 dark:text-white">
        Deals in Progress
      </h2>
      <div className="relative w-full h-36">
        <div
          className="flex gap-6 animate-scroll whitespace-nowrap px-4"
          style={{ animation: 'scroll 30s linear infinite' }}
        >
          {dummyDeals.map((deal) => (
            <div
              key={deal.id}
              className="min-w-[250px] h-28 flex items-center justify-center bg-blue-600 text-white rounded-lg shadow-lg text-lg font-semibold px-4 py-3"
            >
              {deal.title}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default DealsInProgress;
