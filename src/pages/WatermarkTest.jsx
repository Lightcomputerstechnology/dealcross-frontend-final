// src/pages/WatermarkTest.jsx
import React from 'react';
import Logo from '../assets/dealcross-logo.png';

export default function WatermarkTest() {
  return (
    <main className="relative h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex items-center justify-center">
      {/* Watermark Logo */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none z-0">
        <img src={Logo} alt="Dealcross Logo Watermark" className="w-64 md:w-96" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Dealcross Watermark Test</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          If you can see the faint logo behind, the watermark works.
        </p>
      </div>
    </main>
  );
}
