// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // or however you're storing the auth token
    navigate('/login');
  };

  return (
    <nav className="bg-primary text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">
        <Link to="/">Dealcross</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <button
          onClick={handleLogout}
          className="bg-white text-primary font-medium px-3 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
