// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import NotificationToast from './components/NotificationToast';

const App = () => {
  return (
    <Router>
      <AppRoutes />
      <NotificationToast />
    </Router>
  );
};

export default App;
