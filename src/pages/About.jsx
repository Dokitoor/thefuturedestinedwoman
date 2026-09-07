import React, { useState } from 'react';
import { CORE_VALUES } from '../data/valuesData';
import { Sparkles, Heart, Compass, Shield, Award, CheckCircle2, ArrowRight, Quote } from 'lucide-react';

export default function About({ navigateTo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const roadmapSteps = [
    {
      year: 'Phase I',
      title: 'Foundation & Identity Awakening',
      description: 'Birthed out of a deep conviction to restore identity, launching high school mentoring clubs and inaugural publication.'
    },
    {
      year: 'Phase II',
      title: 'Initiative Expansion & Leadership',
      description: 'Established executive cohorts, skills incubators, and expanded publication distribution across national hubs.'
    },
    {
      year: 'Phase III',
      title: 'Biannual Publication & Global Reach',
      description: 'Scaling biannual editions, micro-grant pools, and digital academy for women across 15+ countries.'
    },
    {
      year: 'Phase IV',
      title: 'Generational Legacy & Policy Advocacy',
      description: 'Forming strategic research partnerships and advocacy councils for female equity, family dignity, and leadership.'
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-purple-50/60 py-16 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-400/40 text-purple-950 text-xs font-bold tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 text-gold-600" />
            <span>Discover TFDW Identity</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-extrabold text-purple-950 tracking-tight">
            Our Story, Our Identity, Our Heart.
          </h1>

          <p className="text-lg text-onyx-800 font-light max-w-3xl mx-auto leading-relaxed">
            The Future Destined Woman (TFDW) is a premier women-focused empowerment organization committed to turning latent female potential into purposeful, multi-generational impact.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE & FOUNDATION STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-gold-600 font-bold uppercase tracking-widest block">
              [ Who We Are ]
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-purple-950 leading-tight">
              Birthed from Conviction, <br />
              <span className="gold-gradient-text italic font-serif">Sustained by Purpose.</span>
            </h2>

            <p className="text-onyx-800 text-base leading-relaxed font-light">
              TFDW was founded on the unshakeable premise that no woman is an accident of history. Across communities worldwide, thousands of brilliant women and young girls remain constrained by economic barriers, lack of mentorship, emotional wounding, and social limitations.
            </p>

            <p className="text-onyx-800 text-base leading-relaxed font-light">
              We bridge this divide by offering structured personal development cohorts, executive leadership training, vocational mastery, and our flagship biannual luxury publication — creating an atmosphere where women thrive spiritually, intellectually, and economically.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => navigateTo('get-involved')}
                className="px-6 py-3 rounded-full bg-purple-950 text-gold-300 font-bold text-xs shadow-md hover:bg-purple-800 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Be Part of Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-luxury border-2 border-gold-400/40 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-bl-full pointer-events-none" />

              <Quote className="w-12 h-12 text-gold-400/50" />

              <blockquote className="font-serif text-2xl text-purple-950 font-bold leading-relaxed italic">
                "We do not merely equip women for survival; we awaken them to reign in their God-given assignments with excellence and unyielding integrity."
              </blockquote>

              <div className="pt-4 border-t border-purple-100 flex items-center justify-between text-xs text-onyx-800/80">
                <div>
                  <span className="font-bold text-purple-950 block">The TFDW Leadership Council</span>
                  <span className="text-[10px] text-gold-600 font-semibold">Empowerment & Purpose</span>
                </div>
                <div className="w-9 h-9 rounded-full purple-gradient-bg text-gold-300 font-serif font-bold text-xs flex items-center justify-center shadow-md border border-gold-400">
                  TFDW
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR JOURNEY FORWARD (ROADMAP TIMELINE) */}
      <section className="bg-purple-50/50 py-20 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              Generational Roadmap
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-purple-950">
              Our Journey Forward
            </h2>
            <p className="text-onyx-800 font-light text-base">
              A structured multi-generational blueprint designed for sustainable societal impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-editorial border border-gold-400/20 relative flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-gold-100 text-gold-800 font-mono font-bold text-xs inline-block mb-3">
                    {step.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-purple-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-onyx-800/80 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-gold-400 to-purple-800 rounded-full mt-6" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE 10 CORE VALUES SHOWCASE (2-Column Editorial Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
            Uncompromising Standards
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-purple-950">
            Our 10 Core Values
          </h2>
          <p className="text-onyx-800 font-light text-base">
            The foundational pillars that shape our culture, cohorts, and publications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_VALUES.map((val) => (
            <div 
              key={val.id}
              className="bg-white rounded-3xl p-8 shadow-editorial border border-gold-400/20 hover:border-gold-400 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl purple-gradient-bg text-gold-300 font-serif font-bold text-sm flex items-center justify-center shadow-md">
                  {val.number}
                </span>
                <span className="text-xs font-serif italic text-gold-600 font-semibold">
                  {val.subtitle}
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-purple-950 mb-2 group-hover:text-gold-600 transition-colors">
                {val.title}
              </h3>

              <p className="text-sm text-onyx-800 leading-relaxed font-light mb-4">
                {val.description}
              </p>

              <div className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-xs italic text-purple-950 font-serif font-semibold">
                {val.quote}
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

