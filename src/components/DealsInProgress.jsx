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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex(prev => (prev + 1) % deals.length);
    }, 7000); // 7 seconds

    return () => clearInterval(slide);
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-6">Deals in Progress</h2>
        <div className="overflow-hidden relative h-48">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)`, width: `${deals.length * 100}%` }}
          >
            {deals.map((deal, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 bg-[#002366] text-white rounded-xl p-6 shadow-xl mx-auto"
              >
                <h3 className="text-lg font-semibold">{deal.title}</h3>
                <p className="mt-2">Amount: <strong>{deal.amount}</strong></p>
                <p>Status: {deal.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsInProgress;
