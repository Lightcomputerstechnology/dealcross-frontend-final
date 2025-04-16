import React from 'react';

const PitchDeckViewer = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Pitch Deck</h2>
      <iframe
        src="/docs/pitchdeck.pdf"
        title="Pitch Deck"
        width="100%"
        height="600px"
        className="border rounded shadow"
      ></iframe>
    </div>
  );
};

export default PitchDeckViewer;
