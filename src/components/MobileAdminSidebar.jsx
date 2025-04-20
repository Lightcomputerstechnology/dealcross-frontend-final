import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMenu, FiX, FiBarChart2, FiBriefcase, FiUsers, FiAlertCircle, FiSettings,
} from 'react-icons/fi';

const MobileAdminSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 p-2 rounded text-white shadow"
      >
        <FiMenu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-[#1e293b] text-white transform z-50 transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-4 text-sm">
          <Link to="/admin" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-blue-400">
            <FiBarChart2 /> Dashboard
          </Link>
          <Link to="/deal-analytics" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-blue-400">
            <FiBriefcase /> Deals
          </Link>
          <Link to="/users" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-blue-400">
            <FiUsers /> Users
          </Link>
          <Link to="/dispute-log" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-blue-400">
            <FiAlertCircle /> Disputes
          </Link>
          <Link to="/settings" onClick={() => setOpen(false)} className="flex items-center gap-2 hover:text-blue-400">
            <FiSettings /> Settings
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default MobileAdminSidebar;
