import React, { useState } from 'react';
import { Heart, Users, Handshake, Send, CheckCircle2, Sparkles, Phone, Mail, User, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GetInvolved({ showToast }) {
  const [activePathway, setActivePathway] = useState('women');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestCategory: 'Mentee / Program Participant',
    message: ''
  });

  const pathways = [
    {
      id: 'women',
      title: 'For Women & Girls',
      subtitle: 'Join Cohorts & Mentorship',
      description: 'Discover your divine identity, enroll in mentorship cohorts, attend masterclasses, and connect with a supportive sisterhood.',
      icon: Heart,
      badge: 'Path 01'
    },
    {
      id: 'mentors',
      title: 'For Mentors & Volunteers',
      subtitle: 'Share Skill & Wisdom',
      description: 'Pour your professional experience, spiritual maturity, and time into guiding the next generation of female leaders.',
      icon: Users,
      badge: 'Path 02'
    },
    {
      id: 'partners',
      title: 'For Partners & Sponsors',
      subtitle: 'Fund Outreaches & Publications',
      description: 'Sponsor academic scholarships, fund micro-grants for female founders, and support our biannual luxury publication.',
      icon: Handshake,
      badge: 'Path 03'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#581C38', '#C5A059']
      });
    } catch (err) {}

    showToast(
      'Inquiry Sent Successfully!',
      `Thank you ${formData.fullName}! Your request as a "${formData.interestCategory}" has been received. Our team will contact you within 24-48 hours.`
    );

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interestCategory: 'Mentee / Program Participant',
      message: ''
    });
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-cream-100 py-16 border-b border-plum-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-400/30 text-plum-900 text-xs font-bold tracking-widest uppercase">
            <Heart className="w-3.5 h-3.5 text-gold-600" />
            <span>Join The Movement</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-extrabold text-plum-950 tracking-tight">
            Be Part of the Destiny.
          </h1>

          <p className="text-lg text-onyx-800 font-light max-w-3xl mx-auto leading-relaxed">
            Whether you are seeking mentorship, eager to volunteer your skills, or looking to partner financially, your presence strengthens our generational mission.
          </p>
        </div>
      </section>

      {/* 2. THREE DIRECT PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((path) => {
            const IconComp = path.icon;
            const isSelected = activePathway === path.id;
            return (
              <div
                key={path.id}
                onClick={() => {
                  setActivePathway(path.id);
                  if (path.id === 'women') setFormData(prev => ({ ...prev, interestCategory: 'Mentee / Program Participant' }));
                  if (path.id === 'mentors') setFormData(prev => ({ ...prev, interestCategory: 'Volunteer / Mentor' }));
                  if (path.id === 'partners') setFormData(prev => ({ ...prev, interestCategory: 'Partner / Sponsor' }));
                }}
                className={`rounded-3xl p-8 shadow-editorial border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'plum-gradient-bg text-cream-100 border-gold-400 shadow-luxury scale-105'
                    : 'bg-white text-plum-950 border-gold-400/20 hover:border-gold-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isSelected ? 'bg-gold-400 text-plum-950' : 'plum-gradient-bg text-gold-300'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-widest ${
                      isSelected ? 'text-gold-400' : 'text-gold-600'
                    }`}>
                      {path.badge}
                    </span>
                  </div>

                  <span className={`text-[10px] uppercase font-bold tracking-wider block mb-1 ${
                    isSelected ? 'text-gold-300' : 'text-gold-600'
                  }`}>
                    {path.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl font-bold mb-3">
                    {path.title}
                  </h3>

                  <p className={`text-xs leading-relaxed font-light ${
                    isSelected ? 'text-cream-200' : 'text-onyx-800/80'
                  }`}>
                    {path.description}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t text-xs font-bold flex items-center justify-between ${
                  isSelected ? 'border-gold-400/30 text-gold-300' : 'border-plum-100 text-plum-900'
                }`}>
                  <span>Select Pathway</span>
                  <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-gold-400' : 'text-gold-600'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTERACTIVE INQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-luxury border-2 border-gold-400/30 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
              Get Connected
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum-950">
              Complete Your Engagement Interest
            </h2>
            <p className="text-xs text-onyx-800/80 font-light max-w-md mx-auto">
              Selected Pathway: <strong className="text-plum-900 font-bold">{formData.interestCategory}</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label className="text-xs font-bold text-plum-950 uppercase tracking-wide block mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gold-600" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Victoria Sterling"
                  className="w-full px-4 py-3 rounded-xl border border-plum-200 text-xs text-onyx-900 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-plum-950 uppercase tracking-wide block mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold-600" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="victoria@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-plum-200 text-xs text-onyx-900 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-plum-950 uppercase tracking-wide block mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-600" />
                  <span>Phone / WhatsApp *</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-plum-200 text-xs text-onyx-900 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-plum-950 uppercase tracking-wide block mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span>Interest Category *</span>
                </label>
                <select
                  value={formData.interestCategory}
                  onChange={(e) => setFormData({ ...formData, interestCategory: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-plum-200 text-xs text-onyx-900 focus:outline-none focus:border-gold-500 bg-white"
                >
                  <option value="Mentee / Program Participant">Mentee / Program Participant</option>
                  <option value="Volunteer / Mentor">Volunteer / Mentor</option>
                  <option value="Partner / Sponsor">Partner / Sponsor</option>
                  <option value="Magazine Contributor">Magazine Contributor / Writer</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

            </div>

            <div>
              <label className="text-xs font-bold text-plum-950 uppercase tracking-wide block mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                <span>Your Message or Vision Statement</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about yourself, your background, or how you would like to partner with TFDW..."
                className="w-full px-4 py-3 rounded-xl border border-plum-200 text-xs text-onyx-900 focus:outline-none focus:border-gold-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gold-400 hover:bg-gold-300 text-plum-950 font-bold text-xs shadow-luxury transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95"
            >
              <Send className="w-4 h-4 text-plum-950" />
              <span>Submit Engagement Request</span>
            </button>
          </form>

        </div>
      </section>

    </div>
  );
}
