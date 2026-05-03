import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { skills } from '../../data/skills';
import type { Skill } from '../../types';

const CATEGORIES: { key: Skill['category']; label: string; emoji: string }[] = [
  { key: 'aws', label: 'AWS & Cloud', emoji: '☁️' },
  { key: 'backend', label: 'Backend & Data', emoji: '⚙️' },
  { key: 'devops', label: 'DevOps & Infra', emoji: '🛠️' },
  { key: 'frontend', label: 'Frontend', emoji: '🎨' },
  { key: 'tools', label: 'Tools & Platforms', emoji: '🔧' },
];

const LEVEL_VARIANT: Record<Skill['level'], 'accent' | 'muted' | 'ghost'> = {
  expert: 'accent',
  proficient: 'muted',
  familiar: 'ghost',
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/50">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            title="Skills"
            subtitle="What I do"
          />
        </FadeIn>

        {/* AWS gets full-width spotlight row */}
        <FadeIn delay={0.05}>
          <div className="mb-6 rounded-xl border border-accent/25 bg-gradient-to-r from-accent/5 to-transparent p-6">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <span>☁️</span>
              AWS &amp; Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.category === 'aws')
                .map((skill, i) => (
                  <FadeIn key={skill.name} delay={0.05 + i * 0.04}>
                    <Badge label={skill.name} variant={LEVEL_VARIANT[skill.level]} />
                  </FadeIn>
                ))}
            </div>
          </div>
        </FadeIn>

        {/* Remaining categories in a 2x2 grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {CATEGORIES.filter((c) => c.key !== 'aws').map(({ key, label, emoji }, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === key);
            return (
              <FadeIn key={key} delay={0.1 + catIndex * 0.08}>
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 h-full">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
                    <span>{emoji}</span>
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, i) => (
                      <FadeIn key={skill.name} delay={0.1 + catIndex * 0.08 + i * 0.04}>
                        <Badge label={skill.name} variant={LEVEL_VARIANT[skill.level]} />
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Legend */}
        <FadeIn delay={0.5}>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Expert
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-slate-400" />
              Proficient
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-slate-600" />
              Familiar / Learning
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
