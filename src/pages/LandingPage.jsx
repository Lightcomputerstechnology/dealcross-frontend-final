// src/pages/LandingPage.jsx
import React from 'react';
import HowItWorks from '@/components/HowItWorks';
import TrustLevels from '@/components/TrustLevels';
import FastPayouts from '@/components/FastPayouts';

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-center px-4 pt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to Dealcross
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
        This is a safe test page to confirm rendering works.
      </p>

      {/* Features Section */}
      <div className="mt-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <HowItWorks />
          <TrustLevels />
          <FastPayouts />
        </div>
      </div>
    </div>
  );
}
