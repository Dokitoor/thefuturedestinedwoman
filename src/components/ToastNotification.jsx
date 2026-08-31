import React, { useEffect } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function ToastNotification({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="glass-plum text-white px-6 py-4 rounded-2xl shadow-luxury border border-gold-400/40 flex items-center gap-4 max-w-md">
        <div className="w-10 h-10 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center shrink-0 text-gold-400">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div className="flex-1">
          <h4 className="font-serif text-lg font-bold text-gold-300">{toast.title || 'Action Completed'}</h4>
          <p className="text-xs text-cream-200 leading-snug">{toast.message}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-cream-300 hover:text-white p-1 transition-colors"
          aria-label="Close Toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
