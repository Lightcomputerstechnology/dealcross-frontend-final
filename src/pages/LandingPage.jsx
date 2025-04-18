// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    console.log('LandingPage loaded');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to Dealcross</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          This is a safe test page to confirm rendering works.
        </p>
      </div>
    </div>
  );
}
