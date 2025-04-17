import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import AppRoutes from './AppRoutes';
import './index.css';      // tailwind directives

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-surface via-surface to-surface/90 text-white">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-10">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}
