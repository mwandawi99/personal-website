import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { skills } from '../../data/skills';
import type { Skill } from '../../types';

const CATEGORIES: { key: Skill['category']; label: string; emoji: string }[] = [
  { key: 'backend', label: 'Backend', emoji: '⚙️' },
  { key: 'frontend', label: 'Frontend', emoji: '🎨' },
  { key: 'devops', label: 'DevOps & Cloud', emoji: '☁️' },
  { key: 'tools', label: 'Tools', emoji: '🔧' },
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
            subtitle="Honest assessment — accent means expert, faded means still learning."
          />
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {CATEGORIES.map(({ key, label, emoji }, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === key);
            return (
              <FadeIn key={key} delay={catIndex * 0.1}>
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-400">
                    <span>{emoji}</span>
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, i) => (
                      <FadeIn key={skill.name} delay={catIndex * 0.1 + i * 0.04}>
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
        <FadeIn delay={0.4}>
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
