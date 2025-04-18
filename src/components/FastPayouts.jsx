// import React from 'react';
import { DollarSign } from 'lucide-react';

const FastPayouts = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full">
          <DollarSign className="text-green-600 dark:text-green-300 h-6 w-6" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Payouts</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Receive your funds within 0-5 business days.
      </p>
    </div>
  );
};

export default FastPayouts;
