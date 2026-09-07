import React, { useState } from 'react';
import { X, Download, BookOpen, CheckCircle2, Sparkles, FileText, User, Mail, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MagazineModal({ edition, onClose, showToast }) {
  const [subscriberName, setSubscriberName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!edition) return null;

  const handleDownload = (e) => {
    e.preventDefault();

    if (!subscriberName.trim() || !subscriberEmail.trim()) return;

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4C015C', '#84248F', '#D4AF37', '#FAF5FF']
      });
    } catch (err) {
      console.log('Confetti effect triggered');
    }

    // Trigger actual download link
    const link = document.createElement('a');
    link.href = edition.pdfUrl || '/edition_3_sample.pdf';
    link.download = edition.downloadFileName || `${edition.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    showToast(
      'Magazine Download Started!',
      `Thank you ${subscriberName}! Downloading "${edition.title}" (${edition.editionNumber}).`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-purple-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-luxury border-2 border-purple-200 overflow-hidden my-8">
        
        {/* Modal Top Header Bar */}
        <div className="purple-gradient-bg px-6 py-4 border-b border-purple-800/60 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-purple-300/40 flex items-center justify-center text-purple-200">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-purple-200 font-semibold block">
                {edition.editionNumber} • {edition.releaseDate}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-none">
                {edition.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-purple-900/80 hover:bg-purple-800 text-purple-200 hover:text-white flex items-center justify-center transition-colors border border-purple-700/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {!downloadSuccess ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Publication Cover Preview (4 Cols) */}
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="rounded-2xl overflow-hidden shadow-editorial border-2 border-purple-200 max-w-[200px] group">
                  <img
                    src={edition.coverImage || '/images/cover_ed3.png'}
                    alt={edition.title}
                    className="w-full h-56 object-cover"
                  />
                </div>
                <span className="text-[11px] font-bold text-purple-900 mt-3 block text-center font-serif">
                  {edition.theme}
                </span>
              </div>

              {/* Form Column (8 Cols) */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-purple-700 block mb-1">
                    [ Access Publication ]
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-purple-950 leading-snug">
                    Provide Details to Download PDF
                  </h4>
                  <p className="text-xs text-onyx-800/80 leading-relaxed mt-1">
                    {edition.synopsis}
                  </p>
                </div>

                <form onSubmit={handleDownload} className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-bold text-purple-950 uppercase tracking-wide block mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-purple-700" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={subscriberName}
                      onChange={(e) => setSubscriberName(e.target.value)}
                      placeholder="e.g. Victoria Sterling"
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 text-xs text-onyx-900 focus:outline-none focus:border-purple-600 bg-purple-50/30"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-purple-950 uppercase tracking-wide block mb-1 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-purple-700" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)}
                      placeholder="victoria@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-purple-200 text-xs text-onyx-900 focus:outline-none focus:border-purple-600 bg-purple-50/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-purple-900 hover:bg-purple-950 text-white font-extrabold text-xs shadow-luxury transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer border border-purple-700 mt-2"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Download Publication PDF</span>
                  </button>
                </form>
              </div>

            </div>
          ) : (
            /* Success Confirmation State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 border-2 border-purple-400 text-purple-900 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-purple-800" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-3xl font-bold text-purple-950">
                  Thank You, {subscriberName}!
                </h4>
                <p className="text-xs text-onyx-800 max-w-md mx-auto leading-relaxed">
                  Your PDF download for <strong>"{edition.title}"</strong> has been initiated. A copy has also been sent to <strong>{subscriberEmail}</strong>.
                </p>
              </div>

              <div className="pt-4 flex flex-col items-center gap-3">
                <a
                  href={edition.pdfUrl || '/edition_3_sample.pdf'}
                  download={edition.downloadFileName || `${edition.title}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-purple-900 text-white font-bold text-xs shadow-md hover:bg-purple-950 transition-all inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Click Here if Download Didn't Start Automatically</span>
                </a>

                <button
                  onClick={onClose}
                  className="text-xs text-purple-800 hover:text-purple-950 font-bold underline cursor-pointer pt-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
