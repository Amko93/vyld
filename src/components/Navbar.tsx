import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0d0d1a]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gradient-vyld">
          Vyld
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors ${
                pathname === link.to ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-gradient-vyld text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Devis gratuit
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d1a]/95 backdrop-blur-md border-t border-white/5 px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm transition-colors ${
                pathname === link.to ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-vyld text-white text-sm font-medium"
          >
            Devis gratuit
          </Link>
        </div>
      )}
    </nav>
  );
}
