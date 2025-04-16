import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotificationToast from "./components/NotificationToast";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        {/* Header */}
        <header className="w-full shadow-md z-50">
          <Navbar />
        </header>

        {/* Main Routes */}
        <main className="flex-grow">
          <AppRoutes />
        </main>

        {/* Footer */}
        <footer className="mt-10">
          <Footer />
        </footer>

        {/* Utility Components */}
        <ThemeToggle />
        <NotificationToast />
      </div>
    </Router>
  );
};

export default App;
