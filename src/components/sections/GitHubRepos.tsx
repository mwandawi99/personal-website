import { useEffect, useState } from 'react';
import { Code2, Star, GitFork, AlertCircle } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { fetchPinnedRepos } from '../../lib/github';
import { githubUsername } from '../../data/social';
import type { GitHubRepo } from '../../types';

const LANGUAGE_COLORS: Record<string, string> = {
  Go: '#00ADD8',
  Python: '#3572A5',
  TypeScript: '#2b7489',
  JavaScript: '#f1e05a',
  Rust: '#dea584',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
};

function RepoSkeleton() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 animate-pulse">
      <div className="h-4 w-2/3 rounded bg-slate-700 mb-3" />
      <div className="h-3 w-full rounded bg-slate-700/50 mb-1" />
      <div className="h-3 w-4/5 rounded bg-slate-700/50 mb-4" />
      <div className="flex gap-3">
        <div className="h-3 w-12 rounded bg-slate-700/50" />
        <div className="h-3 w-12 rounded bg-slate-700/50" />
      </div>
    </div>
  );
}

export function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPinnedRepos(githubUsername)
      .then((data) => {
        setRepos(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message ?? 'Failed to load repos');
        setLoading(false);
      });
  }, []);

  return (
    <section id="repos" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            title="GitHub"
            subtitle="Recent public repositories — live from the GitHub API."
          />
          <div className="flex justify-center mb-10">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
            >
              <Code2 size={16} />
              @{githubUsername}
            </a>
          </div>
        </FadeIn>

        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => <RepoSkeleton key={i} />)}
          </div>
        )}

        {error && (
          <FadeIn>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-8 text-red-400">
              <AlertCircle size={18} />
              <p className="text-sm">{error}</p>
            </div>
          </FadeIn>
        )}

        {!loading && !error && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <FadeIn key={repo.id} delay={i * 0.08}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card hover className="h-full flex flex-col group">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-mono text-sm font-semibold text-slate-200 group-hover:text-accent transition-colors truncate pr-2">
                        {repo.name}
                      </h3>
                      <Code2 size={14} className="text-slate-500 group-hover:text-accent transition-colors shrink-0" />
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed flex-1 line-clamp-2">
                      {repo.description ?? 'No description'}
                    </p>

                    <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: LANGUAGE_COLORS[repo.language] ?? '#8b949e' }}
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={11} />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={11} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </Card>
                </a>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
