// src/components/DealsInProgress.jsx
import React, { useEffect, useState } from 'react';

const mockDeals = [
  { id: 1, title: 'Buying iPhone 14 Pro Max', type: 'Product Escrow', amount: '$1,100' },
  { id: 2, title: 'Freelance UI Design Payment', type: 'Service Escrow', amount: '$400' },
  { id: 3, title: 'Vehicle Purchase Deal', type: 'Vehicle Escrow', amount: '$8,000' },
  { id: 4, title: 'Crypto Swap Deal', type: 'Digital Escrow', amount: '$5,500' },
  { id: 5, title: 'Land Purchase Agreement', type: 'Real Estate Escrow', amount: '$12,000' },
  { id: 6, title: 'Facebook Page Transfer', type: 'Social Media Escrow', amount: '$250' },
  { id: 7, title: 'Website Sale Deal', type: 'Domain/Website', amount: '$3,000' },
  { id: 8, title: 'Used Laptop Transaction', type: 'Product Escrow', amount: '$850' },
  { id: 9, title: 'Digital Marketing Services', type: 'Freelance Escrow', amount: '$700' },
  { id: 10, title: 'Furniture Delivery Payment', type: 'Logistics Escrow', amount: '$1,450' },
];

export default function DealsInProgress() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('in');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection('out');
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % mockDeals.length);
        setDirection('in');
      }, 1000); // match exit animation
    }, 10000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative max-w-4xl mx-auto h-52 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {mockDeals.map((deal, i) => (
          <div
            key={deal.id}
            className={`absolute w-full px-6 py-8 text-white rounded-2xl shadow-lg transition-all duration-1000 transform 
              ${i === index ?
                (direction === 'in' ? 'translate-x-0 opacity-100 z-20' : '-translate-x-full opacity-0 z-10') :
                'translate-x-full opacity-0 z-0'}
              bg-gradient-to-br from-blue-900 to-blue-600`}
          >
            <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
            <p className="text-sm text-gray-200">{deal.type}</p>
            <p className="text-lg font-semibold mt-2">Amount: {deal.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
  }
   
