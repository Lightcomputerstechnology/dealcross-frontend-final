// src/components/DealsInProgress.jsx
import React from 'react';
import { Briefcase, ShieldCheck, Timer } from 'lucide-react';

const deals = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: 'Product Delivery',
    description: 'A seller in Lagos is shipping electronics to a buyer in Abuja. Escrow protects both parties.'
  },
  {
    icon: <Timer className="w-8 h-8 text-yellow-500" />,
    title: 'Freelance Job',
    description: 'A client in Canada is working with a Nigerian web developer — funds held in escrow until delivery.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: 'Vehicle Deal',
    description: 'A buyer has secured payment for a used car. Release pending delivery and inspection.'
  },
];

export default function DealsInProgress() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Deals in Progress</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Real-time glimpse into trusted transactions happening via Dealcross Escrow.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {deal.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{deal.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{deal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
      }
