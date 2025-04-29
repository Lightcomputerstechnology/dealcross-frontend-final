// src/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1 className="text-white p-10">Test Page Works!</h1>} />
    </Routes>
  );
}
