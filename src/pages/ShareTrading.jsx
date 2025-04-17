// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage   from './pages/LandingPage'
import ShareTrading  from './pages/sharetrading'    // ← match your filename
import LoginPage     from './pages/LoginPage'
import SignUpPage    from './pages/SignUpPage'
// …etc

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"               element={<LandingPage />}   />
        <Route path="/share-trading"  element={<ShareTrading />}   />
        <Route path="/login"          element={<LoginPage />}     />
        <Route path="/signup"         element={<SignUpPage />}    />
        {/* …other routes */}
      </Routes>
    </Router>
  )
}
