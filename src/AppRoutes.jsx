import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PitchDeckViewer from './pages/PitchDeckViewer';
import FraudDetectionLog from './pages/FraudDetectionLog';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/pitch-deck" element={<PitchDeckViewer />} />
      <Route path="/fraud-log" element={<FraudDetectionLog />} />
    </Routes>
  );
};

export default AppRoutes;
