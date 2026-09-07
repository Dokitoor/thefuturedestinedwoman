import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Users, Award, Compass } from 'lucide-react';

function AnimatedNumber({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Extract numeric target and any suffix like '+'
  const numericMatch = value.match(/(\d+)/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Smooth ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [hasAnimated, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function MetricCounter() {
  const metrics = [
    {
      icon: BookOpen,
      count: '3',
      label: 'Published Editions',
      sublabel: 'Biannual Flagship Magazines'
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
    <section className="w-full purple-gradient-bg text-white py-16 sm:py-20 relative overflow-hidden border-y-2 border-gold-400/40 shadow-2xl">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {metrics.map((m, idx) => {
            const IconComponent = m.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center p-4 sm:p-6 relative ${
                  idx !== metrics.length - 1 ? 'lg:border-r border-gold-400/20' : ''
                }`}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gold-400/20 border border-gold-400/60 flex items-center justify-center text-gold-300 mb-5 shadow-gold-glow transform transition-transform hover:scale-110">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Animated Count Display */}
                <div className="font-serif text-4xl sm:text-6xl font-extrabold gold-gradient-text block tracking-tight leading-none mb-2">
                  <AnimatedNumber value={m.count} />
                </div>

                {/* Metric Label */}
                <span className="text-base font-bold text-white tracking-wide block">
                  {m.label}
                </span>

                {/* Sublabel */}
                <span className="text-xs text-purple-200/90 font-light block mt-1">
                  {m.sublabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


