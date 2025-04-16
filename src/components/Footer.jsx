// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10 text-center">
      <p className="text-sm">© {new Date().getFullYear()} Dealcross. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
