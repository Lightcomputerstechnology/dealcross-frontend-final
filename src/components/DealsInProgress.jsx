// src/components/DealsInProgress.jsx
import React, { useEffect, useState } from 'react';

const deals = [
  { title: 'iPhone 14 Pro Purchase', buyer: 'Sarah', amount: '$1,200', status: 'Locked' },
  { title: 'Helena paying for web dev', buyer: 'Helena', amount: '$4,200', status: 'Locked' },
  { title: 'House Rent in Abuja', buyer: 'Emeka', amount: '$800', status: 'Locked' },
  { title: 'Bitcoin Trade', buyer: 'Alex', amount: '$1,500', status: 'Locked' },
  { title: 'Delivery from Lagos to Ghana', buyer: 'Maya', amount: '$300', status: 'Locked' },
  { title: 'Tuition Payment', buyer: 'Chisom', amount: '$2,000', status: 'Locked' },
  { title: 'Laptop Sales', buyer: 'Linda', amount: '$1,050', status: 'Locked' },
  { title: 'Used Car Deal', buyer: 'Victor', amount: '$5,300', status: 'Locked' },
  { title: 'SEO & Ads Job', buyer: 'Nancy', amount: '$700', status: 'Locked' },
  { title: 'Graphic Design Work', buyer: 'Hassan', amount: '$450', status: 'Locked' },
];

export default function DealsInProgress() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-950 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Deals in Progress
        </h2>
        <div className="relative h-48">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              display: 'flex',
              width: `${deals.length * 100}%`,
            }}
          >
            {deals.map((deal, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 px-4"
                style={{ flexBasis: '100%' }}
              >
                <div className="bg-primary-700 text-white p-6 rounded-xl shadow-md h-full flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold mb-2">{deal.title}</h3>
                  <p className="text-sm">Buyer: {deal.buyer}</p>
                  <p className="text-sm">Amount: <strong>{deal.amount}</strong></p>
                  <p className="text-sm">Status: {deal.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
        }
