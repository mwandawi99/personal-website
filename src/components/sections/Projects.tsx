import { Code2, ExternalLink, Star } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { projects } from '../../data/projects';

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/50">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading title="Projects" subtitle="Things I've built to solve problems or learn something new." />
        </FadeIn>

        {/* Featured grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {featured.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <Card hover className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-accent" fill="currentColor" />
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">Featured</span>
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <Code2 size={16} />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-accent transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} label={tech} variant="ghost" />
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <>
            <FadeIn delay={0.3}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4 text-center">
                Other Projects
              </h3>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project, i) => (
                <FadeIn key={project.title} delay={0.35 + i * 0.08}>
                  <Card hover className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-200">{project.title}</h3>
                      <div className="flex gap-2 ml-2 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-accent transition-colors"
                            aria-label="GitHub"
                          >
                            <Code2 size={14} />
                          </a>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-accent transition-colors"
                            aria-label="Live site"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} label={tech} variant="ghost" />
                      ))}
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
