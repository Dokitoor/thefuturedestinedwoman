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
      <section className="bg-cream-100 py-16 border-b border-plum-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-400/30 text-plum-900 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Transformational Initiatives</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-extrabold text-plum-950 tracking-tight">
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
        <div className="flex items-center justify-center flex-wrap gap-2">
          {PROGRAM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'plum-gradient-bg text-gold-300 shadow-md scale-105'
                  : 'bg-white text-plum-900 border border-plum-100 hover:bg-plum-50'
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
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-plum text-gold-300 text-[10px] font-bold uppercase tracking-wider">
                    {prog.duration}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider block mb-1">
                      {prog.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-plum-950 group-hover:text-gold-600 transition-colors leading-snug">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="text-xs text-onyx-800 leading-relaxed font-light">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-plum-50">
                    <span className="text-[11px] font-bold text-plum-900 block">Key Modules & Benefits:</span>
                    <ul className="space-y-1 text-xs text-onyx-800/80">
                      {prog.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
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
                  className="w-full py-3 rounded-xl bg-plum-900 hover:bg-plum-800 text-gold-300 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply / Join Cohort</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 3. TRANSFORMATION FRAMEWORK TIMELINE */}
      <section className="bg-cream-50 py-20 border-y border-plum-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              Structured Growth Pathway
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-plum-950">
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
                  <div className="w-12 h-12 rounded-2xl plum-gradient-bg text-gold-300 font-serif font-bold text-xl flex items-center justify-center mb-6 shadow-md">
                    {step.step}
                  </div>
                  
                  <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider block mb-1">
                    {step.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold text-plum-950 mb-3">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum-950/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-luxury border-2 border-gold-400/40 relative">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 text-onyx-800 hover:text-plum-900"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold text-gold-600 uppercase tracking-widest block mb-1">
              Cohort Application
            </span>
            <h3 className="font-serif text-2xl font-bold text-plum-950 mb-4">
              {selectedProgram.title}
            </h3>

            <form onSubmit={handleConfirmEnrollment} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-plum-900 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl border border-plum-200 text-xs text-onyx-900 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-plum-900 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-plum-200 text-xs text-onyx-900 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-plum-900 block mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-plum-200 text-xs text-onyx-900 focus:outline-none focus:border-gold-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-plum-950 font-bold text-xs shadow-md transition-all"
              >
                Submit Cohort Application
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
