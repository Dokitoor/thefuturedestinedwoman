import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Heart } from 'lucide-react';

export default function Navbar({ currentPath, navigateTo, openMagazineModal, openMagazineReader }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About Us' },
    { path: 'programs', label: 'Initiatives & Programs' },
    { path: 'magazine', label: 'Publications' },
    { path: 'get-involved', label: 'Get Involved' },
  ];

  const handleNavClick = (path) => {
    navigateTo(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled ? 'glass-nav py-2.5 shadow-editorial' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Editorial Title (Top Left) */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
        >
          {/* Logo Image extracted from user brand asset */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-purple-300 shadow-md group-hover:border-purple-500 transition-all duration-300 shrink-0 bg-white p-0.5">
            <img 
              src="/logo.png" 
              alt="The Future Destined Woman Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-purple-950 block leading-none group-hover:text-purple-800 transition-colors">
              The Future Destined Woman
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-purple-800 font-bold block mt-1">
              Empowerment · Advocacy · Leadership
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-200/80 shadow-sm">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'bg-purple-900 text-white shadow-md font-bold' 
                    : 'text-purple-950 hover:text-purple-800 hover:bg-purple-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>



        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-purple-950 hover:bg-purple-100/50 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-purple-50/98 backdrop-blur-xl border-b border-gold-400/20 shadow-2xl p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`w-full text-left px-5 py-3 rounded-2xl font-serif text-lg font-bold transition-all ${
                    isActive 
                      ? 'purple-gradient-bg text-gold-300 shadow-lg' 
                      : 'text-purple-950 hover:bg-purple-100/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-purple-200/60 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('get-involved')}
                className="w-full py-3.5 rounded-full purple-gradient-bg text-gold-300 font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-gold-400" />
                <span>Join Global Movement</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

