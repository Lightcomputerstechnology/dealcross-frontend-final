import React from 'react'; import { Helmet } from 'react-helmet'; import { FiDownloadCloud } from 'react-icons/fi';

const DocsPage = () => { return ( <> <Helmet> <title>Docs - Dealcross Platform Overview</title> <meta name="description" content="Explore the Dealcross platform documentation, including pitch decks and business overviews." /> <meta name="keywords" content="dealcross, pitchdeck, documentation, investment, whitepaper" /> <meta name="author" content="Dealcross Team" /> </Helmet>

<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-extrabold text-center mb-6">Dealcross Documentation</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Review our official documents, pitch materials, and platform guide.
      </p>

      {/* PDF Viewer */}
      <div className="w-full mb-8">
        <iframe
          src="/docs/pitchdeck.pdf"
          className="w-full h-[600px] border border-gray-300 dark:border-gray-700 rounded-md shadow"
          title="Dealcross Docs Viewer"
        ></iframe>
      </div>

      {/* Download Button */}
      <div className="text-center">
        <a
          href="/docs/pitchdeck.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow transition"
        >
          <FiDownloadCloud /> Download Docs PDF
        </a>
      </div>
    </div>
  </div>
</>

); };

export default DocsPage;

