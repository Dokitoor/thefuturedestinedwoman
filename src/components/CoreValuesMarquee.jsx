import React from 'react';
import { CORE_VALUES } from '../data/valuesData';
import { Sparkles } from 'lucide-react';

export default function CoreValuesMarquee({ onValueSelect }) {
  // Duplicate array for seamless horizontal marquee loop
  const marqueeValues = [...CORE_VALUES, ...CORE_VALUES];

  return (
    <div className="plum-gradient-bg py-8 border-y-2 border-gold-400/30 overflow-hidden relative shadow-luxury">
      {/* Subtle Side Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-plum-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-plum-950 to-transparent z-10 pointer-events-none" />

      <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
        {marqueeValues.map((val, idx) => (
          <div 
            key={`${val.id}-${idx}`} 
            onClick={() => onValueSelect && onValueSelect(val)}
            className="flex items-center space-x-6 cursor-pointer group hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-3">
              <span className="font-serif text-2xl font-bold text-gold-300 group-hover:text-white transition-colors">
                {val.title}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cream-200/60 font-mono">
                [{val.number}]
              </span>
            </div>
            <Sparkles className="w-4 h-4 text-gold-400/60 group-hover:rotate-45 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  );
}
