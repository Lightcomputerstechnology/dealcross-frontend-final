// import React from 'react';

const PitchDeckViewer = () => {
  const pdfUrl = '/docs/pitchdeck.pdf'; // path in public folder

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Investor Pitch Deck</h2>

      <div className="bg-[#1e293b] p-4 rounded-lg shadow-lg mb-6">
        <iframe
          src={pdfUrl}
          title="Pitch Deck"
          className="w-full h-[80vh] rounded-md"
        />
      </div>

      <div className="text-right">
        <a
          href={pdfUrl}
          download
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-medium inline-block"
        >
          Download Pitch Deck
        </a>
      </div>
    </div>
  );
};

export default PitchDeckViewer;
