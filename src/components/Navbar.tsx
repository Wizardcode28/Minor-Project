import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-slate-900">
            <img src={logo} alt="AlgoViz Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold">AlgoViz</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/"
              className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Home
            </a>

            <a
              href="#algorithms"
              className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              Algorithms
            </a>

            <a
              href="#about"
              className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900 p-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 ${isOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <a
            href="/"
            className="text-slate-600 hover:text-blue-600 py-2 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>

          <a
            href="#algorithms"
            className="text-slate-600 hover:text-blue-600 py-2 transition-colors"
            onClick={toggleMenu}
          >
            Algorithms
          </a>

          <a
            href="#about"
            className="text-slate-600 hover:text-blue-600 py-2 transition-colors"
            onClick={toggleMenu}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;