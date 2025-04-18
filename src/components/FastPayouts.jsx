// src/components/FastPayouts.jsx
import React from 'react';
import { Clock, DollarSign, Zap } from 'lucide-react';

const payouts = [
  {
    icon: <Clock className="h-8 w-8 text-green-600" />,
    title: 'Instant Release',
    description: 'Funds are released immediately after both parties approve.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-green-600" />,
    title: 'Multiple Currencies',
    description: 'Withdraw earnings in your preferred currency including crypto.',
  },
  {
    icon: <Zap className="h-8 w-8 text-green-600" />,
    title: 'Zero Delays',
    description: 'We process payouts instantly, 24/7 with automated security.',
  },
];

export default function FastPayouts() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Fast Payouts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {payouts.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md text-center"
            >
              <div className="flex items-center justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
