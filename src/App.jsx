// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './index.css';

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
