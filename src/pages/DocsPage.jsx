import React from 'react';

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Documentation & Downloads</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Find useful resources, pitch decks, and legal documents related to Dealcross.
        </p>

        <div className="space-y-4">
          <a
            href="/docs/pitchdeck.pdf"
            download
            className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition w-fit"
          >
            Download Pitch Deck (PDF)
          </a>
          <a
            href="/docs/terms.pdf"
            download
            className="block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md transition w-fit"
          >
            Download Terms of Service (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
