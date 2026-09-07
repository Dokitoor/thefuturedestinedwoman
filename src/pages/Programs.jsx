import React, { useState } from 'react';
import { PROGRAM_CATEGORIES, PROGRAMS, TRANSFORMATION_STEPS } from '../data/programsData';
import { Sparkles, ArrowRight, CheckCircle2, Clock, Users, MapPin, X, BookOpen } from 'lucide-react';

export default function Programs({ navigateTo, showToast }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filteredPrograms = activeCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === activeCategory);

  const handleEnrollClick = (program) => {
    setSelectedProgram(program);
  };

  const handleConfirmEnrollment = (e) => {
    e.preventDefault();
    showToast(
      'Application Submitted!',
      `Thank you for applying to "${selectedProgram.title}". Our admissions desk will review your submission and email you next steps.`
    );
    setSelectedProgram(null);
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-purple-50/50 py-16 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-400/40 text-purple-950 text-xs font-extrabold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Transformational Initiatives</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-extrabold text-purple-950 tracking-tight">
            Platforms to Learn, Grow, Connect, Lead, and Thrive.
          </h1>

          <p className="text-lg text-onyx-800 font-light max-w-3xl mx-auto leading-relaxed">
            Targeted mentorship cohorts, executive leadership labs, vocational incubators, and community outreaches engineered for holistic female development.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS & PROGRAM CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5">
          {PROGRAM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'purple-gradient-bg text-gold-300 shadow-md scale-105 border border-gold-400/50'
                  : 'bg-white text-purple-950 border border-purple-200/80 hover:bg-purple-50 hover:border-gold-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-editorial border border-gold-400/20 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="zoom-container h-52 relative">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-950/90 backdrop-blur-md border border-purple-300/40 text-purple-100 text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-purple-300 animate-pulse" />
                    <span>Coming Soon</span>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-purple-200 text-purple-950 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {prog.duration}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-purple-700 tracking-wider block mb-1">
                      {prog.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-purple-950 group-hover:text-purple-800 transition-colors leading-snug">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="text-xs text-onyx-800 leading-relaxed font-light">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-purple-100">
                    <span className="text-[11px] font-extrabold text-purple-950 block">Key Modules & Benefits:</span>
                    <ul className="space-y-1 text-xs text-onyx-800/90 font-medium">
                      {prog.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleEnrollClick(prog)}
                  className="w-full py-3.5 rounded-xl bg-purple-900 hover:bg-purple-950 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-purple-700"
                >
                  <Clock className="w-4 h-4 text-purple-200" />
                  <span>Coming Soon • Pre-Register</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. TRANSFORMATION FRAMEWORK TIMELINE */}
      <section className="bg-purple-50/50 py-20 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold-600">
              Structured Growth Pathway
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-purple-950">
              The 4-Step Transformation Framework
            </h2>
            <p className="text-onyx-800 font-light text-base">
              A progressive journey designed to take women from raw potential to high-impact leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRANSFORMATION_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-editorial border border-gold-400/20 relative flex flex-col justify-between group hover:border-gold-400 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl purple-gradient-bg text-gold-300 font-serif font-bold text-xl flex items-center justify-center mb-6 shadow-md border border-gold-400/30">
                    {step.step}
                  </div>
                  
                  <span className="text-[10px] uppercase font-extrabold text-gold-600 tracking-wider block mb-1">
                    {step.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold text-purple-950 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-onyx-800 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="w-full h-1 bg-gold-400/30 group-hover:bg-gold-400 rounded-full mt-6 transition-colors" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ENROLLMENT MODAL */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-luxury border-2 border-gold-400/40 relative">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 text-onyx-800 hover:text-purple-950"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-extrabold text-purple-700 uppercase tracking-widest block mb-1">
              Initiative Pre-Registration (Coming Soon)
            </span>
            <h3 className="font-serif text-2xl font-bold text-purple-950 mb-4">
              {selectedProgram.title}
            </h3>

            <form onSubmit={handleConfirmEnrollment} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-purple-950 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl border border-purple-200 text-xs text-onyx-900 focus:outline-none focus:border-purple-600 bg-purple-50/30"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-purple-950 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-purple-200 text-xs text-onyx-900 focus:outline-none focus:border-purple-600 bg-purple-50/30"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-purple-950 block mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-purple-200 text-xs text-onyx-900 focus:outline-none focus:border-purple-600 bg-purple-50/30"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-purple-900 hover:bg-purple-950 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer border border-purple-700 flex items-center justify-center gap-2"
              >
                <Clock className="w-4 h-4 text-purple-200" />
                <span>Pre-Register for Launch Updates</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

