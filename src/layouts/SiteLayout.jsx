// src/layouts/SiteLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Logo from "@/assets/dealcross-logo.png";
import SEOHead from "@/components/SEOHead"; // NEW import

const SiteLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white dark:bg-gray-900 transition duration-300 overflow-hidden">
      {/* Global watermark background */}
      <img
        src={Logo}
        alt="Watermark"
        className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <SEOHead /> {/* NEW: Global SEO meta fallback */}
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SiteLayout;
