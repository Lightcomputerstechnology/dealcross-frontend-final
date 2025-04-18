import React from 'react';
import { FileText, Download } from 'lucide-react';

const documents = [
  {
    name: 'Pitch Deck',
    description: 'A summary of our vision and value proposition.',
    url: '/docs/pitchdeck.pdf',
  },
  {
    name: 'Terms of Service',
    description: 'Our legal agreements and usage policies.',
    url: '/docs/terms.pdf',
  },
  // Add more documents here if needed
];

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Documentation & Resources</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Download key documents to understand and engage with the Dealcross platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <FileText className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                <h3 className="text-lg font-semibold">{doc.name}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{doc.description}</p>
              <a
                href={doc.url}
                download
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Download className="w-4 h-4 mr-1" /> Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
