import type { Skill } from '../types';

export const skills: Skill[] = [
  // Backend
  { name: 'Go', category: 'backend', level: 'expert' },
  { name: 'Python', category: 'backend', level: 'expert' },
  { name: 'PostgreSQL', category: 'backend', level: 'expert' },
  { name: 'Redis', category: 'backend', level: 'proficient' },
  { name: 'REST APIs', category: 'backend', level: 'expert' },
  { name: 'GraphQL', category: 'backend', level: 'proficient' },
  { name: 'gRPC', category: 'backend', level: 'proficient' },
  { name: 'Message Queues', category: 'backend', level: 'proficient' },

  // Frontend (honest about current level)
  { name: 'React', category: 'frontend', level: 'familiar' },
  { name: 'TypeScript', category: 'frontend', level: 'familiar' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'familiar' },
  { name: 'HTML & CSS', category: 'frontend', level: 'proficient' },

  // DevOps
  { name: 'Docker', category: 'devops', level: 'proficient' },
  { name: 'Kubernetes', category: 'devops', level: 'proficient' },
  { name: 'CI/CD', category: 'devops', level: 'proficient' },
  { name: 'Linux', category: 'devops', level: 'expert' },
  { name: 'AWS', category: 'devops', level: 'proficient' },

  // Tools
  { name: 'Git', category: 'tools', level: 'expert' },
  { name: 'Vim/Neovim', category: 'tools', level: 'proficient' },
  { name: 'Prometheus', category: 'tools', level: 'familiar' },
  { name: 'Grafana', category: 'tools', level: 'familiar' },
];
