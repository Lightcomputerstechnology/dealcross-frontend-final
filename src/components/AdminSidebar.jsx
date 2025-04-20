// src/components/AdminSidebar.jsx
import React from 'react';
import { FiBarChart2, FiBriefcase, FiUsers, FiAlertCircle, FiSettings } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: <FiBarChart2 /> },
    { path: '/deal-analytics', label: 'Deals', icon: <FiBriefcase /> },
    { path: '/users', label: 'Users', icon: <FiUsers /> },
    { path: '/dispute-log', label: 'Disputes', icon: <FiAlertCircle /> },
    { path: '/settings', label: 'Settings', icon: <FiSettings /> },
  ];

  return (
    <aside className="w-64 bg-[#1e293b] p-6 space-y-6 text-white">
      <h2 className="text-2xl font-bold">Dealcross</h2>
      <nav className="space-y-4 text-sm">
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className={`flex items-center gap-2 w-full hover:text-blue-400 transition ${
              location.pathname === item.path ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
