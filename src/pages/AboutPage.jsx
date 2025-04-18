// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Dealcross</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Dealcross is a global platform built to help individuals and businesses perform secure digital transactions using escrow protection. Our mission is to build trust in online payments, share trading, and financial partnerships.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          We offer a wide range of tools including wallet funding, crypto and fiat support, dispute resolution, investor tools, and admin management systems — all in one place.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Whether you’re trading services, selling products, or investing in startups, Dealcross gives you the protection, transparency, and technology you need to succeed globally.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
