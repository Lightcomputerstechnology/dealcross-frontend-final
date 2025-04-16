// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import NotificationToast from './components/NotificationToast';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="flex-grow p-4">
          <AppRoutes />
        </main>
        <Footer />
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
        <NotificationToast />
      </div>
    </Router>
  );
};

export default App;
