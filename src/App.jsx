import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AppRoutes from './AppRoutes.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <main className="flex-grow p-4">
          <AppRoutes />
        </main>
        <Footer />
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
