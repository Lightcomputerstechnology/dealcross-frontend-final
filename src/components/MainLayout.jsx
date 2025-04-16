// src/components/MainLayout.jsx
import React from 'react';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="px-4 py-2">
        {children}
      </main>
      <div className="fixed bottom-4 left-4">
        <LanguageSwitcher />
      </div>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
