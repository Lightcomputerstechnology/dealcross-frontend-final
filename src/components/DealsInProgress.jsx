// src/components/DealsInProgress.jsx
import React, { useState, useEffect } from 'react';

const deals = [
  {
    title: 'Bryan (Buyer) ↔ Helena (Seller)',
    description: 'Payment for full-stack web development project.',
    amount: '$4,200',
    status: 'Locked • California, USA',
  },
  {
    title: 'James ↔ Sarah',
    description: 'Purchase of iPhone 14 Pro (New).',
    amount: '$1,200',
    status: 'In Escrow • Lagos, Nigeria',
  },
  {
    title: 'Linda ↔ Amazon Agent',
    description: 'Order placement for home electronics.',
    amount: '$300',
    status: 'Pending • Florida, USA',
  },
  {
    title: 'Michael ↔ Creative Studio',
    description: 'Logo + UI/UX design contract.',
    amount: '$1,000',
    status: 'Secured • Nairobi, Kenya',
  },
  {
    title: 'Ethan ↔ CryptoVendor',
    description: 'USDT-to-BTC exchange with 24h release.',
    amount: '$5,000',
    status: 'Locked • Online Deal',
  },
  {
    title: 'Jackson ↔ AutoMart',
    description: 'Used Toyota Camry (2016) deal.',
    amount: '$6,800',
    status: 'In Progress • Abuja, Nigeria',
  },
  {
    title: 'Martha ↔ Woodify Co.',
    description: 'Custom-made furniture set delivery.',
    amount: '$2,100',
    status: 'Completed • Accra, Ghana',
  },
  {
    title: 'Kevin ↔ PixelEdit',
    description: 'Freelance video editing for ad campaign.',
    amount: '$400',
    status: 'In Escrow • Remote',
  },
  {
    title: 'Olivia ↔ Greenfield School',
    description: 'Child’s school fee (Term 2).',
    amount: '$3,500',
    status: 'Active • Johannesburg, SA',
  },
  {
    title: 'Sandra ↔ Coach Williams',
    description: 'Consulting retainer (Business Coaching).',
    amount: '$1,800',
    status: 'Escrowed • London, UK',
  },
];

const DealsInProgress = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % deals.length);
    }, 7000); // Rotate every 7 seconds
    return () => clearInterval(interval);
  }, []);

  const currentDeal = deals[currentIndex];

  return (
    <section className="py-12 bg-white dark:bg-gray-950 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Deals in Progress
      </h2>

      <div className="max-w-md mx-auto">
        <div
          key={currentIndex}
          className="bg-blue-900 text-white rounded-2xl shadow-xl p-6 animate-[slideInFromRight_1s_ease-out]"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-1">{currentDeal.title}</h3>
          <p className="text-sm sm:text-base mb-2">{currentDeal.description}</p>
          <p className="text-sm">
            <strong>Amount:</strong> {currentDeal.amount}
          </p>
          <p className="text-sm">
            <strong>Status:</strong> {currentDeal.status}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealsInProgress;
