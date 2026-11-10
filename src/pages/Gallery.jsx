import React, { useState, useEffect } from 'react';
import { 
  Heart, MapPin, Sparkles, X, ChevronLeft, ChevronRight, 
  Download, Share2, ArrowRight, CheckCircle2
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_PROJECT, GALLERY_PHOTOS } from '../data/galleryData';

export default function Gallery({ navigateTo, showToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState({});
  const [likeCounts, setLikeCounts] = useState(() => {
    const initial = {};
    GALLERY_PHOTOS.forEach(photo => {
      initial[photo.id] = photo.likes || 120;
    });
    return initial;
  });

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(photo => photo.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        goToNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        goToPrevPhoto();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredPhotos.length]);

  const openLightbox = (photoId) => {
    const index = filteredPhotos.findIndex(p => p.id === photoId);
    setActiveLightboxIndex(index >= 0 ? index : 0);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const goToNextPhoto = () => {
    if (activeLightboxIndex !== null && activeLightboxIndex < filteredPhotos.length - 1) {
      setActiveLightboxIndex(prev => prev + 1);
    } else {
      setActiveLightboxIndex(0);
    }
  };

  const goToPrevPhoto = () => {
    if (activeLightboxIndex !== null && activeLightboxIndex > 0) {
      setActiveLightboxIndex(prev => prev - 1);
    } else {
      setActiveLightboxIndex(filteredPhotos.length - 1);
    }
  };

  const handleSharePhoto = (photo) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + photo.src);
      if (showToast) {
        showToast('Photo Link Copied!', `Direct link to "${photo.title}" copied to clipboard.`);
      }
    }
  };

  const toggleLike = (e, photoId) => {
    e.stopPropagation();
    const isLiked = !!likedPhotos[photoId];
    setLikedPhotos(prev => ({ ...prev, [photoId]: !isLiked }));
    setLikeCounts(prev => ({
      ...prev,
      [photoId]: isLiked ? (prev[photoId] || 1) - 1 : (prev[photoId] || 0) + 1
    }));
    if (!isLiked && showToast) {
      showToast('Loved it!', 'Added to your inspiring favourites.');
    }
  };

  const currentLightboxPhoto = activeLightboxIndex !== null ? filteredPhotos[activeLightboxIndex] : null;

  return (
    <div className="pt-24 pb-20 bg-[#faf8fc] min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden py-10 md:py-14 border-b border-purple-200/50">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/10 border border-purple-800/20 text-purple-950 text-xs font-bold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Interactive Field Documentary</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-purple-950 tracking-tight leading-tight">
              Project HealthAid Gallery
            </h1>

            <p className="text-gold-600 font-serif text-lg sm:text-xl italic font-semibold">
              Malaysia Garden IDP Camp Outreach · Abuja, Nigeria
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-1 max-w-2xl mx-auto">
              {GALLERY_PROJECT.description}
            </p>

            {/* Quick Impact Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 max-w-4xl mx-auto">
              {GALLERY_PROJECT.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-purple-200/60 shadow-sm text-center transform transition-transform hover:-translate-y-1 duration-300"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-purple-950 block">
                    {stat.number}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-purple-800 font-semibold tracking-wider uppercase block mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-200/60 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-purple-950 text-gold-300 shadow-sm'
                      : 'bg-white hover:bg-purple-50 text-purple-900 border border-purple-200/80 shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-stone-500 font-semibold">
            {filteredPhotos.length} Photos
          </span>
        </div>
      </section>

      {/* 3. SIMPLE PHOTO GRID (No borders, no frames, no casing, pure images) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3.5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo.id)}
              className="aspect-square cursor-pointer overflow-hidden group bg-stone-100"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. ENGAGEMENT FOOTER CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-[#20022c] via-[#350247] to-[#1a0122] text-white shadow-2xl border border-purple-700/50">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-gold-400/20 pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
            <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-extrabold bg-gold-400 text-purple-950 inline-block shadow">
              Be A Catalyst For Change
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Partner With Us for Our Next Medical & Humanitarian Mission
            </h2>

            <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed">
              Every package distributed, medicine dispensed, and life touched is made possible by compassionate supporters, medical volunteers, and partner sponsors.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => navigateTo('get-involved')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-purple-950 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-gold-400/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-purple-950" />
                <span>Volunteer or Sponsor Care Kits</span>
              </button>

              <button
                onClick={() => navigateTo('programs')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-purple-900/80 hover:bg-purple-800 text-white font-bold text-sm tracking-wide transition-all border border-purple-700 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore All Initiatives</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE FULLSCREEN LIGHTBOX MODAL WITH FILMSTRIP */}
      {currentLightboxPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 select-none p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Bar Controls */}
          <div 
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-900/80 text-gold-300 border border-purple-700 text-xs font-bold">
                {currentLightboxPhoto.tag}
              </span>
              <span className="text-xs text-stone-300 hidden sm:inline">
                {activeLightboxIndex + 1} / {filteredPhotos.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Like in Lightbox */}
              <button
                onClick={(e) => toggleLike(e, currentLightboxPhoto.id)}
                title="Like"
                className={`px-3 py-1.5 rounded-full text-xs font-bold border flex items-center gap-1.5 transition-all cursor-pointer ${
                  likedPhotos[currentLightboxPhoto.id]
                    ? 'bg-red-500 text-white border-red-400'
                    : 'bg-stone-900/80 text-white border-stone-700 hover:bg-stone-800'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${likedPhotos[currentLightboxPhoto.id] ? 'fill-white' : ''}`} />
                <span>{likeCounts[currentLightboxPhoto.id] || 0}</span>
              </button>

              <button
                onClick={() => handleSharePhoto(currentLightboxPhoto)}
                title="Share photo link"
                className="w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <a
                href={currentLightboxPhoto.src}
                download={currentLightboxPhoto.src.split('/').pop()}
                title="Download original image"
                className="w-9 h-9 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={closeLightbox}
                title="Close Lightbox (Esc)"
                className="w-9 h-9 rounded-full bg-red-950/80 hover:bg-red-900 text-white border border-red-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevPhoto(); }}
            title="Previous Photo (Left Arrow)"
            className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-gold-400 hover:text-purple-950 text-white border border-stone-700 flex items-center justify-center transition-all cursor-pointer z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Stage & Bottom Caption */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[65vh] flex items-center justify-center bg-black/40">
              <img
                src={currentLightboxPhoto.src}
                alt={currentLightboxPhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {/* Captions */}
            <div className="w-full max-w-3xl mt-3 bg-stone-900/90 border border-stone-800 text-white rounded-2xl p-4 backdrop-blur-md shadow-xl text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="font-serif text-base sm:text-lg font-bold text-gold-300">
                  {currentLightboxPhoto.title}
                </h3>
                <span className="text-xs text-stone-400 flex items-center justify-center sm:justify-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  {currentLightboxPhoto.location}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {currentLightboxPhoto.description}
              </p>
            </div>

            {/* Thumbnail Filmstrip Strip */}
            <div className="flex items-center gap-2 mt-3 overflow-x-auto max-w-xl pb-1 scrollbar-none">
              {filteredPhotos.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveLightboxIndex(idx)}
                  className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    idx === activeLightboxIndex 
                      ? 'border-gold-400 scale-105 shadow-md' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNextPhoto(); }}
            title="Next Photo (Right Arrow)"
            className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-gold-400 hover:text-purple-950 text-white border border-stone-700 flex items-center justify-center transition-all cursor-pointer z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}

    </div>
  );
}
