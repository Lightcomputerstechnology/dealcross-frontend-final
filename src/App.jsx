// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './index.css'; // Tailwind/global styles
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <AppRoutes />
      <Toaster position="top-right" reverseOrder={false} />
    </Router>
  );
}
