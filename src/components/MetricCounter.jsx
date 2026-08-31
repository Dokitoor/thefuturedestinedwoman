import React from 'react';
import { BookOpen, Users, Award, Compass } from 'lucide-react';

export default function MetricCounter() {
  const metrics = [
    {
      icon: BookOpen,
      count: '3',
      label: 'Published Editions',
      sublabel: 'Luxury Biannual Magazines'
    },
    {
      icon: Award,
      count: '10+',
      label: 'Core Programs',
      sublabel: 'Mentorship & Leadership Cohorts'
    },
    {
      icon: Users,
      count: '500+',
      label: 'Lives Impacted',
      sublabel: 'Women & Girls Empowered'
    },
    {
      icon: Compass,
      count: '1',
      label: 'Generational Vision',
      sublabel: 'Transforming Society'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-editorial border border-gold-400/20 grid grid-cols-2 lg:grid-cols-4 gap-8 relative overflow-hidden">
        {/* Subtle Decorative Gold Corner Lines */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-bl-full pointer-events-none" />

        {metrics.map((m, idx) => {
          const IconComponent = m.icon;
          return (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center p-4 relative ${
                idx !== metrics.length - 1 ? 'lg:border-r border-plum-100' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-full plum-gradient-bg border border-gold-400/40 flex items-center justify-center text-gold-300 mb-4 shadow-md">
                <IconComponent className="w-5 h-5" />
              </div>
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-plum-950 block tracking-tight">
                {m.count}
              </span>
              <span className="text-sm font-bold text-plum-800 mt-1 block">
                {m.label}
              </span>
              <span className="text-xs text-onyx-800/70 font-light block mt-0.5">
                {m.sublabel}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
