import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dealcross</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
