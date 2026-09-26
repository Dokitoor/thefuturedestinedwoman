import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Heart, Award, CheckCircle2, Compass, Zap, Star, Users, Globe, Shield, Clock } from 'lucide-react';
import MetricCounter from '../components/MetricCounter';
import CoreValuesMarquee from '../components/CoreValuesMarquee';
import { MAGAZINE_EDITIONS } from '../data/magazineData';

export default function Home({ navigateTo, openMagazineModal, openMagazineReader, showToast }) {
  const latestMagazine = MAGAZINE_EDITIONS[0];

  const pillars = [
    {
      number: '01',
      title: 'Personal Development',
      subtitle: 'Identity & Spiritual Grounding',
      description: 'Discover divine identity, overcome past limitations, and build unshakeable confidence grounded in purpose.',
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
      subtitle: 'Vocational & Financial Mastery',
      description: 'Building financial literacy, digital venture models, and vocational mastery to break economic dependence.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
    },
    {
      number: '04',
      title: 'Community & Advocacy',
      subtitle: 'Sisterhood & Social Reform',
      description: 'Fostering supportive sisterhood networks and advocating for the dignity and rights of vulnerable women.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION (2-Column "2L" Split Layout) */}
      <section className="relative pt-24 pb-0 lg:pt-28 flex items-end overflow-hidden bg-purple-50/50 border-b border-purple-200/80">
        
        {/* Soft Background Radial Accent Glows */}
        <div className="absolute top-16 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
            
            {/* LEFT COLUMN: Narrative, Headline & CTAs (Shifted Higher) */}
            <div className="lg:col-span-7 space-y-6 pb-8 lg:pb-12 pt-2">

              {/* Main Impact Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold text-purple-950 tracking-tight leading-[1.03]">
                Until Every Woman <br />
                <span className="purple-gradient-text italic font-serif">Walks in Destiny.</span>
              </h1>

              {/* Subheadline Paragraph */}
              <p className="text-lg sm:text-xl text-onyx-800 font-light leading-relaxed max-w-xl">
                The Future Destined Woman (TFDW) is an international movement championing gender equality, leadership, and transformative empowerment for women and girls across the globe.
              </p>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('get-involved')}
                  className="px-8 py-4 rounded-full bg-purple-900 hover:bg-purple-950 text-white font-extrabold text-sm tracking-wide shadow-luxury transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer border border-purple-700"
                >
                  <span>Join the Movement</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <button
                  onClick={() => (openMagazineReader ? openMagazineReader(0) : openMagazineModal(0))}
                  className="px-8 py-4 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-extrabold text-sm tracking-wide border-2 border-purple-950 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm group"
                >
                  <BookOpen className="w-4 h-4 text-purple-800 group-hover:rotate-12 transition-transform" />
                  <span>Read Magazine Online</span>
                </button>
              </div>

              {/* Trust & Program Badges */}
              <div className="pt-6 border-t border-purple-200/80 grid grid-cols-3 gap-4 text-xs text-purple-950 font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Leadership Cohorts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Biannual Publications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Global Sisterhood</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Diagonally Enlarged Transparent Cutout Portrait Flush to Hero Section Bottom */}
            <div className="lg:col-span-5 relative flex justify-center items-end h-[580px] sm:h-[680px] lg:h-[780px] w-full overflow-hidden">
              {/* Soft Ambient Depth Glow */}
              <div className="absolute bottom-10 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

              {/* Transparent Cutout Image Diagonally Scaled & Anchored Flush at Bottom */}
              <img
                src="/images/hero_portrait.png"
                alt="The Future Destined Woman Leadership"
                className="relative z-10 w-full h-full max-h-[620px] sm:max-h-[720px] lg:max-h-[820px] object-contain object-bottom drop-shadow-2xl translate-y-1 transform scale-110 sm:scale-115 lg:scale-120 origin-bottom transition-transform duration-500"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. IMPACT COUNTER METRICS STRIP */}
      <MetricCounter />

      {/* 3. MISSION & VISION (2-Column "2L" Split Layout) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold-600">
              Foundational Pillars
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-purple-950">
              Mission & Vision Strategy
            </h2>
            <div className="w-16 h-1 bg-gold-400 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Column 1: Core Mission Card */}
            <div className="bg-purple-50/50 rounded-3xl p-8 sm:p-12 shadow-editorial border border-gold-400/30 relative overflow-hidden group hover:border-gold-400 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl purple-gradient-bg border border-gold-400/40 flex items-center justify-center text-gold-300 mb-6 shadow-md">
                <Compass className="w-7 h-7" />
              </div>
              
              <span className="text-xs font-mono text-gold-600 uppercase tracking-widest block mb-2 font-bold">
                [ Our Purpose ]
              </span>
              <h3 className="font-serif text-3xl font-bold text-purple-950 mb-4">
                The Core Mission
              </h3>
              <p className="text-onyx-800 text-base leading-relaxed font-light mb-8">
                To equip, mentor, and inspire women and girls to unlock their divine potential, overcome systemic barriers, and lead purposeful, impact-driven lives across all sectors of society.
              </p>

              <ul className="space-y-3 text-xs font-bold text-purple-950 border-t border-purple-200/80 pt-6">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Identity restoration & spiritual grounding</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Vocational mastery & financial independence</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Sisterhood networks for life-long mentorship</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Generational Vision Card */}
            <div className="purple-gradient-bg text-purple-50 rounded-3xl p-8 sm:p-12 shadow-luxury border-2 border-gold-400/40 relative overflow-hidden group hover:border-gold-300 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/20 border border-gold-400 flex items-center justify-center text-gold-300 mb-6 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-2 font-bold">
                [ Our Horizon ]
              </span>
              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                The Generational Vision
              </h3>
              <p className="text-purple-200 text-base leading-relaxed font-light mb-8">
                A world where every woman walks confidently in her God-given identity, breaking cycle boundaries, raising righteous families, and shaping institutions with integrity and grace.
              </p>

              <ul className="space-y-3 text-xs font-bold text-purple-100 border-t border-gold-400/30 pt-6">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Multi-generational female leadership legacy</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Global biannual publication distribution</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Sustainable community development initiatives</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. STRATEGIC PILLARS & INITIATIVES (2-Column "2L" Section: Left Sticky Title, Right 4-Grid Cards) */}
      <section className="py-24 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Sticky Section Header & Core Quote (4 Cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-950 font-extrabold text-xs tracking-widest uppercase">
                <Clock className="w-3.5 h-3.5 text-purple-800 animate-pulse" />
                <span>Coming Soon • Initiatives</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-purple-950 leading-tight">
                Our Strategic <br />
                <span className="purple-gradient-text italic font-serif">Initiatives & Pillars</span>
              </h2>

              <p className="text-onyx-800 text-base font-light leading-relaxed">
                Upcoming mentorship cohorts, executive leadership labs, and empowerment programs designed to nurture holistic female transformation.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('programs')}
                  className="px-6 py-3 rounded-full bg-purple-900 text-white font-bold text-xs tracking-wider shadow-md hover:bg-purple-950 transition-all flex items-center gap-2 border border-purple-700"
                >
                  <span>Explore Upcoming Initiatives</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: 2-Column Grid of 4 Pillar Cards with COMING SOON Badges (8 Cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pil, idx) => {
                const IconComp = pil.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      showToast('Initiative Launching Soon', `"${pil.title}" cohort applications will open soon. Join our mailing digest to be notified first!`);
                    }}
                    className="bg-white rounded-3xl overflow-hidden shadow-editorial border border-purple-200/80 group hover:shadow-luxury transition-all duration-500 cursor-pointer flex flex-col justify-between relative"
                  >
                    <div className="zoom-container h-44 relative">
                      <img
                        src={pil.image}
                        alt={pil.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-purple-900 text-white flex items-center justify-center font-serif font-bold text-xs shadow-md">
                        {pil.number}
                      </div>

                      {/* Prominent Coming Soon Pill Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-950/90 backdrop-blur-md border border-purple-300/40 text-purple-100 text-[10px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-purple-300 animate-pulse" />
                        <span>Coming Soon</span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] uppercase font-extrabold text-purple-700 tracking-wider">
                            {pil.subtitle}
                          </span>
                          <span className="text-[9px] font-mono text-purple-950 font-bold bg-purple-100 px-2 py-0.5 rounded">
                            Cohort 2026
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-purple-950 mb-2 group-hover:text-purple-800 transition-colors">
                          {pil.title}
                        </h3>

                        <p className="text-xs text-onyx-800/80 leading-relaxed font-light">
                          {pil.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-xs font-extrabold text-purple-950 group-hover:text-purple-800">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-purple-700" />
                          <span>Coming Soon • Pre-Register</span>
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. FEATURED PUBLICATION SPOTLIGHT (2-Column "2L" Layout) */}
      <section className="py-24 bg-white border-y border-purple-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: 3D Perspective Book Cover (5 Cols) */}
            <div className="lg:col-span-5 book-perspective flex justify-center">
              <div 
                onClick={() => (openMagazineReader ? openMagazineReader(0) : openMagazineModal(0))}
                className="book-card cursor-pointer relative max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-400/40 group"
              >
                <img
                  src="/images/cover_ed3.png"
                  alt="The Destined Woman Magazine - Edition 3"
                  className="w-full h-[490px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3.5 py-1 rounded-full bg-gold-400 text-purple-950 text-[10px] font-extrabold uppercase tracking-widest inline-flex items-center gap-1.5 mb-2 shadow-md border border-gold-300">
                    <Sparkles className="w-3.5 h-3.5 text-purple-950" />
                    <span>Click to Read Online</span>
                  </span>
                  <h4 className="font-serif text-2xl font-bold">
                    Edition 3 • Flagship Publication
                  </h4>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Publication Synopsis & Downloads (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-400/40 text-purple-950 text-xs font-bold tracking-widest uppercase">
                <BookOpen className="w-3.5 h-3.5 text-gold-600" />
                <span>Featured Publication Spotlight</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-purple-950 leading-tight">
                The Destined Woman Magazine <br />
                <span className="gold-gradient-text italic font-serif">Edition 03 (Current Issue)</span>
              </h2>

              <p className="text-lg text-onyx-800 font-light leading-relaxed">
                A biannual luxury publication released once every two years—filled with inspiring real stories, godly wisdom, leadership masterclasses, and practical development tools for women.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                {latestMagazine.articles.map((art, idx) => (
                  <div key={idx} className="bg-purple-50/60 p-4 rounded-2xl border border-purple-200/60 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-purple-800 text-gold-300 font-serif font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-xs text-purple-950">{art.title}</h4>
                      <span className="text-[10px] text-onyx-800/60 block">{art.author}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => (openMagazineReader ? openMagazineReader(0) : openMagazineModal(0))}
                  className="px-7 py-3.5 rounded-full bg-purple-950 hover:bg-purple-800 text-gold-300 font-bold text-xs tracking-wider shadow-luxury transition-all flex items-center gap-2 cursor-pointer hover:scale-102"
                >
                  <BookOpen className="w-4 h-4 text-gold-400" />
                  <span>Read Online (Interactive Reader)</span>
                </button>

                <button
                  onClick={() => openMagazineModal(0)}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-purple-50 text-purple-950 font-bold text-xs tracking-wider border border-purple-300 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={() => navigateTo('magazine')}
                  className="px-6 py-3.5 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-900 font-bold text-xs tracking-wider border border-purple-200 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>All 3 Editions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. CORE VALUES MARQUEE */}
      <CoreValuesMarquee onValueSelect={() => navigateTo('about')} />

      {/* 7. DUAL ACTION CALLOUT BANNER (2-Column "2L" Split Layout) */}
      <section className="py-20 bg-purple-950 text-white relative overflow-hidden border-t-2 border-gold-400/40">
        
        {/* Background Subtle Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(132,36,143,0.3)_0%,rgba(18,2,26,0.95)_75%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Split Card 1: Join Sisterhood */}
            <div className="bg-purple-900/60 border border-gold-400/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-2 font-bold">
                  [ Empower A Woman ]
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                  Sponsor Leadership Cohorts
                </h3>
                <p className="text-purple-200 text-sm leading-relaxed font-light">
                  Directly fund vocational workshops, leadership training, and educational grants for vulnerable women and young girls.
                </p>
              </div>

              <div>
                <button
                  onClick={() => navigateTo('get-involved')}
                  className="px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-purple-950 font-extrabold text-xs tracking-wider shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Support A Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split Card 2: Volunteer & Mentorship */}
            <div className="bg-purple-900/60 border border-gold-400/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-2 font-bold">
                  [ Share Your Voice ]
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
                  Become a Mentor & Partner
                </h3>
                <p className="text-purple-200 text-sm leading-relaxed font-light">
                  Lend your expertise, facilitate workshops, or write for our biannual flagship publication to impact lives globally.
                </p>
              </div>

              <div>
                <button
                  onClick={() => navigateTo('get-involved')}
                  className="px-8 py-3.5 rounded-full bg-transparent hover:bg-purple-800 text-gold-300 font-extrabold text-xs tracking-wider border-2 border-gold-400/60 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Join As A Partner</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

