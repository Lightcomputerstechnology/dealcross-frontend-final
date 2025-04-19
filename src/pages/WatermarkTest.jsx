// src/pages/WatermarkTest.jsx
import React from 'react';
import logo from '@/assets/dealcross-logo.png';

export default function WatermarkTest() {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Watermark Fullscreen */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // Full stretch
          backgroundPosition: 'center',
          opacity: 0.12, // Slightly more visible
          filter: 'brightness(100%)',
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Dealcross Watermark Test
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          If you can see the faint logo behind, the watermark works perfectly.
        </p>
      </div>
    </div>
  );
}
