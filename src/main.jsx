// File: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { NotificationProvider } from './context/NotificationContext';
import NotificationAlert from './components/NotificationAlert';
import './index.css'; // Tailwind and global styles

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <NotificationProvider>
          <AppRoutes />
          <NotificationAlert />
        </NotificationProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Make sure there's a <div id='root'></div> in index.html.");
}
