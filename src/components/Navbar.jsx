// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'react-feather';
import Logo from '@/assets/logo.svg';

const links = [
  { to: '/',              name: 'Home'        },
  { to: '/deals',         name: 'Deals'       },
  { to: '/share-trading', name: 'Share'       },
  { to: '/contact',       name: 'Contact'     },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-panel/90 backdrop-blur supports-[backdrop-filter]:bg-panel/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
          <img src={Logo} alt="Dealcross logo" className="h-8 w-8" />
          <span className="hidden sm:inline">Dealcross</span>
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-primary-400 transition-colors">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* auth buttons */}
        <div className="hidden md:flex gap-3">
          <Link to="/login" className="btn-secondary-sm">Login</Link>
          <Link to="/signup" className="btn-primary-sm">Sign Up</Link>
        </div>

        {/* mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-panel">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-white/5">{l.name}</Link>
          ))}
          <Link to="/login"   onClick={() => setOpen(false)} className="block px-4 py-3">Login</Link>
          <Link to="/signup"  onClick={() => setOpen(false)} className="block px-4 py-3">Sign Up</Link>
        </div>
      )}
    </header>
  );
        }
