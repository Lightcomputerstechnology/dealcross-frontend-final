import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.svg';     // ✅ path relative to src

const nav = [
  { to: '/',           label: 'Home'  },
  { to: '/deals',      label: 'Deals' },
  { to: '/share',      label: 'Share Trading' },
  { to: '/contact',    label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-surface/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="DealCross" className="h-8 w-8" />
          <span className="text-xl font-semibold text-white">Dealcross</span>
        </Link>

        {/* desktop links */}
        <nav className="hidden gap-8 md:flex">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary-400' : 'text-gray-200 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* actions */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/login"
            className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            Sign Up
          </NavLink>
        </div>

        {/* hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-gray-200 md:hidden focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <nav className="md:hidden space-y-2 bg-surface px-4 pb-4 pt-2">
          {nav.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-base font-medium ${
                  isActive ? 'bg-primary-500 text-white' : 'text-gray-200 hover:bg-white/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <hr className="border-white/10" />
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className="block rounded-md bg-primary-500 px-3 py-2 text-base font-medium text-white text-center"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            onClick={() => setOpen(false)}
            className="block rounded-md bg-white/10 px-3 py-2 text-base font-medium text-white text-center"
          >
            Sign Up
          </NavLink>
        </nav>
      )}
    </header>
  );
        }
