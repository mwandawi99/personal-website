import { motion } from 'framer-motion';

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating triangle 1 - top left */}
      <motion.div
        className="absolute opacity-[0.02]"
        animate={{
          x: [0, 20, 0],
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '5%' }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <polygon
            points="60,15 105,100 15,100"
            stroke="#06b6d4"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Floating triangle 2 - bottom right */}
      <motion.div
        className="absolute opacity-[0.015]"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{ bottom: '15%', right: '8%' }}
      >
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <polygon
            points="75,20 130,130 20,130"
            stroke="#0891b2"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Floating circle - middle right */}
      <motion.div
        className="absolute opacity-[0.02]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{ top: '50%', right: '5%' }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#06b6d4" strokeWidth="0.8" />
        </svg>
      </motion.div>

      {/* Floating diamond - top right */}
      <motion.div
        className="absolute opacity-[0.015]"
        animate={{
          x: [0, -25, 0],
          y: [0, 45, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        style={{ top: '25%', right: '20%' }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <polygon
            points="40,10 70,40 40,70 10,40"
            stroke="#06b6d4"
            strokeWidth="0.8"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Floating hexagon - bottom left */}
      <motion.div
        className="absolute opacity-[0.01]"
        animate={{
          x: [0, 35, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        style={{ bottom: '20%', left: '10%' }}
      >
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
          <polygon
            points="55,10 95,35 95,85 55,110 15,85 15,35"
            stroke="#0891b2"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}
