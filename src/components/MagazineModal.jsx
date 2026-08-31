import React, { useState } from 'react';
import { X, Download, BookOpen, ChevronLeft, ChevronRight, Share2, CheckCircle2, Sparkles, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MagazineModal({ edition, onClose, showToast }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!edition) return null;

  const handleDownload = (e) => {
    e.preventDefault();

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#581C38', '#C5A059', '#FAF8F5']
      });
    } catch (err) {
      console.log('Confetti effect triggered');
    }

    // Trigger actual download link
    const link = document.createElement('a');
    link.href = edition.pdfUrl;
    link.download = edition.downloadFileName || `${edition.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    showToast(
      'Magazine Download Started!',
      `Downloading "${edition.title}" (${edition.editionNumber}). Thank you for engaging with TFDW Publications.`
    );
  };

  const handleShare = (platform) => {
    const text = `Read "${edition.title} - ${edition.theme}" by The Future Destined Woman (TFDW).`;
    const url = window.location.href;
    
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      showToast('Link Copied!', 'Magazine link copied to your clipboard.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-plum-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-cream-100 rounded-3xl shadow-luxury border-2 border-gold-400/40 overflow-hidden my-8">
        
        {/* Modal Top Header Bar */}
        <div className="plum-gradient-bg px-6 py-4 border-b border-gold-400/30 flex items-center justify-between text-cream-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center text-gold-300">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                {edition.editionNumber} • {edition.releaseDate}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-cream-50 leading-none">
                {edition.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-plum-900/60 hover:bg-plum-800 text-cream-200 hover:text-white flex items-center justify-center transition-colors border border-gold-400/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 max-h-[78vh] overflow-y-auto">
          
          {/* Left Column: Magazine Cover & Interactive Reader (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-cream-200/50 border-r border-plum-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-plum-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>Interactive Reader Preview</span>
                </span>
                <span className="text-xs text-onyx-800/70 font-mono">
                  Page {currentPage + 1} of {edition.previewPages.length}
                </span>
              </div>

              {/* Dynamic Page Flip Card */}
              <div className="bg-white rounded-2xl p-6 shadow-editorial border border-gold-400/20 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-plum-500/5 rounded-bl-full pointer-events-none" />

                <div>
                  <span className="text-[11px] font-bold text-gold-600 uppercase tracking-widest block mb-1">
                    {edition.previewPages[currentPage].title}
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-plum-950 mb-3">
                    {edition.theme}
                  </h4>
                  <p className="text-sm text-onyx-800 leading-relaxed font-light">
                    {edition.previewPages[currentPage].content}
                  </p>
                </div>

                <div className="pt-4 border-t border-plum-50 flex items-center justify-between text-xs text-onyx-800/70">
                  <span className="italic">"From Potential to Purposeful Impact"</span>
                  <span className="font-mono">TFDW Editions</span>
                </div>
              </div>

              {/* Reader Navigation Controls */}
              <div className="flex items-center justify-between mt-4">
                <button
                  disabled={currentPage === 0}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className="px-4 py-2 rounded-full border border-plum-200 text-xs font-bold text-plum-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-plum-50 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center space-x-1.5">
                  {edition.previewPages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentPage === idx ? 'w-6 bg-plum-800' : 'bg-plum-200 hover:bg-plum-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  disabled={currentPage === edition.previewPages.length - 1}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className="px-4 py-2 rounded-full border border-plum-200 text-xs font-bold text-plum-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-plum-50 transition-colors flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Share Bar */}
            <div className="mt-6 pt-4 border-t border-plum-200/60 flex items-center justify-between text-xs">
              <span className="font-semibold text-plum-900 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-gold-600" />
                <span>Share Issue:</span>
              </span>
              <div className="flex items-center space-x-2">
                <button onClick={() => handleShare('whatsapp')} className="px-2.5 py-1 rounded-md bg-white border border-plum-100 hover:bg-plum-50 text-emerald-700 font-semibold text-[11px]">
                  WhatsApp
                </button>
                <button onClick={() => handleShare('linkedin')} className="px-2.5 py-1 rounded-md bg-white border border-plum-100 hover:bg-plum-50 text-blue-700 font-semibold text-[11px]">
                  LinkedIn
                </button>
                <button onClick={() => handleShare('twitter')} className="px-2.5 py-1 rounded-md bg-white border border-plum-100 hover:bg-plum-50 text-sky-600 font-semibold text-[11px]">
                  Twitter
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Download Form & Article Highlights (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <h4 className="font-serif text-xl font-bold text-plum-950 mb-2">
                Download Full PDF Edition
              </h4>
              <p className="text-xs text-onyx-800/80 mb-6 leading-relaxed">
                {edition.synopsis}
              </p>

              {/* Direct Download Card Form */}
              <form onSubmit={handleDownload} className="space-y-3 bg-cream-100 p-5 rounded-2xl border border-gold-400/20 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-gold-600" />
                  <span className="text-xs font-bold text-plum-950 uppercase tracking-wide">
                    Instant PDF Access
                  </span>
                </div>

                <div>
                  <input
                    type="text"
                    value={subscriberName}
                    onChange={(e) => setSubscriberName(e.target.value)}
                    placeholder="Your Full Name (Optional)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-plum-200 text-xs text-onyx-900 placeholder-onyx-800/40 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    value={subscriberEmail}
                    onChange={(e) => setSubscriberEmail(e.target.value)}
                    placeholder="Your Email Address (Optional for alerts)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-plum-200 text-xs text-onyx-900 placeholder-onyx-800/40 focus:outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-plum-950 font-bold text-xs shadow-md hover:shadow-luxury transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <Download className="w-4 h-4 text-plum-950" />
                  <span>Download Free PDF Issue</span>
                </button>
              </form>

              {/* Key Articles List */}
              <div>
                <h5 className="text-xs font-bold text-plum-900 uppercase tracking-widest mb-2 border-b border-plum-100 pb-1">
                  Featured Articles in this Issue
                </h5>
                <ul className="space-y-2 text-xs">
                  {edition.articles.map((art, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-onyx-800">
                      <span className="text-gold-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold text-plum-950 block">{art.title}</span>
                        <span className="text-[10px] text-onyx-800/60">{art.author}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Open PDF Link Backup */}
            <div className="pt-4 border-t border-plum-100 mt-6 text-center">
              <a
                href={edition.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-plum-800 hover:text-gold-600 underline transition-colors"
              >
                Or open PDF directly in browser window →
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
