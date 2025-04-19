// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center text-center md:text-left">
        
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-gray-500 hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-500 hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-500 hover:text-pink-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-gray-500 hover:text-blue-700" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy</Link>
          <Link to="/docs" className="hover:underline">Docs</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/referral" className="hover:underline">Referral</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/refund" className="hover:underline">Refund</Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Dealcross. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
