import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'AWS Bedrock AI Tagging Pipeline',
    description:
      'Automated content tagging pipeline using AWS Bedrock (Claude Sonnet) to analyze 500+ website articles and auto-assign semantic tags. Tags drove visitor trait segmentation, resulting in a 28% increase in email CTR and 22% longer average session duration.',
    technologies: ['AWS Bedrock', 'Python', 'S3', 'CloudFormation'],
    featured: true,
  },
  {
    title: 'Containerized App Deployment on ECS',
    description:
      'Provisioned full AWS infrastructure via CloudFormation — ECS cluster with EC2, Application Load Balancer, S3, and SSL termination. Replaced manual deploy process with a repeatable IaC stack.',
    technologies: ['AWS CloudFormation', 'Amazon ECS', 'EC2', 'ALB', 'S3', 'Terraform'],
    featured: true,
  },
  {
    title: 'Bedrock Knowledge Base (Semantic Search)',
    description:
      'Architected an AWS Bedrock knowledge base enabling semantic search over internal company documents. Employees can query institutional knowledge in plain English instead of navigating nested file systems.',
    technologies: ['AWS Bedrock', 'S3', 'Python', 'RAG'],
    featured: true,
  },
  {
    title: 'HR → IT Data Sync Automation',
    description:
      'Python/PowerShell automation that syncs HR employee records with IT systems and an emergency alert platform in real time, eliminating manual reconciliation across departments.',
    technologies: ['Python', 'PowerShell', 'AWS', 'Zapier'],
    featured: false,
  },
  {
    title: 'DNS Resolver from Scratch',
    description:
      'Built a full DNS client capable of querying live DNS servers for A and AAAA records — equivalent to dig/nslookup — with no third-party DNS libraries.',
    technologies: ['Python', 'Networking', 'UDP'],
    githubUrl: 'https://github.com/mwandawi99',
    featured: false,
  },
  {
    title: 'Melanoma Classifier',
    description:
      'Supervised learning model that classifies malignant vs. benign melanoma from dermoscopy images using CNNs. Trained and evaluated on the ISIC dataset.',
    technologies: ['Python', 'Machine Learning', 'Computer Vision'],
    githubUrl: 'https://github.com/mwandawi99',
    featured: false,
  },
  {
    title: 'This Website',
    description:
      'Personal portfolio built as a hands-on frontend learning project. First time seriously writing React, TypeScript, and Tailwind CSS.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/mwandawi99/perosnal-website',
    featured: false,
  },
];
