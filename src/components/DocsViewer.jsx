// src/components/DocsViewer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const DocsViewer = ({ filePath }) => {
  return (
    <>
      <Helmet>
        <title>View Document - Dealcross</title>
        <meta name="description" content="Read the official Dealcross document including pitch decks and business overviews." />
        <meta name="keywords" content="dealcross, docs, pitchdeck, viewer, investment" />
        <meta name="author" content="Dealcross Team" />
      </Helmet>

      <div className="w-full h-[600px] border border-gray-300 dark:border-gray-700 rounded shadow">
        <iframe
          src={filePath}
          title="Dealcross Document Viewer"
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </>
  );
};

DocsViewer.propTypes = {
  filePath: PropTypes.string.isRequired,
};

export default DocsViewer;
