import { Briefcase } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { experiences } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionHeading title="Work Experience" />
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-slate-700 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={index} delay={index * 0.1} direction={isEven ? 'left' : 'right'}>
                  <div
                    className={`relative grid md:grid-cols-2 gap-6 ${isEven ? 'md:pr-8' : ''}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-5 z-10 flex h-3 w-3 -translate-x-1.5 items-center justify-center rounded-full border-2 border-accent bg-slate-900 md:left-1/2" />

                    {/* Date — right-aligned in left column */}
                    <div
                      className="hidden md:flex items-start pt-5 justify-end pr-8"
                    >
                      <span className="text-sm font-mono text-accent">
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={`ml-10 md:ml-0 rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 ${
                        isEven ? 'md:order-first' : 'md:order-last md:ml-4'
                      }`}
                    >
                      {/* Mobile date */}
                      <p className="md:hidden text-xs font-mono text-accent mb-1">
                        {exp.startDate} — {exp.endDate}
                      </p>

                      <div className="flex items-start gap-3 mb-3">
                        <div className="mt-0.5 rounded-lg bg-accent/10 p-2 shrink-0">
                          <Briefcase size={14} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-100">{exp.role}</h3>
                          <p className="text-sm text-slate-400">{exp.company}</p>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-4">
                        {exp.description.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} label={tech} variant="ghost" />
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
