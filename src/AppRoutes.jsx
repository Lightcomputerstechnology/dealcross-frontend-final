// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ padding: '50px', color: 'red', fontSize: '24px' }}>
            Tailwind is NOT loading. This is raw inline CSS.
          </div>
        }
      />
    </Routes>
  );
}
