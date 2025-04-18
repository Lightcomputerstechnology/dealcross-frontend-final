// src/components/DealsInProgress.jsx
import React from 'react';
import { Briefcase, ShieldCheck, Timer } from 'lucide-react';

const DealsInProgress = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Deals in Progress
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Real-time glimpse into the secure transactions happening on Dealcross.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-400">
              <Briefcase className="w-6 h-6" />
              <h4 className="text-lg font-semibold">Product Delivery</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              A seller in Lagos is shipping electronics to a buyer in Abuja. Escrow protects both parties.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-400">
              <Timer className="w-6 h-6" />
              <h4 className="text-lg font-semibold">Freelance Job</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              A client in Canada is working with a Nigerian web developer — funds held in escrow until delivery.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2 text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-6 h-6" />
              <h4 className="text-lg font-semibold">Vehicle Deal</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              A buyer has secured payment for a used car. Release pending delivery and inspection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsInProgress;
