// File: src/pages/PitchDeckViewer.jsx

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const PitchDeckViewer = () => {
  const pdfUrl = '/docs/pitchdeck.pdf';
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 md:px-6 py-10">
      <Helmet>
        <title>Investor Pitch Deck - Dealcross</title>
        <meta name="description" content="View and download the Dealcross investor pitch deck PDF." />
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">Investor Pitch Deck</h2>

      <div className="bg-[#1e293b] p-4 rounded-lg shadow-lg mb-6">
        {loading && (
          <p className="text-yellow-400 text-sm mb-4">Loading pitch deck...</p>
        )}
        <iframe
          src={pdfUrl}
          title="Pitch Deck PDF"
          aria-label="Investor Pitch Deck"
          className="w-full h-[70vh] md:h-[80vh] rounded-md"
          onLoad={() => setLoading(false)}
        />
      </div>

      <div className="text-right">
        <a
          href={pdfUrl}
          download
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium inline-block"
          aria-label="Download Pitch Deck"
        >
          Download Pitch Deck
        </a>
      </div>
    </div>
  );
};

export default PitchDeckViewer;
