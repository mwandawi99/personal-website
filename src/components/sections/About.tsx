import { MapPin, Sparkles } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { about } from '../../data/about';

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading title="About Me" />
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Avatar */}
          <FadeIn direction="left">
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="h-56 w-56 rounded-2xl border-2 border-accent/30 bg-slate-800 overflow-hidden shadow-2xl shadow-accent/10">
                  {about.avatarUrl ? (
                    <img
                      src={about.avatarUrl}
                      alt={about.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-7xl font-bold text-slate-600 select-none">
                        {about.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                {/* Decorative corner accent */}
                <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-xl border border-accent/20 bg-slate-900" />
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-lg border border-slate-700 bg-slate-900" />
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-4">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="flex items-center gap-2 text-sm text-slate-500 pt-2">
                <MapPin size={14} className="text-accent" />
                {about.location}
              </div>

              {/* Currently learning */}
              <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-accent mb-3">
                  <Sparkles size={14} />
                  Currently Learning
                </div>
                <div className="flex flex-wrap gap-2">
                  {about.currentlyLearning.map((item) => (
                    <Badge key={item} label={item} variant="accent" />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
