import React from 'react';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-4 py-2">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
