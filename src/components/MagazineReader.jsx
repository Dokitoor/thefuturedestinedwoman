import React, { useState, useEffect, useRef } from 'react';
import { 
  X, BookOpen, Download, Share2, Maximize2, Minimize2, 
  ChevronLeft, ChevronRight, List, FileText, CheckCircle2, 
  Sparkles, Layers, Type, Sun, Moon, Coffee, ExternalLink, ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MAGAZINE_EDITIONS } from '../data/magazineData';

export default function MagazineReader({ 
  initialEditionIndex = 0, 
  onClose, 
  showToast 
}) {
  const [editionIndex, setEditionIndex] = useState(initialEditionIndex);
  const [currentPage, setCurrentPage] = useState(1);
  const [readerMode, setReaderMode] = useState('interactive'); // 'interactive' | 'pdf'
  const [theme, setTheme] = useState('ivory'); // 'ivory' | 'dark' | 'white'
  const [fontSize, setFontSize] = useState('base'); // 'sm' | 'base' | 'lg'
  const [isTOCSidebarOpen, setIsTOCSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef(null);
  const currentEdition = MAGAZINE_EDITIONS[editionIndex] || MAGAZINE_EDITIONS[0];
  const totalPages = currentEdition.pages?.length || 8;
  const activePageData = currentEdition.pages?.[currentPage - 1] || currentEdition.pages?.[0];

  // Reset page when switching editions
  const handleSelectEdition = (index) => {
    setEditionIndex(index);
    setCurrentPage(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrevPage();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          handleToggleFullscreen();
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, isFullscreen]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const jumpToPage = (pageNum) => {
    const target = Math.max(1, Math.min(pageNum, totalPages));
    setCurrentPage(target);
    setIsTOCSidebarOpen(false);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#4C015C', '#84248F', '#D4AF37', '#FAF5FF']
      });
    } catch (e) {
      console.log('Confetti triggered');
    }

    const link = document.createElement('a');
    link.href = currentEdition.pdfUrl;
    link.download = currentEdition.downloadFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (showToast) {
      showToast(
        'Downloading Magazine',
        `Preparing high-resolution PDF for "${currentEdition.title}" (${currentEdition.editionNumber}).`
      );
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      if (showToast) {
        showToast('Link Copied!', `Direct link to ${currentEdition.title} reader copied to clipboard.`);
      }
    } else if (showToast) {
      showToast('Publication Link', `Reading ${currentEdition.title} online.`);
    }
  };

  // Theme styling helpers
  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-[#130219]',
          cardBg: 'bg-[#1f0529]/95 text-purple-100 border-purple-800/60',
          textColor: 'text-purple-100',
          headingColor: 'text-gold-300',
          subTextColor: 'text-purple-300',
          border: 'border-purple-800/60',
          quoteBg: 'bg-purple-950/80 border-gold-400/50 text-gold-200'
        };
      case 'white':
        return {
          bg: 'bg-stone-100',
          cardBg: 'bg-white text-stone-900 border-stone-200 shadow-xl',
          textColor: 'text-stone-800',
          headingColor: 'text-purple-950',
          subTextColor: 'text-stone-600',
          border: 'border-stone-200',
          quoteBg: 'bg-purple-50/70 border-purple-800/40 text-purple-950'
        };
      case 'ivory':
      default:
        return {
          bg: 'bg-[#FAF6EE]',
          cardBg: 'bg-[#FCF9F2] text-[#241728] border-[#E8DFCF] shadow-luxury',
          textColor: 'text-[#2D1B33]',
          headingColor: 'text-purple-950',
          subTextColor: 'text-[#5B4262]',
          border: 'border-[#E8DFCF]',
          quoteBg: 'bg-[#F4ECE0] border-gold-500/60 text-purple-950'
        };
    }
  };

  const themeConfig = getThemeClasses();

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-xs sm:text-sm leading-relaxed';
      case 'lg': return 'text-base sm:text-lg leading-relaxed';
      case 'base':
      default: return 'text-sm sm:text-base leading-relaxed';
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col bg-purple-950/95 backdrop-blur-xl animate-in fade-in duration-300 select-none overflow-hidden"
    >
      {/* 1. TOP CONTROL BAR */}
      <header className="h-16 px-3 sm:px-6 bg-[#1a0224] border-b border-purple-800/60 flex items-center justify-between text-white shrink-0 z-30 shadow-md">
        
        {/* Left: Exit button & Magazine Info */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <button
            onClick={onClose}
            title="Exit Reader and return to site (Esc)"
            className="px-3 py-1.5 rounded-xl bg-purple-900/80 hover:bg-purple-800 text-gold-300 hover:text-white flex items-center gap-1.5 transition-colors border border-purple-700/60 cursor-pointer text-xs font-bold shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Exit Reader</span>
          </button>

          <div className="w-9 h-9 rounded-full bg-gold-400/20 border border-gold-400/50 flex items-center justify-center text-gold-300 shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>

          <div className="hidden md:block min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-purple-900 border border-purple-700 text-[10px] uppercase tracking-widest text-gold-300 font-extrabold">
                {currentEdition.editionNumber}
              </span>
              <span className="text-[11px] text-purple-300 font-serif italic truncate">
                {currentEdition.releaseDate}
              </span>
            </div>
            <h2 className="font-serif text-sm sm:text-base font-bold text-white truncate max-w-xs lg:max-w-md">
              {currentEdition.title}
            </h2>
          </div>

          {/* Quick Edition Dropdown */}
          <div className="relative">
            <select
              value={editionIndex}
              onChange={(e) => handleSelectEdition(Number(e.target.value))}
              aria-label="Select Magazine Edition"
              className="bg-purple-900/90 text-gold-200 border border-purple-700 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-gold-400 cursor-pointer font-bold"
            >
              {MAGAZINE_EDITIONS.map((ed, idx) => (
                <option key={ed.id} value={idx} className="bg-purple-950 text-white">
                  {ed.editionNumber} - {ed.title}
                </option>
              ))}
            </select>
          </div>

          {/* Table of Contents Button */}
          <button
            onClick={() => setIsTOCSidebarOpen(!isTOCSidebarOpen)}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
              isTOCSidebarOpen 
                ? 'bg-gold-400 text-purple-950 border-gold-300' 
                : 'bg-purple-900/60 hover:bg-purple-800 text-purple-200 border-purple-700/60'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Contents</span>
          </button>
        </div>

        {/* Center: Mode Selector (Interactive vs Full PDF) */}
        <div className="flex items-center bg-purple-950/80 p-1 rounded-2xl border border-purple-800/80 shadow-inner">
          <button
            onClick={() => setReaderMode('interactive')}
            className={`px-3 py-1 sm:py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              readerMode === 'interactive'
                ? 'bg-gold-400 text-purple-950 shadow-md'
                : 'text-purple-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Interactive</span>
            <span>Reader</span>
          </button>

          <button
            onClick={() => setReaderMode('pdf')}
            className={`px-3 py-1 sm:py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              readerMode === 'pdf'
                ? 'bg-gold-400 text-purple-950 shadow-md'
                : 'text-purple-300 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Original</span>
            <span>PDF</span>
          </button>
        </div>

        {/* Right: Controls & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Reader Preferences (Only in interactive mode) */}
          {readerMode === 'interactive' && (
            <div className="hidden lg:flex items-center gap-1 bg-purple-900/50 p-1 rounded-xl border border-purple-800/50">
              
              {/* Theme Selector */}
              <button
                title="Ivory Paper Theme"
                onClick={() => setTheme('ivory')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  theme === 'ivory' ? 'bg-[#FCF9F2] text-purple-950 shadow' : 'text-purple-300 hover:text-white'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                title="Royal Dark Theme"
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  theme === 'dark' ? 'bg-purple-950 text-gold-300 shadow' : 'text-purple-300 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button
                title="Clean White Theme"
                onClick={() => setTheme('white')}
                className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
                  theme === 'white' ? 'bg-white text-stone-900 shadow' : 'text-purple-300 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
              </button>

              <div className="h-4 w-px bg-purple-700/50 mx-1" />

              {/* Font Size Selector */}
              <button
                title="Decrease Font Size"
                onClick={() => setFontSize(fontSize === 'lg' ? 'base' : 'sm')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  fontSize === 'sm' ? 'text-gold-300 bg-purple-800' : 'text-purple-300 hover:text-white'
                }`}
              >
                A-
              </button>
              <button
                title="Increase Font Size"
                onClick={() => setFontSize(fontSize === 'sm' ? 'base' : 'lg')}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  fontSize === 'lg' ? 'text-gold-300 bg-purple-800' : 'text-purple-300 hover:text-white'
                }`}
              >
                A+
              </button>
            </div>
          )}

          {/* Fullscreen Toggle */}
          <button
            onClick={handleToggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 hover:text-white flex items-center justify-center transition-colors border border-purple-700/60 cursor-pointer hidden sm:flex"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handleDownload}
            title="Download PDF"
            className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-gold-300 hover:text-gold-200 flex items-center justify-center transition-colors border border-purple-700/60 cursor-pointer"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            title="Share Publication"
            className="w-9 h-9 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 hover:text-white flex items-center justify-center transition-colors border border-purple-700/60 cursor-pointer hidden sm:flex"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            title="Close Reader (Esc)"
            className="px-3 py-1.5 rounded-xl bg-red-900 hover:bg-red-800 text-white flex items-center gap-1.5 transition-colors border border-red-700 cursor-pointer ml-1 text-xs font-bold shadow-md"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

      </header>

      {/* 2. MAIN READER STAGE */}
      <div className="flex-1 relative flex overflow-hidden">
        
        {/* Table of Contents Drawer */}
        {isTOCSidebarOpen && (
          <aside className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-[#1a0224] border-r border-purple-800/80 shadow-2xl z-40 flex flex-col animate-in slide-in-from-left duration-200">
            <div className="p-4 border-b border-purple-800/60 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <List className="w-4 h-4 text-gold-300" />
                <h3 className="font-serif font-bold text-base text-gold-200">Table of Contents</h3>
              </div>
              <button
                onClick={() => setIsTOCSidebarOpen(false)}
                className="p-1 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
              {currentEdition.pages?.map((pg) => {
                const isActive = pg.pageNum === currentPage;
                return (
                  <button
                    key={pg.pageNum}
                    onClick={() => jumpToPage(pg.pageNum)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer ${
                      isActive 
                        ? 'bg-gold-400 text-purple-950 shadow-md font-bold' 
                        : 'bg-purple-950/60 text-purple-200 hover:bg-purple-900/60 border border-purple-800/40'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-purple-950 text-gold-300' : 'bg-purple-900 text-purple-300'
                    }`}>
                      {pg.pageNum}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-serif font-bold truncate leading-tight">
                        {pg.title}
                      </h4>
                      {pg.author && (
                        <p className={`text-[10px] truncate mt-0.5 ${isActive ? 'text-purple-900 font-semibold' : 'text-purple-400'}`}>
                          {pg.author}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Edition Footnote */}
            <div className="p-4 border-t border-purple-800/60 bg-purple-950/80 text-center">
              <span className="text-[10px] text-purple-300 uppercase tracking-widest font-extrabold block">
                {currentEdition.editionNumber}
              </span>
              <p className="text-[11px] text-gold-300/80 font-serif italic mt-0.5 truncate">
                {currentEdition.theme}
              </p>
            </div>
          </aside>
        )}

        {/* READER CONTENT AREA */}
        <main className={`flex-1 relative overflow-y-auto flex flex-col justify-between ${themeConfig.bg} transition-colors duration-300`}>
          
          {readerMode === 'interactive' ? (
            /* INTERACTIVE SPREAD / ARTICLE VIEW */
            <div className="flex-1 flex flex-col justify-center items-center p-3 sm:p-6 lg:p-8">
              
              <div className="w-full max-w-4xl relative">
                
                {/* Previous Page Arrow (Floating on Left for Desktop) */}
                {currentPage > 1 && (
                  <button
                    onClick={goToPrevPage}
                    aria-label="Previous Page"
                    className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-purple-950/80 hover:bg-purple-900 text-gold-300 hover:text-white shadow-xl items-center justify-center transition-all border border-purple-700/80 cursor-pointer z-20 hover:scale-105"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* Next Page Arrow (Floating on Right for Desktop) */}
                {currentPage < totalPages && (
                  <button
                    onClick={goToNextPage}
                    aria-label="Next Page"
                    className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-purple-950/80 hover:bg-purple-900 text-gold-300 hover:text-white shadow-xl items-center justify-center transition-all border border-purple-700/80 cursor-pointer z-20 hover:scale-105"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

                {/* PAGE SURFACE CONTAINER */}
                <div className={`w-full rounded-3xl p-6 sm:p-10 lg:p-12 border-2 transition-all duration-300 relative overflow-hidden ${themeConfig.cardBg} ${themeConfig.border}`}>
                  
                  {/* Subtle Corner Accents for Editorial Feel */}
                  <div className="absolute top-4 left-4 text-xs font-mono font-bold opacity-40 uppercase tracking-widest">
                    {currentEdition.editionNumber} • {currentEdition.releaseDate}
                  </div>
                  <div className="absolute top-4 right-4 text-xs font-mono font-bold opacity-60">
                    Page {currentPage} of {totalPages}
                  </div>

                  {/* 1. COVER PAGE VIEW */}
                  {activePageData.type === 'cover' && (
                    <div className="pt-6 pb-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-in fade-in duration-300">
                      
                      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-400/50 group shrink-0 relative">
                        <img
                          src={activePageData.coverImage || currentEdition.coverImage}
                          alt={currentEdition.title}
                          className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="px-3 py-1 rounded-full bg-purple-900 text-gold-300 text-[10px] font-extrabold uppercase tracking-widest inline-block mb-1 border border-purple-700">
                            {currentEdition.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-600 text-xs font-extrabold tracking-widest uppercase">
                          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                          <span>Digital Luxury Edition</span>
                        </div>

                        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                          {currentEdition.title}
                        </h1>

                        <p className="text-base sm:text-lg italic font-serif opacity-90 font-medium">
                          "{currentEdition.theme}"
                        </p>

                        <p className={`font-light leading-relaxed max-w-xl ${getFontSizeClass()}`}>
                          {currentEdition.synopsis}
                        </p>

                        <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                          <button
                            onClick={goToNextPage}
                            className="px-8 py-3.5 rounded-full bg-purple-900 hover:bg-purple-950 text-white font-extrabold text-xs shadow-luxury transition-all flex items-center gap-2 cursor-pointer border border-purple-700"
                          >
                            <span>Open Table of Contents</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => setReaderMode('pdf')}
                            className="px-6 py-3.5 rounded-full bg-gold-400 text-purple-950 hover:bg-gold-300 font-extrabold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                          >
                            <FileText className="w-4 h-4" />
                            <span>View Full PDF</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* 2. TABLE OF CONTENTS VIEW */}
                  {activePageData.type === 'toc' && (
                    <div className="pt-6 pb-2 space-y-8 animate-in fade-in duration-300">
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-600 block mb-1">
                          [ Comprehensive Index ]
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-snug">
                          {activePageData.title}
                        </h2>
                        <p className={`mt-2 font-serif italic max-w-2xl opacity-85 ${getFontSizeClass()}`}>
                          "{activePageData.intro}"
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        {activePageData.tableOfContents?.map((item) => (
                          <button
                            key={item.page}
                            onClick={() => jumpToPage(item.page)}
                            className="text-left p-4 rounded-2xl bg-black/5 hover:bg-gold-400/20 border border-black/10 hover:border-gold-400/50 transition-all flex items-start gap-3.5 cursor-pointer group"
                          >
                            <span className="w-7 h-7 rounded-xl bg-purple-900 text-gold-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                              0{item.page}
                            </span>
                            <div className="min-w-0 flex-1">
                              <span className="text-[10px] uppercase font-bold tracking-wider opacity-60 block">
                                {item.category}
                              </span>
                              <h4 className="font-serif text-sm sm:text-base font-bold group-hover:text-purple-900 transition-colors leading-snug">
                                {item.title}
                              </h4>
                            </div>
                            <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                          </button>
                        ))}
                      </div>

                      <div className="pt-4 flex justify-between items-center border-t border-black/10">
                        <button
                          onClick={goToPrevPage}
                          className="text-xs font-bold text-purple-900 hover:text-purple-950 flex items-center gap-1 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Cover Page</span>
                        </button>
                        <button
                          onClick={goToNextPage}
                          className="px-6 py-2.5 rounded-full bg-purple-900 text-white font-extrabold text-xs shadow-md hover:bg-purple-950 flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Start Reading Articles</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 3. EDITORIAL ARTICLE VIEW */}
                  {activePageData.type === 'article' && (
                    <div className="pt-6 pb-2 space-y-6 animate-in fade-in duration-300">
                      
                      {/* Header */}
                      <div className="border-b border-black/10 pb-5">
                        <span className="text-[10px] uppercase font-mono font-extrabold tracking-widest text-gold-600 block mb-1">
                          Publication Essay • Page 0{activePageData.pageNum}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-4xl font-extrabold leading-tight">
                          {activePageData.title}
                        </h2>
                        
                        {activePageData.author && (
                          <div className="mt-2 flex items-center gap-2">
                            <span className="font-serif font-bold text-sm text-purple-900">
                              By {activePageData.author}
                            </span>
                            {activePageData.role && (
                              <span className="text-xs opacity-70">
                                — {activePageData.role}
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Pull Quote Box */}
                      {activePageData.pullQuote && (
                        <div className={`p-5 sm:p-6 rounded-2xl border-l-4 my-4 font-serif italic text-base sm:text-lg leading-relaxed ${themeConfig.quoteBg}`}>
                          {activePageData.pullQuote}
                        </div>
                      )}

                      {/* Paragraphs with Drop Cap on First Paragraph */}
                      <div className={`space-y-4 font-serif ${getFontSizeClass()}`}>
                        {activePageData.paragraphs?.map((p, idx) => (
                          <p key={idx} className="leading-relaxed">
                            {idx === 0 ? (
                              <>
                                <span className="float-left text-4xl sm:text-5xl font-serif font-bold leading-none pr-3 pt-1 text-purple-900">
                                  {p.charAt(0)}
                                </span>
                                {p.slice(1)}
                              </>
                            ) : (
                              p
                            )}
                          </p>
                        ))}
                      </div>

                      {/* Key Takeaways Section */}
                      {activePageData.takeaways && (
                        <div className="mt-6 p-5 rounded-2xl bg-black/5 border border-black/10 space-y-2">
                          <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-purple-900 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                            <span>Key Principles & Reflections</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                            {activePageData.takeaways.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bottom Page Navigation */}
                      <div className="pt-6 flex justify-between items-center border-t border-black/10">
                        <button
                          onClick={goToPrevPage}
                          className="px-4 py-2 rounded-xl text-xs font-bold hover:bg-black/5 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Previous Page</span>
                        </button>

                        <span className="text-xs font-mono font-bold opacity-60">
                          {currentPage} / {totalPages}
                        </span>

                        <button
                          onClick={goToNextPage}
                          disabled={currentPage >= totalPages}
                          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                            currentPage >= totalPages ? 'opacity-40 cursor-not-allowed' : 'hover:bg-black/5'
                          }`}
                        >
                          <span>Next Page</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  )}

                  {/* 4. BACK COVER VIEW */}
                  {activePageData.type === 'backcover' && (
                    <div className="pt-8 pb-4 text-center space-y-6 max-w-xl mx-auto animate-in fade-in duration-300">
                      
                      <div className="w-20 h-20 rounded-full bg-gold-400/20 border-2 border-gold-400 flex items-center justify-center text-gold-600 mx-auto">
                        <Sparkles className="w-10 h-10" />
                      </div>

                      <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-purple-950">
                        {activePageData.title}
                      </h2>

                      <p className="text-sm sm:text-base font-serif italic text-purple-900 font-bold">
                        "{activePageData.tagline}"
                      </p>

                      <div className="space-y-3 text-xs sm:text-sm leading-relaxed opacity-90 font-light">
                        {activePageData.paragraphs?.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>

                      <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
                        <button
                          onClick={handleDownload}
                          className="w-full sm:w-auto px-7 py-3 rounded-full bg-purple-900 hover:bg-purple-950 text-white font-extrabold text-xs shadow-luxury flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download High-Res PDF Copy</span>
                        </button>

                        <button
                          onClick={() => jumpToPage(1)}
                          className="w-full sm:w-auto px-7 py-3 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-extrabold text-xs border border-purple-300 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Back to Cover</span>
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              </div>

            </div>
          ) : (
            /* FULL ORIGINAL PDF EMBEDDED VIEWER */
            <div className="flex-1 w-full h-full flex flex-col relative bg-stone-900">
              
              {/* PDF Info Notice Bar */}
              <div className="bg-purple-950 px-4 py-2 border-b border-purple-800 text-purple-200 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold-400" />
                  <span>
                    Viewing full <strong>{currentEdition.pagesCount}-page</strong> official archival PDF edition for <strong>"{currentEdition.title}"</strong>.
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={encodeURI(currentEdition.pdfUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-300 flex items-center gap-1 font-bold"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Embedded PDF iframe */}
              <div className="flex-1 w-full relative">
                <iframe
                  src={`${encodeURI(currentEdition.pdfUrl)}#page=${currentPage}&toolbar=1&navpanes=0`}
                  title={`${currentEdition.title} PDF Document`}
                  className="w-full h-full border-0"
                />
              </div>

            </div>
          )}

          {/* 3. BOTTOM NAVIGATION & PROGRESS BAR */}
          <footer className="h-14 px-4 bg-[#1a0224] border-t border-purple-800/60 flex items-center justify-between text-white shrink-0 z-30">
            
            {/* Left: Previous Page Button */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage <= 1}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPage <= 1
                  ? 'opacity-40 cursor-not-allowed text-purple-400'
                  : 'bg-purple-900 hover:bg-purple-800 text-white'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Center: Interactive Page Slider & Jump Input */}
            <div className="flex items-center gap-3 max-w-sm w-full mx-2">
              <input
                type="range"
                min="1"
                max={totalPages}
                value={currentPage}
                onChange={(e) => jumpToPage(Number(e.target.value))}
                aria-label="Magazine page slider"
                className="w-full accent-gold-400 cursor-pointer h-1.5 bg-purple-950 rounded-lg"
              />
              
              <div className="flex items-center gap-1 shrink-0 text-xs font-mono font-bold text-gold-300">
                <span>Page</span>
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => jumpToPage(Number(e.target.value))}
                  aria-label="Direct page number input"
                  className="w-10 text-center bg-purple-900/80 border border-purple-700 rounded px-1 py-0.5 text-xs text-white focus:outline-none focus:border-gold-400"
                />
                <span className="text-purple-400">/ {totalPages}</span>
              </div>
            </div>

            {/* Right: Next Page Button */}
            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPage >= totalPages
                  ? 'opacity-40 cursor-not-allowed text-purple-400'
                  : 'bg-gold-400 hover:bg-gold-300 text-purple-950 font-extrabold'
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </footer>

        </main>

      </div>
    </div>
  );
}
