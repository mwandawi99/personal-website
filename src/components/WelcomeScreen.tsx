import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {

  // Auto-complete after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);



  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating triangle 1 */}
        <motion.div
          className="absolute opacity-5"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '20%', left: '10%' }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <polygon
              points="40,10 70,65 10,65"
              stroke="#06b6d4"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </motion.div>

        {/* Floating triangle 2 */}
        <motion.div
          className="absolute opacity-5"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          style={{ bottom: '20%', right: '15%' }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <polygon
              points="50,15 85,80 15,80"
              stroke="#0891b2"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </motion.div>

        {/* Floating circle 1 */}
        <motion.div
          className="absolute opacity-4"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          style={{ top: '60%', right: '10%' }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#06b6d4" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Gradient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Waving hand */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-8xl sm:text-9xl select-none"
        >
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.4 }}
            style={{ transformOrigin: 'bottom right' }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.div>

        {/* Text animation - Hello with color cycling */}
        <div className="flex h-12 sm:h-16 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold">
              {'Hello'.split('').map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + idx * 0.08,
                    ease: 'easeOut',
                  }}
                  className="inline-block"
                >
                  <motion.span
                    animate={{
                      backgroundImage: [
                        'linear-gradient(90deg, #06b6d4, #06b6d4)',
                        'linear-gradient(90deg, #0891b2, #0891b2)',
                        'linear-gradient(90deg, #0ea5e9, #0ea5e9)',
                        'linear-gradient(90deg, #06b6d4, #06b6d4)',
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                    className="bg-clip-text text-transparent"
                  >
                    {char}
                  </motion.span>
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Skip hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className="absolute bottom-8 text-xs text-slate-600"
      >
        Entering in a moment...
      </motion.div>
    </motion.div>
  );
}
