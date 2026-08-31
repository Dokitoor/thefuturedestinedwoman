import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Heart, Shield, Award, CheckCircle2, Compass, Zap, Star } from 'lucide-react';
import MetricCounter from '../components/MetricCounter';
import CoreValuesMarquee from '../components/CoreValuesMarquee';
import { MAGAZINE_EDITIONS } from '../data/magazineData';

export default function Home({ navigateTo, openMagazineModal, showToast }) {
  const latestMagazine = MAGAZINE_EDITIONS[0];

  const pillars = [
    {
      number: '01',
      title: 'Personal Development',
      subtitle: 'Spiritual & Emotional Mastery',
      description: 'Discover divine identity, overcome past wounds, and build unshakeable confidence grounded in purpose.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      number: '02',
      title: 'Leadership & Mentorship',
      subtitle: 'Executive Poise & Governance',
      description: 'Equipping female leaders with executive presence, strategic decision-making, and high-impact mentorship.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop'
    },
    {
      number: '03',
      title: 'Skills & Entrepreneurship',
      subtitle: 'Vocational Mastery & Business',
      description: 'Building financial literacy, digital venture models, and vocational mastery to break economic dependence.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
    },
    {
      number: '04',
      title: 'Community & Advocacy',
      subtitle: 'Sisterhood & Social Reform',
      description: 'Fostering supportive sisterhood networks and advocating for the dignity and empowerment of vulnerable families.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION (Irmeja-Style Editorial Layout) */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-cream-100">
        
        {/* Soft Background Accents */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-plum-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Editorial Text Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Floating Luxury Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gold-400/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-widest text-plum-900">
                  Biannual Issue III Out Now
                </span>
                <span className="text-xs text-gold-600 font-serif font-bold italic">
                  — "Unveiling Purpose"
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold text-plum-950 tracking-tight leading-[1.05]">
                From Potential to <br />
                <span className="gold-gradient-text italic font-serif">Purposeful Impact.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-onyx-800 font-light leading-relaxed max-w-2xl">
                Empowering women and girls to discover their God-given identity, lead with unshakeable confidence, and transform generations.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('get-involved')}
                  className="px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-plum-950 font-bold text-sm tracking-wide shadow-luxury hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <span>Join the Movement</span>
                  <ArrowRight className="w-4 h-4 text-plum-950" />
                </button>

                <button
                  onClick={() => navigateTo('magazine')}
                  className="px-8 py-4 rounded-full bg-transparent hover:bg-plum-900 text-plum-900 hover:text-gold-300 font-bold text-sm tracking-wide border-2 border-plum-900 transition-all duration-300 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Publications</span>
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-8 border-t border-plum-100 flex items-center gap-8 text-xs text-onyx-800/80 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Mentorship Cohorts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Biannual Luxury Magazine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Generational Legacy</span>
                </div>
              </div>

            </div>

            {/* Right Editorial Portrait & Floating Badges (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-luxury border-4 border-white">
                  <img
                    src="/images/hero_portrait.png"
                    alt="The Future Destined Woman Leadership"
                    className="w-full h-[520px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-gold-300 font-bold block mb-1">
                      TFDW Visionary Network
                    </span>
                    <h3 className="font-serif text-2xl font-bold">
                      Raising Kingdom Female Leaders
                    </h3>
                  </div>
                </div>

                {/* Floating Micro Badge 1 */}
                <div className="absolute -top-6 -left-6 glass-plum text-white px-5 py-3 rounded-2xl shadow-2xl border border-gold-400/40 hidden sm:flex items-center gap-3 animate-float">
                  <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
                  <div>
                    <span className="text-xs font-bold block text-gold-300">10+ Core Programs</span>
                    <span className="text-[10px] text-cream-200">Personal & Executive Growth</span>
                  </div>
                </div>

                {/* Floating Micro Badge 2 */}
                <div className="absolute -bottom-6 -right-6 bg-white text-plum-950 px-5 py-3 rounded-2xl shadow-luxury border border-gold-400/30 hidden sm:flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-gold-600" />
                  <div>
                    <span className="text-xs font-bold block text-plum-950">3 Published Editions</span>
                    <span className="text-[10px] text-onyx-800/70">Available for Download</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. IMPACT COUNTER / METRICS STRIP */}
      <MetricCounter />

      {/* 3. MISSION & VISION EDITORIAL SPLIT */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              Our Foundational Blueprint
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-plum-950">
              Mission & Vision Strategy
            </h2>
            <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-editorial border border-gold-400/20 relative overflow-hidden group hover:border-gold-400 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl plum-gradient-bg border border-gold-400/40 flex items-center justify-center text-gold-300 mb-6 shadow-md">
                <Compass className="w-7 h-7" />
              </div>
              
              <span className="text-xs font-mono text-gold-600 uppercase tracking-widest block mb-2 font-bold">
                [ Our Purpose ]
              </span>
              <h3 className="font-serif text-3xl font-bold text-plum-950 mb-4">
                The Core Mission
              </h3>
              <p className="text-onyx-800 text-base leading-relaxed font-light mb-6">
                To equip, mentor, and inspire women and girls to unlock their divine potential, overcome systemic barriers, and lead purposeful, impact-driven lives across all sectors of society.
              </p>

              <ul className="space-y-2.5 text-xs font-medium text-plum-900 border-t border-plum-100 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Identity restoration & spiritual grounding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Vocational mastery & financial empowerment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Sisterhood networks for life-long mentorship</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="plum-gradient-bg text-cream-100 rounded-3xl p-8 sm:p-10 shadow-luxury border-2 border-gold-400/40 relative overflow-hidden group hover:border-gold-300 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/20 border border-gold-400 flex items-center justify-center text-gold-300 mb-6 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-2 font-bold">
                [ Our Horizon ]
              </span>
              <h3 className="font-serif text-3xl font-bold text-cream-50 mb-4">
                The Generational Vision
              </h3>
              <p className="text-cream-200 text-base leading-relaxed font-light mb-6">
                A world where every woman walks confidently in her God-given identity, breaking cycle boundaries, raising righteous families, and shaping institutions with integrity and grace.
              </p>

              <ul className="space-y-2.5 text-xs font-medium text-cream-100 border-t border-gold-400/20 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Multi-generational female leadership legacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Global biannual publication distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Sustainable community development initiatives</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FEATURED MAGAZINE SPOTLIGHT (3D Book Cover Perspective) */}
      <section className="py-24 bg-cream-100 border-y border-plum-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* 3D Book Perspective Mockup Column (5 Cols) */}
            <div className="lg:col-span-5 book-perspective flex justify-center">
              <div 
                onClick={() => openMagazineModal(0)}
                className="book-card cursor-pointer relative max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-400/40"
              >
                <img
                  src="/images/cover_ed3.png"
                  alt="The Destined Woman Magazine - Edition 3"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-gold-400 text-plum-950 text-[10px] font-black uppercase tracking-widest inline-block mb-2">
                    Click to Open Reader
                  </span>
                  <h4 className="font-serif text-2xl font-bold">
                    Edition 3 • Flagship Issue
                  </h4>
                </div>
              </div>
            </div>

            {/* Synopsis & Downloads Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-400/30 text-plum-900 text-xs font-bold tracking-widest uppercase">
                <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                <span>Featured Publication Spotlight</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-plum-950 leading-tight">
                The Destined Woman Magazine <br />
                <span className="gold-gradient-text italic font-serif">Edition 03 (Current Issue)</span>
              </h2>

              <p className="text-lg text-onyx-800 font-light leading-relaxed">
                A biannual luxury publication released once every two years—filled with inspiring real stories, godly wisdom, leadership masterclasses, and practical development tools.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                {latestMagazine.articles.map((art, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-plum-100 shadow-sm flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-plum-100 text-plum-900 font-serif font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-xs text-plum-950">{art.title}</h4>
                      <span className="text-[10px] text-onyx-800/60 block">{art.author}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Trigger Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openMagazineModal(0)}
                  className="px-7 py-3.5 rounded-full bg-plum-900 hover:bg-plum-800 text-gold-300 font-bold text-xs tracking-wider shadow-luxury transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-gold-400" />
                  <span>Preview & Download PDF</span>
                </button>

                <button
                  onClick={() => navigateTo('magazine')}
                  className="px-7 py-3.5 rounded-full bg-white hover:bg-plum-50 text-plum-950 font-bold text-xs tracking-wider border border-plum-200 transition-all flex items-center gap-2"
                >
                  <span>View All 3 Editions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. EMPOWERMENT PILLARS GRID */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              Core Strategic Foundations
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-plum-950">
              Empowerment Pillars
            </h2>
            <p className="text-onyx-800 font-light text-base">
              Four pillars designed to nurture holistic growth, executive poise, and social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pil, idx) => {
              const IconComp = pil.icon;
              return (
                <div
                  key={idx}
                  onClick={() => navigateTo('programs')}
                  className="bg-white rounded-3xl overflow-hidden shadow-editorial border border-gold-400/20 group hover:shadow-luxury transition-all duration-500 cursor-pointer flex flex-col justify-between"
                >
                  <div className="zoom-container h-48 relative">
                    <img
                      src={pil.image}
                      alt={pil.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-full plum-gradient-bg text-gold-300 flex items-center justify-center font-serif font-bold text-xs shadow-md">
                      {pil.number}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider block mb-1">
                        {pil.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-plum-950 mb-2 group-hover:text-gold-600 transition-colors">
                        {pil.title}
                      </h3>
                      <p className="text-xs text-onyx-800/80 leading-relaxed font-light">
                        {pil.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-plum-100 flex items-center justify-between text-xs font-bold text-plum-900 group-hover:text-gold-600">
                      <span>Explore Initiatives</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. CORE VALUES MARQUEE */}
      <CoreValuesMarquee onValueSelect={() => navigateTo('about')} />

      {/* 7. CALL TO ACTION STATEMENT BANNER */}
      <section className="plum-gradient-bg text-cream-100 py-20 relative overflow-hidden border-t-2 border-gold-400/30">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400 block">
            A Declaration of Purpose
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold text-cream-50 leading-tight">
            "Your present circumstances do not determine your destiny."
          </h2>
          <p className="text-cream-200 font-light text-base max-w-2xl mx-auto leading-relaxed">
            Step out of limits. Align with your divine blueprint. Join a community of purposeful women committed to changing generations.
          </p>
          <div className="pt-4">
            <button
              onClick={() => navigateTo('get-involved')}
              className="px-10 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-plum-950 font-extrabold text-sm tracking-wider shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Involved Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
