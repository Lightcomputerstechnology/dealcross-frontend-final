import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Dealcross. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
