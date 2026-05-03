import type { Skill } from '../types';

export const skills: Skill[] = [
  // AWS (primary focus)
  { name: 'CloudFormation', category: 'aws', level: 'expert' },
  { name: 'Amazon ECS', category: 'aws', level: 'expert' },
  { name: 'S3', category: 'aws', level: 'expert' },
  { name: 'EC2 / ALB', category: 'aws', level: 'expert' },
  { name: 'Lambda', category: 'aws', level: 'expert' },
  {name: 'DynamoDB', category: 'aws', level: 'expert'},
  { name: 'AWS Bedrock', category: 'aws', level: 'proficient' },
  { name: 'IAM', category: 'aws', level: 'proficient' },
  

  // Backend & Data
  { name: 'Python', category: 'backend', level: 'expert' },
  { name: 'SQL', category: 'backend', level: 'expert' },
  { name: 'ETL Pipelines', category: 'backend', level: 'expert' },
  { name: 'REST APIs', category: 'backend', level: 'expert' },
  { name: 'Java', category: 'backend', level: 'proficient' },
  { name: 'Shell / PowerShell', category: 'backend', level: 'proficient' },
  { name: 'C / C#', category: 'backend', level: 'proficient' },

  // DevOps & Infra
  { name: 'Linux', category: 'devops', level: 'expert' },
  { name: 'Docker', category: 'devops', level: 'expert' },
  { name: 'Terraform', category: 'devops', level: 'proficient' },
  { name: 'CI/CD', category: 'devops', level: 'proficient' },
  { name: 'Google Cloud', category: 'devops', level: 'proficient' },

  // Frontend (learning)
  { name: 'React', category: 'frontend', level: 'familiar' },
  { name: 'JavaScript', category: 'frontend', level: 'proficient' },
  { name: 'TypeScript', category: 'frontend', level: 'familiar' },
  { name: 'HTML / CSS', category: 'frontend', level: 'proficient' },

  // Tools & Platforms
  { name: 'Git', category: 'tools', level: 'expert' },
  { name: 'Snowflake', category: 'tools', level: 'proficient' },
  { name: 'BigQuery', category: 'tools', level: 'proficient' },
  { name: 'Salesforce', category: 'tools', level: 'proficient' },
  { name: 'Machine Learning', category: 'tools', level: 'familiar' },
];
