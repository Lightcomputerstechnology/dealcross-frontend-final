// src/layouts/AdminLayout.jsx import React, { useState } from 'react'; import { Outlet } from 'react-router-dom'; import SidebarDesktop from '@/components/SidebarDesktop'; import MobileAdminSidebar from '@/components/MobileAdminSidebar'; import { FiMenu } from 'react-icons/fi';

export default function AdminLayout() { const [showMobileMenu, setShowMobileMenu] = useState(false);

return ( <div className="flex min-h-screen bg-[#0f172a] text-white"> {/* Desktop Sidebar */} <div className="hidden md:block w-64"> <SidebarDesktop /> </div>

{/* Mobile Toggle Button */}
  <div className="md:hidden fixed top-4 left-4 z-50">
    <button
      onClick={() => setShowMobileMenu(!showMobileMenu)}
      className="text-white text-2xl p-2 rounded hover:bg-gray-800"
    >
      <FiMenu />
    </button>
  </div>

  {/* Mobile Sidebar Overlay */}
  {showMobileMenu && (
    <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setShowMobileMenu(false)}>
      <div className="w-64 bg-[#1e293b] h-full p-6" onClick={(e) => e.stopPropagation()}>
        <MobileAdminSidebar closeMenu={() => setShowMobileMenu(false)} />
      </div>
    </div>
  )}

  {/* Main Content */}
  <main className="flex-1 p-4 md:p-8">
    <Outlet />
  </main>
</div>

); }

