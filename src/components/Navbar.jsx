import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dealcross</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
        <Link to="/signup" className="hover:text-blue-400">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
