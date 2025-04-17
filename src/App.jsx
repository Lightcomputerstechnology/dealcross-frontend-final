// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import ShareTradingPage from './pages/ShareTradingPage'
import LoginPage        from './pages/LoginPage'
import SignUpPage       from './pages/SignUpPage'
// …etc

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ← this is the magic: path="/" must render your LandingPage */}
        <Route path="/"            element={<LandingPage />}     />
        <Route path="/share-trading" element={<ShareTradingPage />} />
        <Route path="/login"       element={<LoginPage />}       />
        <Route path="/signup"      element={<SignUpPage />}      />
        {/* …other routes */}
      </Routes>
    </Router>
  )
}
