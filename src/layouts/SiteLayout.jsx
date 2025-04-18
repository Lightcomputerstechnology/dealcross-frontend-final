// src/layouts/SiteLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default SiteLayout;
