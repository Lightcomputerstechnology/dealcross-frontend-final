// src/layouts/SiteLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const SiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition duration-300">
      {/* Header with Navbar + ThemeToggle */}
      <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <Navbar />
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SiteLayout;
