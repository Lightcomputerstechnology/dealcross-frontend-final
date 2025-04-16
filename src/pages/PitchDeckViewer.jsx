import React from 'react';

const PitchDeckViewer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Pitch Deck</h1>
      <iframe
        src="/pitchdeck.pdf"
        title="Dealcross Pitch Deck"
        className="w-full h-screen max-w-4xl"
      ></iframe>
    </div>
  );
};

export default PitchDeckViewer;
