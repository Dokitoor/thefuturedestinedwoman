import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function WelcomeIntro({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Increment percentage counter quickly and smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            handleExit();
          }, 1200);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-purple-950 text-white flex flex-col justify-between overflow-hidden transition-all duration-700 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none scale-105 filter blur-sm' : 'opacity-100'
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(132,36,143,0.35)_0%,rgba(18,2,26,0.95)_75%)] pointer-events-none" />
      
      {/* Slanted Ticker Tape 1 */}
      <div className="absolute top-[20%] left-[-20%] right-[-20%] -rotate-12 pointer-events-none z-10 opacity-30">
        <div className="bg-gradient-to-r from-gold-500 via-plum-500 to-gold-400 text-purple-950 py-2 shadow-2xl overflow-hidden">
          <div className="ticker-tape whitespace-nowrap font-display font-black uppercase text-xs md:text-sm tracking-[0.3em]">
            {Array(8).fill("THE FUTURE DESTINED WOMAN — UNTIL WE ARE ALL EQUAL — EMPOWER HER — ").join("")}
          </div>
        </div>
      </div>

      {/* Slanted Ticker Tape 2 */}
      <div className="absolute bottom-[26%] left-[-20%] right-[-20%] rotate-6 pointer-events-none z-10 opacity-25">
        <div className="bg-purple-800 text-gold-300 border-y border-gold-400/40 py-2.5 shadow-2xl overflow-hidden">
          <div className="ticker-tape-reverse whitespace-nowrap font-display font-black uppercase text-xs md:text-sm tracking-[0.35em]">
            {Array(8).fill("TFDW GLOBAL MOVEMENT — ADVOCACY & LEADERSHIP — MAGAZINE & VOICES — ").join("")}
          </div>
        </div>
      </div>

      {/* TOP BAR */}
      <div className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 text-[10px] md:text-xs tracking-[0.3em] uppercase border-b border-purple-800/40">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse shadow-gold-glow" />
          <span className="font-semibold text-gold-300">TFDW®</span>
          <span className="hidden sm:inline text-purple-300">· THE FUTURE DESTINED WOMAN</span>
        </div>
        <div className="text-purple-200 hidden md:block">
          GLOBAL INITIATIVE 2026
        </div>
        <button 
          onClick={handleExit}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/50 bg-purple-900/60 hover:bg-gold-400 hover:text-purple-950 transition-all duration-300 cursor-pointer"
        >
          <span>SKIP INTRO</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* CENTER INTRO SPOTLIGHT */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* Animated Stack & Logo Frame */}
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 mb-6">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-[-12px] rounded-full border border-dashed border-gold-400/40 animate-spin-slow" />
          
          {/* Soft Aura Ring */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse-slow" />

          {/* Center Logo Frame */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-300 shadow-luxury bg-white flex items-center justify-center p-2.5 transition-transform duration-700 transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="The Future Destined Woman Logo" 
              className="w-full h-full object-contain rounded-full filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Dynamic Title Reveal */}
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="text-purple-200 text-xs md:text-sm uppercase tracking-[0.4em] font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-300 animate-spin-slow" />
            <span>WELCOME TO THE FUTURE</span>
            <Sparkles className="w-4 h-4 text-purple-300 animate-spin-slow" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
            THE FUTURE <span className="text-purple-200 font-serif italic">DESTINED WOMAN</span>
          </h1>

          <p className="font-sans text-purple-200/90 text-sm md:text-lg max-w-xl mx-auto tracking-wide font-light">
            Championing gender equality, leadership, and transformative empowerment for women across the globe.
          </p>
        </div>

        {/* Counter Display */}
        <div className="mt-6 font-serif text-5xl sm:text-7xl font-bold text-white tabular-nums tracking-widest">
          {String(progress).padStart(3, '0')}<span className="text-2xl text-purple-300">%</span>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5 text-[10px] md:text-xs tracking-[0.25em] uppercase border-t border-purple-800/40">
        <div className="text-purple-300">
          LOADING EXPERIENCE
        </div>

        <div className="flex items-center gap-2 text-gold-400">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
          <span>INITIALIZING PLATFORM</span>
        </div>
      </div>
    </div>
  );
}
