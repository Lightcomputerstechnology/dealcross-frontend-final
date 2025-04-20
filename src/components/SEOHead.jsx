import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEOHead = ({
  title = 'Dealcross',
  description = 'Secure global transactions with escrow, wallet, and share trading.',
  keywords = 'dealcross, escrow, secure payment, share trading, wallet, crypto, investment',
  url = 'https://dealcross-frontend.onrender.com',
  image = '/cover.png'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dealcross Team" />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default SEOHead;
