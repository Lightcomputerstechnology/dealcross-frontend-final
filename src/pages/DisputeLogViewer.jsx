import React from 'react';

const DisputeLogViewer = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">Dispute Log Viewer</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <p>No disputes to display at the moment.</p>
        {/* You can later replace this with dynamic logs from backend */}
      </div>
    </div>
  );
};

export default DisputeLogViewer;
