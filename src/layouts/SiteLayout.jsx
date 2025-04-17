// src/layouts/SiteLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Outlet />      {/* current page is rendered here */}
      </main>
      <Footer />
    </div>
  );
}
