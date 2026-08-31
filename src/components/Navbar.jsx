import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function Navbar({ currentPath, navigateTo, openMagazineModal }) {
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
      isScrolled ? 'glass-nav py-3 shadow-editorial' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Editorial Monogram */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-full plum-gradient-bg border border-gold-400/40 flex items-center justify-center text-gold-300 font-serif font-bold text-xl shadow-md group-hover:border-gold-300 transition-all duration-300">
            TFDW
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-plum-950 block leading-none">
              The Future Destined Woman
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-gold-600 font-semibold block mt-1">
              Empowerment & Purpose
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-plum-100 shadow-sm">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'bg-plum-800 text-gold-300 shadow-md font-bold' 
                    : 'text-plum-900 hover:text-plum-700 hover:bg-plum-50/80'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => openMagazineModal()}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-plum-900 bg-gold-400 hover:bg-gold-300 shadow-md hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <BookOpen className="w-3.5 h-3.5 mr-2 text-plum-900 group-hover:rotate-12 transition-transform" />
            <span>Latest Magazine</span>
            <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-plum-900 text-gold-300 text-[9px] uppercase tracking-widest font-black">
              PDF
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-plum-900 hover:bg-plum-100/50 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-cream-100/98 backdrop-blur-xl border-b border-gold-400/20 shadow-2xl p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`w-full text-left px-5 py-3 rounded-2xl font-serif text-lg font-bold transition-all ${
                    isActive 
                      ? 'plum-gradient-bg text-gold-300 shadow-lg' 
                      : 'text-plum-900 hover:bg-plum-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-plum-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openMagazineModal();
                }}
                className="w-full py-3.5 rounded-full bg-gold-400 text-plum-900 font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Download Biannual Issue PDF</span>
              </button>
              <button
                onClick={() => handleNavClick('get-involved')}
                className="w-full py-3.5 rounded-full plum-gradient-bg text-gold-300 font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-gold-400" />
                <span>Join Movement</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
