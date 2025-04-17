import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">Dealcross</Link>
      </div>
      <div className="flex space-x-4 text-sm">
        <Link to="/login" className="hover:text-blue-400">Login</Link>
        <Link to="/signup" className="hover:text-blue-400">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
