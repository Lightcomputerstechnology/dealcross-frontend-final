// src/components/DealsInProgress.jsx
import React, { useState, useEffect } from 'react';

const deals = [
  {
    title: 'iPhone 14 Pro Purchase',
    amount: '$1,200',
    status: 'In Escrow',
  },
  {
    title: 'Helena paying for web dev',
    amount: '$4,200',
    status: 'Locked',
  },
  {
    title: 'Amazon Order Deal',
    amount: '$300',
    status: 'Pending',
  },
  {
    title: 'Design Contract - Bryan',
    amount: '$1,000',
    status: 'Secured',
  },
  {
    title: 'Crypto Exchange Deal',
    amount: '$5,000',
    status: 'Locked',
  },
  {
    title: 'Used Car Purchase',
    amount: '$6,800',
    status: 'In Progress',
  },
  {
    title: 'Furniture Delivery',
    amount: '$2,100',
    status: 'Completed',
  },
  {
    title: 'Freelance Video Edit',
    amount: '$400',
    status: 'In Escrow',
  },
  {
    title: 'School Payment Contract',
    amount: '$3,500',
    status: 'Active',
  },
  {
    title: 'Consulting Payment',
    amount: '$1,800',
    status: 'Escrowed',
  },
];

const DealsInProgress = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % deals.length);
    }, 7000); // 7 seconds
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
          <h3 className="text-xl font-semibold mb-2">{currentDeal.title}</h3>
          <p className="text-lg">
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
