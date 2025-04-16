// src/components/MainLayout.jsx

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white">
      <Navbar />

      <main className="flex-grow p-4">
        {children}
      </main>

      <Footer />

      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default MainLayout;
