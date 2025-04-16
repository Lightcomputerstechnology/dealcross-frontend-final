import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow px-4 py-6">
          <AppRoutes />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </BrowserRouter>
  );
}

export default App;
