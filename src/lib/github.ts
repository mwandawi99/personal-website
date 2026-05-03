import type { GitHubRepo } from '../types';

export async function fetchPinnedRepos(username: string): Promise<GitHubRepo[]> {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const headers: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public`,
    { headers }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const repos: GitHubRepo[] = await res.json();
  return repos.filter((r) => !r.name.startsWith(`${username}.github.io`) && r.description);
}
