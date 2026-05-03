import { motion, type Transition } from 'framer-motion';
import { ArrowDown, Code2, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { about } from '../../data/about';
import { socialLinks } from '../../data/social';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const transition = (delay: number): Transition => ({
  duration: 0.6,
  delay,
  ease: 'easeOut',
});

export function Hero() {
  const reduced = useReducedMotion();

  const initial = (y = 20) => (reduced ? { opacity: 1, y: 0 } : { opacity: 0, y });
  const animate = { opacity: 1, y: 0 };

  const githubLink = socialLinks.find((l) => l.icon === 'github');

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={initial()}
          animate={animate}
          transition={transition(0.1)}
          className="mb-4 font-mono text-accent text-sm tracking-widest uppercase"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={initial()}
          animate={animate}
          transition={transition(0.2)}
          className="text-5xl font-bold sm:text-7xl"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            {about.name}
          </span>
        </motion.h1>

        <motion.p
          initial={initial()}
          animate={animate}
          transition={transition(0.35)}
          className="mt-4 text-xl text-slate-400 sm:text-2xl font-medium"
        >
          {about.title}
        </motion.p>

        <motion.p
          initial={initial()}
          animate={animate}
          transition={transition(0.5)}
          className="mt-6 text-slate-500 max-w-lg mx-auto leading-relaxed"
        >
          {about.subtitle}
        </motion.p>

        <motion.div
          initial={initial()}
          animate={animate}
          transition={transition(0.65)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects" variant="primary">
            View My Work
            <ArrowDown size={16} />
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
            <Mail size={16} />
          </Button>
          {githubLink && (
            <Button href={githubLink.url} variant="secondary" target="_blank" rel="noopener noreferrer">
              <Code2 size={16} />
              GitHub
            </Button>
          )}
        </motion.div>

        {about.openToWork && (
          <motion.div
            initial={initial()}
            animate={animate}
            transition={transition(0.8)}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs text-green-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to new opportunities
          </motion.div>
        )}
      </div>

      <motion.a
        initial={initial()}
        animate={animate}
        transition={transition(1)}
        href="#about"
        className="absolute bottom-8 text-slate-600 hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
