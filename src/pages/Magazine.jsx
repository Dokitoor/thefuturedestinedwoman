import React, { useState } from 'react';
import { MAGAZINE_EDITIONS } from '../data/magazineData';
import { BookOpen, Download, Share2, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Magazine({ openMagazineModal, showToast }) {
  const [alertEmail, setAlertEmail] = useState('');

  const handleSubscribeAlert = (e) => {
    e.preventDefault();
    if (!alertEmail) return;
    showToast(
      'Notification Set!',
      `You will be among the first to receive Edition 4 of The Destined Woman Magazine directly in your inbox upon release.`
    );
    setAlertEmail('');
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-cream-100 py-16 border-b border-plum-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-400/30 text-plum-900 text-xs font-bold tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5 text-gold-600" />
            <span>Biannual Luxury Publication</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-extrabold text-plum-950 tracking-tight">
            The Destined Woman Magazine
          </h1>

          <p className="text-lg text-onyx-800 font-light max-w-3xl mx-auto leading-relaxed">
            A biannual luxury publication released once every two years—filled with inspiring real stories, godly wisdom, leadership masterclasses, and practical development tools.
          </p>
        </div>
      </section>

      {/* 2. CURATED ARCHIVE (3 EDITIONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Edition 3 (Featured Issue) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-luxury border-2 border-gold-400/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/10 rounded-bl-full pointer-events-none" />

          <div className="lg:col-span-5 book-perspective flex justify-center">
            <div 
              onClick={() => openMagazineModal(0)}
              className="book-card cursor-pointer relative max-w-xs rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-400/40"
            >
              <img
                src={MAGAZINE_EDITIONS[0].coverImage}
                alt={MAGAZINE_EDITIONS[0].title}
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-gold-400 text-plum-950 text-[9px] font-black uppercase tracking-widest inline-block mb-1">
                  Click to Read Sample
                </span>
                <h4 className="font-serif text-xl font-bold">
                  {MAGAZINE_EDITIONS[0].editionNumber} • Current Issue
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-gold-600 uppercase tracking-widest">
              <span>{MAGAZINE_EDITIONS[0].editionNumber}</span>
              <span>•</span>
              <span>{MAGAZINE_EDITIONS[0].releaseDate}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-plum-950">
              {MAGAZINE_EDITIONS[0].title}
            </h2>

            <p className="text-sm text-gold-700 font-serif italic text-lg">
              "{MAGAZINE_EDITIONS[0].theme}"
            </p>

            <p className="text-sm text-onyx-800 font-light leading-relaxed">
              {MAGAZINE_EDITIONS[0].synopsis}
            </p>

            <div className="space-y-2 pt-2 border-t border-plum-100">
              <span className="text-xs font-bold text-plum-900 block">Featured Articles & Essays:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-onyx-800">
                {MAGAZINE_EDITIONS[0].articles.map((art, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>{art.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openMagazineModal(0)}
                className="px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-plum-950 font-bold text-xs shadow-luxury transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-plum-950" />
                <span>Download Free PDF Issue</span>
              </button>

              <button
                onClick={() => openMagazineModal(0)}
                className="px-6 py-3.5 rounded-full bg-white border border-plum-200 text-plum-900 font-bold text-xs hover:bg-plum-50 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Digital Reader</span>
              </button>
            </div>
          </div>
        </div>

        {/* Editions 2 & 1 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MAGAZINE_EDITIONS.slice(1).map((ed, idx) => (
            <div
              key={ed.id}
              className="bg-white rounded-3xl p-8 shadow-editorial border border-gold-400/20 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-widest">
                    {ed.editionNumber}
                  </span>
                  <span className="text-xs text-onyx-800/60 font-mono">
                    {ed.releaseDate}
                  </span>
                </div>

                <div className="flex gap-6 items-start mb-6">
                  <div 
                    onClick={() => openMagazineModal(idx + 1)}
                    className="w-32 shrink-0 rounded-xl overflow-hidden shadow-md border-2 border-gold-400/30 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <img
                      src={ed.coverImage}
                      alt={ed.title}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-plum-950 mb-1">
                      {ed.title}
                    </h3>
                    <p className="text-xs text-gold-700 italic font-serif mb-2">
                      "{ed.theme}"
                    </p>
                    <p className="text-xs text-onyx-800/80 leading-relaxed font-light">
                      {ed.synopsis}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-plum-100 flex items-center justify-between">
                <button
                  onClick={() => openMagazineModal(idx + 1)}
                  className="px-6 py-2.5 rounded-full bg-plum-900 hover:bg-plum-800 text-gold-300 font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-gold-400" />
                  <span>Download Issue PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. RELEASE ALERT SUBSCRIPTION CARD */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="plum-gradient-bg text-cream-100 rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-gold-400/40 text-center space-y-6 relative overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center text-gold-300 mx-auto">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50">
            Never Miss a 2-Year Biannual Edition
          </h3>

          <p className="text-sm text-cream-200/90 font-light max-w-xl mx-auto leading-relaxed">
            Be notified immediately when Edition 4 is published. Get exclusive subscriber access to downloadable tools, keynote audio excerpts, and bonus essays.
          </p>

          <form onSubmit={handleSubscribeAlert} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={alertEmail}
              onChange={(e) => setAlertEmail(e.target.value)}
              placeholder="Enter your email for release alerts"
              className="flex-1 px-5 py-3 rounded-full bg-plum-950/90 border border-gold-400/40 text-cream-100 placeholder-cream-300/50 text-xs focus:outline-none focus:border-gold-300"
              required
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-gold-400 text-plum-950 font-bold text-xs hover:bg-gold-300 transition-colors shadow-md shrink-0 flex items-center justify-center gap-2"
            >
              <span>Notify Me</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
