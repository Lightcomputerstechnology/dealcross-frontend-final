// File: src/App.jsx

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './index.css'; // Tailwind/global styles
import { Toaster } from 'react-hot-toast';
import NotificationAlert from './components/NotificationAlert';
import NotificationPopUp from './components/NotificationPopUp';
import { NotificationProvider } from './context/NotificationContext';

export default function App() {
  return (
    <Router>
      <NotificationProvider>
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
          <AppRoutes />
          <NotificationAlert />
          <NotificationPopUp />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              className:
                'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg rounded-lg px-4 py-2',
              duration: 4000,
            }}
          />
        </div>
      </NotificationProvider>
    </Router>
  );
              }
