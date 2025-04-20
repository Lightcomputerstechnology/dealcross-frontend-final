import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEOHead = ({ title, description, keywords, author = 'Dealcross Team' }) => {
  const defaultTitle = 'Dealcross - Secure Escrow Platform';
  const defaultDescription =
    'Dealcross is a secure financial platform enabling safe online transactions, share trading, and escrow services globally.';
  const defaultKeywords =
    'dealcross, escrow, secure transactions, share trading, wallet, fintech, dispute resolution';

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* OpenGraph for social sharing */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/logo512.png" />
      <meta property="og:url" content="https://dealcross.com" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content="/logo512.png" />
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
};

export default SEOHead;
