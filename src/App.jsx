import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* grow to fill & scroll */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
