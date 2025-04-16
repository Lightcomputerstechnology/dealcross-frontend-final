import React from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-2">
        {children}
      </div>
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </>
  );
};

export default MainLayout;
