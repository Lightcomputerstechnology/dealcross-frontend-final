// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StartDealPairing from './pages/StartDealPairing';
import ShareTrading from './pages/ShareTrading';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/pair-deal" element={<StartDealPairing />} />
            <Route path="/share" element={<ShareTrading />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
