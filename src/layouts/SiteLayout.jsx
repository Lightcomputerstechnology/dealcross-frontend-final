// src/layouts/SiteLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] transition duration-300">
      {/* Header only contains Navbar */}
      <header className="bg-[#f8fafc] dark:bg-gray-900 shadow-md">
        <Navbar />
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
