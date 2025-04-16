// src/pages/EscrowTracker.jsx
import React from 'react';

const EscrowTracker = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Escrow Tracker</h1>
      <p className="text-center max-w-xl">
        Here you can track the progress of your escrow deals. This section will be
        updated with real-time status updates, delivery confirmations, and release
        history. Stay tuned!
      </p>
    </div>
  );
};

export default EscrowTracker;
