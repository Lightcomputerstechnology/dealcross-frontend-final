// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

// 👉  import the image that sits in src/assets
import logo from "../assets/dealcross-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0f172a] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* Brand ----------------------------------------------------------- */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Dealcross" className="h-8 w-8" />
          <span className="text-lg font-semibold">Dealcross</span>
        </Link>

        {/* Desktop links --------------------------------------------------- */}
        <ul className="hidden items-center gap-8 md:flex">
          <li><Link to="/"         className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/deals"    className="hover:text-blue-400">Deals</Link></li>
          <li><Link to="/share"    className="hover:text-blue-400">Share</Link></li>
          <li><Link to="/contact"  className="hover:text-blue-400">Contact</Link></li>
          <li><Link to="/signup"   className="rounded bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700">
                Sign Up
              </Link>
          </li>
        </ul>

        {/* Mobile hamburger ---------------------------------------------- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile drawer ---------------------------------------------------- */}
      {open && (
        <ul className="space-y-4 bg-[#0f172a] p-4 md:hidden">
          <li><Link to="/"        onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/deals"   onClick={() => setOpen(false)}>Deals</Link></li>
          <li><Link to="/share"   onClick={() => setOpen(false)}>Share</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link to="/signup"
                  className="block rounded bg-blue-600 px-4 py-2 text-center font-medium"
                  onClick={() => setOpen(false)}>
                 Sign Up
              </Link>
          </li>
        </ul>
      )}
    </header>
  );
      }
