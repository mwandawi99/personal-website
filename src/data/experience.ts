import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    company: 'Stand Together',
    role: 'Software Engineer',
    startDate: 'Dec 2023',
    endDate: 'Present',
    description: [
      'Provisioned and managed AWS infrastructure using CloudFormation and Terraform — containerized apps on ECS with EC2, ALB, S3, and SSL — significantly reducing manual deployment effort.',
      'Designed an AI-powered content tagging pipeline using AWS Bedrock (Claude Sonnet) to analyze 500+ articles and auto-assign semantic tags, resulting in a 28% increase in email CTR and 22% longer average session duration.',
      'Architected an AWS Bedrock knowledge base enabling semantic search over internal documents, making institutional knowledge queryable via natural language.',
      'Built and maintained ETL pipelines integrating third-party SaaS tools with Salesforce using Python and JSON, improving data reliability for cross-functional teams.',
      'Engineered an automated media asset pipeline from S3 to a Digital Asset Management system, streamlining media ingestion and metadata tagging for the marketing team.',
      'Integrated REST APIs across Finance, IT, and Marketing toolchains; established a BigQuery environment that improved data accuracy and reduced reporting latency.',
      'Implemented VWO A/B testing integrated with Segment.io to enrich visitor profiles with experiment data, enabling statistically meaningful tests tied to real user traits.',
    ],
    technologies: ['AWS CloudFormation', 'Amazon ECS', 'AWS Bedrock', 'S3', 'EC2', 'Terraform', 'Python', 'BigQuery', 'Salesforce'],
  },
  {
    company: 'Stand Together',
    role: 'IT Engineer',
    startDate: 'Mar 2021',
    endDate: 'Dec 2023',
    description: [
      'Provided technical support to 1,200+ employees; managed full user lifecycle across Azure AD, O365, and Okta.',
      'Co-developed a Python/PowerShell automation to sync HR user data with IT systems, replacing a manual reconciliation process used across departments.',
      'Led a company-wide migration of 1,200 employees to Okta SSO, authoring documentation and providing direct support throughout the rollout.',
      'Built an internal onboarding web app for hiring managers to submit new-hire requests, reducing IT ticket volume and improving request accuracy.',
      'Managed device fleet (PCs, Macs, iPhones) using Jamf, Airwatch, and Intune.',
    ],
    technologies: ['Python', 'PowerShell', 'Azure AD', 'Okta', 'O365', 'Jamf', 'Intune'],
  },
];
