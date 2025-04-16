import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4 text-sm text-gray-400 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 mt-10">
      &copy; {new Date().getFullYear()} Dealcross. All rights reserved.
    </footer>
  );
};

export default Footer;
