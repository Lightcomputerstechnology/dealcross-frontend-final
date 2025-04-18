// src/layouts/SiteLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar"; // Add this line

const SiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar /> {/* Step-by-step testing */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default SiteLayout;
