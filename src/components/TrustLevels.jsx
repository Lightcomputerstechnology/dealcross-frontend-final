// src/components/TrustLevels.jsx
import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function TrustLevels() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
          <ShieldCheck className="text-blue-600 dark:text-blue-300 w-6 h-6" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Trust Levels</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Build your reputation by completing secure deals with verified users and earn higher trust ratings.
      </p>
    </div>
  );
}
