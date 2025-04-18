// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LandingPage   from './pages/LandingPage';
import ShareTrading  from './pages/ShareTrading';
import Deals         from './pages/Deals';
import Contact       from './pages/Contact';
import NotFound      from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"               element={<LandingPage/>}   />
        <Route path="/deals"          element={<Deals/>}         />
        <Route path="/share-trading"  element={<ShareTrading/>}  />
        <Route path="/contact"        element={<Contact/>}       />
        <Route path="*"               element={<NotFound/>}      />
      </Routes>
    </Router>
  );
}
