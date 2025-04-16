import React from 'react';

const PitchDeckViewer = () => {
  return (
    <div className="p-4 min-h-screen bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        Dealcross Pitch Deck
      </h2>
      <div className="flex justify-center">
        <iframe
          src="/pitchdeck.pdf"
          title="Dealcross Pitch Deck"
          width="100%"
          height="800px"
          className="border rounded w-full max-w-5xl"
        />
      </div>
    </div>
  );
};

export default PitchDeckViewer;
