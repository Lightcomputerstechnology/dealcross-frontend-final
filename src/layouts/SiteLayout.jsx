// src/layouts/SiteLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition duration-300">
      {/* Navbar only */}
      <Navbar />

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
