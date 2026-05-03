import type { Project } from '../types';

// TODO: Replace with your actual projects
export const projects: Project[] = [
  {
    title: 'Distributed Task Queue',
    description:
      'A lightweight, Redis-backed task queue with worker pools, retries, and a real-time dashboard. Built to understand distributed systems patterns hands-on.',
    technologies: ['Go', 'Redis', 'Docker', 'WebSockets'],
    githubUrl: 'https://github.com/yourusername/task-queue',
    featured: true,
  },
  {
    title: 'API Rate Limiter',
    description:
      'A pluggable rate limiting middleware supporting sliding window, token bucket, and fixed window algorithms. Drop-in for any HTTP handler.',
    technologies: ['Go', 'Redis', 'HTTP'],
    githubUrl: 'https://github.com/yourusername/rate-limiter',
    featured: true,
  },
  {
    title: 'Personal Finance CLI',
    description:
      'A terminal tool that parses bank CSV exports and gives spending breakdowns, budget tracking, and trends. No cloud, all local.',
    technologies: ['Python', 'SQLite', 'Rich'],
    githubUrl: 'https://github.com/yourusername/fin-cli',
    featured: true,
  },
  {
    title: 'URL Shortener Service',
    description:
      'A high-throughput URL shortener with custom slugs, expiry, click analytics, and a simple API. Handles 10K req/s on commodity hardware.',
    technologies: ['Go', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/yourusername/shortener',
    featured: false,
  },
  {
    title: 'Log Aggregator',
    description:
      'Lightweight structured log aggregator that tails log files, parses JSON, and ships to a central store with zero external dependencies.',
    technologies: ['Go', 'gRPC', 'Protocol Buffers'],
    githubUrl: 'https://github.com/yourusername/log-agg',
    featured: false,
  },
  {
    title: 'This Website',
    description:
      'My personal portfolio — built as a frontend learning project using React, TypeScript, Tailwind CSS, and Framer Motion.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/mwandawi99/perosnal-website',
    liveUrl: '#',
    featured: false,
  },
];
