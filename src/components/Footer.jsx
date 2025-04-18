// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center text-sm py-6 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mb-2 text-lg">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
      </div>

      {/* Footer Navigation */}
      <div className="mb-2 flex justify-center space-x-6">
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        © 2025 Dealcross. All rights reserved.
      </p>
    </footer>
  );
}
