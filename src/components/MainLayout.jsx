// src/components/MainLayout.jsx
import React from 'react';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-2">{children}</div>

      {/* Floating bottom controls */}
      <div className="fixed bottom-4 left-4 z-50">
        <LanguageSwitcher />
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </>
  );
};

export default MainLayout;
