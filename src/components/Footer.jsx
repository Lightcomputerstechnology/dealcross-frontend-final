// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center text-sm py-6 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      {/* Social Icons */}
      <div className="mb-3 flex justify-center space-x-4">
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

      {/* Footer Links */}
      <div className="mb-1 flex justify-center space-x-6">
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        © 2025 Dealcross. All rights reserved.
      </p>
    </footer>
  );
}
