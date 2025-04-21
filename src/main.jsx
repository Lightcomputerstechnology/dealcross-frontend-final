// File: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { NotificationProvider } from './context/NotificationContext';
import NotificationAlert from './components/NotificationAlert';
import './index.css'; // Tailwind and global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotificationProvider>
        <AppRoutes />
        <NotificationAlert />
      </NotificationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
