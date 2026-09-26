import React, { useState } from 'react';
import { BookOpen, Send, Sparkles, Heart, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer({ navigateTo, showToast, openMagazineModal, openMagazineReader }) {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast('Subscribed to TFDW Digest', 'Thank you for subscribing! You will receive our latest magazine release alerts and mentorship updates.');
    setEmail('');
  };

  return (
    <footer className="purple-gradient-bg text-purple-50 relative overflow-hidden pt-20 pb-12 border-t-2 border-gold-400/40">
      {/* Decorative Gold Radial Background Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-purple-800/60">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-300 shadow-lg bg-white p-0.5 shrink-0">
                <img 
                  src="/logo.png" 
                  alt="The Future Destined Woman Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                  The Future Destined Woman
                </h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold block mt-0.5">
                  Empowerment · Advocacy · Purpose
                </span>
              </div>
            </div>

            <p className="text-sm text-purple-200/90 leading-relaxed max-w-md font-light">
              Empowering women and girls to discover their God-given identity, walk in unshakeable confidence, lead with excellence, and transform society across the globe.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-white hover:border-gold-300 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-white hover:border-gold-300 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 border border-gold-400/30 flex items-center justify-center text-gold-300 hover:text-white hover:border-gold-300 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-gold-300 tracking-wide uppercase text-xs border-b border-gold-400/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-purple-200/80">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-gold-300 transition-colors">Home Page</button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-gold-300 transition-colors">About Our Vision</button>
              </li>
              <li>
                <button onClick={() => navigateTo('programs')} className="hover:text-gold-300 transition-colors">Initiatives & Cohorts</button>
              </li>
              <li>
                <button onClick={() => navigateTo('magazine')} className="hover:text-gold-300 transition-colors">Publications & Magazine</button>
              </li>
              <li>
                <button onClick={() => navigateTo('get-involved')} className="hover:text-gold-300 transition-colors">Get Involved</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Magazine Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-gold-300 tracking-wide uppercase text-xs border-b border-gold-400/20 pb-2">
              Publications
            </h4>
            <ul className="space-y-2.5 text-sm text-purple-200/80">
              <li>
                <button onClick={() => (openMagazineReader ? openMagazineReader(0) : openMagazineModal(0))} className="hover:text-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                  <span>Edition 3 (Read Online)</span>
                </button>
              </li>
              <li>
                <button onClick={() => (openMagazineReader ? openMagazineReader(1) : openMagazineModal(1))} className="hover:text-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                  <span>Edition 2 (Read Online)</span>
                </button>
              </li>
              <li>
                <button onClick={() => (openMagazineReader ? openMagazineReader(2) : openMagazineModal(2))} className="hover:text-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer">
                  <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                  <span>Edition 1 (Read Online)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription Card */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-gold-300 tracking-wide uppercase text-xs border-b border-gold-400/20 pb-2">
              Join Our Digest
            </h4>
            <p className="text-xs text-purple-200/80 leading-relaxed">
              Receive biannual publication release alerts, event invitations, and leadership encouragement.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2.5 rounded-full bg-purple-950/80 border border-gold-400/30 text-purple-100 placeholder-purple-300/50 text-xs focus:outline-none focus:border-gold-300"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3.5 rounded-full bg-gold-400 text-purple-950 text-xs font-bold hover:bg-gold-300 transition-colors flex items-center justify-center"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/70 gap-4">
          <p>© {new Date().getFullYear()} The Future Destined Woman (TFDW). All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-gold-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gold-300 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-gold-300 transition-colors cursor-pointer">Generational Legacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

