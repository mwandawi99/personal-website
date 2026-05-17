import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt?: string;
}

export function Modal({ isOpen, onClose, title, summary, imageSrc, imageAlt }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="flex top-1/4 bottom-1/4 flex-col fixed inset-0 z-50 m-auto w-full max-w-2xl rounded-xl bg-slate-800/90 shadow-lg overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-lg bg-slate-800/80 p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                {title}
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6">{summary}</p>

              {/* Image with subtle border and rounded corners */}
              <div className="rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800/30 p-4">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="w-full h-auto rounded-lg bg-slate-700/20"
                />
              </div>
            </div>

            {/* Click outside to close hint */}
            <div className="border-t border-slate-700/50 px-6 sm:px-8 py-3 text-xs text-slate-500 text-center">
              Click outside or press Esc to close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
