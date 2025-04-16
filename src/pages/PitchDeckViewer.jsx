// src/pages/PitchDeckViewer.jsx
import React from 'react';

const PitchDeckViewer = () => {
  const handleDownload = () => {
    window.open('/Dealcross_Pitch_Deck_Styled.pptx', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Pitch Deck Viewer</h1>
      <p className="text-center max-w-xl mb-6">
        Click below to view or download our pitch deck presentation. This document gives an overview of Dealcross, our value proposition, and our business model.
      </p>
      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
      >
        Download Pitch Deck (PPTX)
      </button>
    </div>
  );
};

export default PitchDeckViewer;
