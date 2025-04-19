// src/pages/WatermarkTest.jsx
import React from 'react';
import logo from '@/assets/dealcross-logo.png';

export default function WatermarkTest() {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background Watermark */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'contrast(105%) brightness(105%)',
        }}
      ></div>

      {/* Overlay for Rich White Styling */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 opacity-95"></div>

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
