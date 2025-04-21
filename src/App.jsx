// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './index.css'; // Tailwind/global styles
import { Toaster } from 'react-hot-toast';
import NotificationAlert from './components/NotificationAlert';
import { NotificationProvider } from './context/NotificationContext';

export default function App() {
  return (
    <Router>
      <NotificationProvider>
        <AppRoutes />
        <NotificationAlert />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            className: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-xl',
            duration: 4000,
          }}
        />
      </NotificationProvider>
    </Router>
  );
}
