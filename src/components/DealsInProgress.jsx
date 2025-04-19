// src/components/DealsInProgress.jsx
import React, { useEffect, useState } from 'react';

const dealItems = [
  { id: 1, title: 'iPhone 14 Pro Max Purchase', amount: '$1,199', country: 'USA' },
  { id: 2, title: 'Freelance UI/UX Design Contract', amount: '$450', country: 'Canada' },
  { id: 3, title: 'Used Toyota Corolla Deal', amount: '$4,200', country: 'Nigeria' },
  { id: 4, title: 'Web App Dev Escrow', amount: '$2,000', country: 'Germany' },
  { id: 5, title: 'Crypto Mentorship Package', amount: '$300', country: 'UK' },
  { id: 6, title: 'Real Estate Booking (Lagos)', amount: '$15,000', country: 'Nigeria' },
  { id: 7, title: 'Custom Cake Order – Birthday', amount: '$90', country: 'USA' },
  { id: 8, title: 'Fashion Clothing Bulk Order', amount: '$750', country: 'Ghana' },
  { id: 9, title: 'Digital Marketing Subscription', amount: '$520', country: 'South Africa' },
  { id: 10, title: 'Vehicle Shipping – Port to Home', amount: '$3,600', country: 'UAE' },
];

export default function DealsInProgress() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % dealItems.length);
    }, 5000); // 5 seconds per card
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-blue-900 text-white py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Deals in Progress</h2>
        <div className="relative h-40">
          {dealItems.map((deal, index) => (
            <div
              key={deal.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out 
                ${index === current ? 'opacity-100' : 'opacity-0'}
                flex items-center justify-center`}
            >
              <div className="w-full max-w-md bg-blue-800 rounded-xl shadow-lg p-6 border border-blue-500">
                <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                <p className="text-sm text-blue-100">Amount: <strong>{deal.amount}</strong></p>
                <p className="text-sm text-blue-100">Country: <strong>{deal.country}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
                          }
