import type { Experience } from '../types';

// TODO: Replace with your actual work history
export const experiences: Experience[] = [
  {
    company: 'Your Company Name',
    role: 'Senior Backend Engineer',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: [
      'Designed and maintained REST APIs serving millions of requests per day.',
      'Led architecture decisions for a migration from monolith to microservices.',
      'Reduced p99 latency by 40% through query optimization and caching strategies.',
      'Mentored junior engineers and drove adoption of code review best practices.',
    ],
    technologies: ['Go', 'PostgreSQL', 'Redis', 'Kubernetes', 'gRPC'],
  },
  {
    company: 'Previous Company',
    role: 'Backend Engineer',
    startDate: 'Jun 2020',
    endDate: 'Dec 2021',
    description: [
      'Built and shipped core API features used by 50K+ daily active users.',
      'Implemented event-driven processing pipeline using Kafka.',
      'Improved test coverage from 30% to 80% across core services.',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Kafka', 'Docker'],
  },
  {
    company: 'Internship Company',
    role: 'Software Engineering Intern',
    startDate: 'May 2019',
    endDate: 'Aug 2019',
    description: [
      'Contributed to internal tooling that saved the team 10+ hours per week.',
      'Wrote automated tests and improved CI pipeline reliability.',
    ],
    technologies: ['Python', 'Flask', 'MySQL', 'Git'],
  },
];
