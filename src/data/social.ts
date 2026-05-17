import type { SocialLink } from '../types';

// TODO: Replace with your actual username and links
export const githubUsername = 'mwandawi99';
export const linkedinUrl = 'https://linkedin.com/in/mwandawi';

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: `https://github.com/${githubUsername}`,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    // TODO: Replace with your LinkedIn URL
    url: linkedinUrl,
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:mwandawi@gmu.edu',
    icon: 'mail',
  },
];
