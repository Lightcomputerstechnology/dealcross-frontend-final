import React, { useEffect, useState } from 'react';

const deals = [
  { title: 'John buying electronics from Sarah', amount: '$1,500', status: 'Ongoing' },
  { title: 'Emily purchasing fashion items from Chidi', amount: '$750', status: 'Secured' },
  { title: 'Ahmed paying for tech services from Clara', amount: '$1,200', status: 'Verified' },
  { title: 'David booking hotel via Kelvin', amount: '$2,000', status: 'In Escrow' },
  { title: 'Alicia paying for freelance logo design', amount: '$300', status: 'Pending' },
  { title: 'Musa funding vehicle purchase with Jake', amount: '$8,000', status: 'Processing' },
  { title: 'Helena paying for web dev project', amount: '$4,200', status: 'Locked' },
  { title: 'Prince buying land from Anita', amount: '$12,000', status: 'Ongoing' },
  { title: 'Francis making payment to contractor', amount: '$3,500', status: 'Under Review' },
  { title: 'Mark securing art purchase with Abiola', amount: '$980', status: 'Held' },
];

const DealsInProgress = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % deals.length);
    }, 6000); // 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Deals in Progress</h2>
      <div className="w-full h-36 relative">
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}
        >
          {deals.map((deal, index) => (
            <div
              key={index}
              className="min-w-full p-6 bg-blue-900 text-white rounded-lg shadow-lg mx-2 flex flex-col justify-center"
              style={{
                backgroundImage: "url('/src/assets/dealcross-logo.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '60%',
                backgroundBlendMode: 'soft-light',
              }}
            >
              <h3 className="text-lg font-semibold">{deal.title}</h3>
              <p className="text-sm mt-1">Amount: <strong>{deal.amount}</strong></p>
              <p className="text-sm">Status: {deal.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsInProgress;
