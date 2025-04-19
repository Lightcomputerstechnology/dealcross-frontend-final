import React, { useEffect, useRef, useState } from 'react';

const deals = [
  {
    title: 'iPhone 14 Pro',
    buyer: 'Sarah',
    description: 'Buyer from Lagos purchasing iPhone from a trusted seller in Abuja.'
  },
  {
    title: 'Web Design Service',
    buyer: 'Michael',
    description: 'Client from Canada hiring Nigerian developer via escrow.'
  },
  {
    title: 'Used Car Sale',
    buyer: 'Emily',
    description: 'Payment secured for a used car. Delivery in progress.'
  },
  {
    title: 'Business Investment',
    buyer: 'James',
    description: 'An investor funding a verified Nigerian tech startup.'
  },
  {
    title: 'Laptop Purchase',
    buyer: 'Joshua',
    description: 'Escrow holds funds for a MacBook purchase. Delivery pending.'
  },
  {
    title: 'Logo Design Deal',
    buyer: 'Sofia',
    description: 'Freelancer in Enugu creating logo for client in UK.'
  },
  {
    title: 'Clothing Wholesale',
    buyer: 'Amina',
    description: 'Bulk Ankara fabrics deal between Lagos and New York.'
  },
  {
    title: 'Crypto Exchange',
    buyer: 'Victor',
    description: 'Escrow secures $500 USDT for P2P trade in Port Harcourt.'
  },
  {
    title: 'CAC Business Registration',
    buyer: 'Jennifer',
    description: 'Client paying for fast CAC registration via Dealcross.'
  },
  {
    title: 'Real Estate Booking',
    buyer: 'Tunde',
    description: 'Verified land title secured with escrow in Asaba.'
  },
  {
    title: 'Furniture Order',
    buyer: 'Esther',
    description: 'Custom couch ordered from Abuja to be delivered to Lagos.'
  },
  {
    title: 'Affiliate Commission',
    buyer: 'Daniel',
    description: 'Affiliate commission payout secured and ready for release.'
  }
];

export default function DealsInProgress() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
    }, 4000); // 4 seconds

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Deals in Progress
      </h2>
      <div className="relative h-[240px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${deals.length * 100}%`
          }}
        >
          {deals.map((deal, index) => (
            <div
              key={index}
              className="w-full px-4 flex-shrink-0 flex justify-center items-center"
            >
              <div className="bg-gradient-to-br from-blue-600 to-yellow-400 text-white shadow-xl rounded-xl p-6 max-w-md w-full text-left">
                <h3 className="text-2xl font-semibold mb-2">{deal.title} - Buyer: {deal.buyer}</h3>
                <p className="text-sm text-white/90">{deal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
      }
