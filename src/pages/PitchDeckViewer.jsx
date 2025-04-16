import React from 'react';

const PitchDeckViewer = () => {
  const pptxUrl = encodeURIComponent(
    'https://d-final.onrender.com/Dealcross_Pitch_Deck_Styled.pptx'
  );

  return (
    <div className="w-full h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Dealcross Pitch Deck</h1>
      <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${pptxUrl}`}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Dealcross Pitch Deck"
        className="rounded-lg shadow"
      />
    </div>
  );
};

export default PitchDeckViewer;
