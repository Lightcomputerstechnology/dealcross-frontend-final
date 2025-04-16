import React from 'react';
import Navbar from './Navbar';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-4 py-2">
        {children}
      </div>
      <div className="fixed bottom-4 left-4">
        <LanguageSwitcher />
      </div>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default MainLayout;
