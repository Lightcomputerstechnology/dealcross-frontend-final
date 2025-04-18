import React from 'react';

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Dealcross Documentation</h1>

        {/* Embedded PDF */}
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src="/docs/pitchdeck.pdf"
            className="w-full h-[600px] border border-gray-300 dark:border-gray-700 rounded"
            title="Dealcross Docs"
          />
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href="/docs/pitchdeck.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Download Docs PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
