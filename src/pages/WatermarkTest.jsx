// src/pages/WatermarkTest.jsx
import React from 'react';
import logo from '@/assets/dealcross-logo.png';

export default function WatermarkTest() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-center overflow-hidden">
      {/* Background Watermark Image */}
      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-10 z-0"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Dealcross Watermark Test
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          If you can see the faint logo behind, the watermark works. The background now covers the full section area.
        </p>
      </div>
    </div>
  );
}
