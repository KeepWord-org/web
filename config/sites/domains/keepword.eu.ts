import type { SiteConfig } from '../types';
import { baseUIConfig } from '../base';
import { validateMissionConstraints } from '../../mission-lock';

export const keepwordEuConfig: SiteConfig = {
  // Foundation identity
  domain: 'keepword.eu',
  locale: 'en',
  role: 'european',
  tone: 'policy',
  name: 'KeepWord',
  url: 'https://keepword.eu',
  description: 'European context: Societal relevance at EU level, policy & SDG framing.',
  
  // UI config
  metadata: {
    title: 'KeepWord | European Context',
    description: 'Societal relevance at EU level, policy & SDG framing for EU programs and international partners.',
    keywords: ['EU', 'policy', 'SDG', 'European', 'international'],
  },
  
  sections: {
    ...baseUIConfig.sections,
    navbar: {
      ...baseUIConfig.sections.navbar,
      mobileLinks: [
        { text: 'EU Context', href: '/eu-context' },
        { text: 'Policy', href: '/policy' },
        { text: 'SDG Alignment', href: '/sdg' },
        { text: 'Partners', href: '/partners' },
      ],
      // No buttons - policy tone
      actions: [
        { text: 'Contact', href: '/contact', isButton: false },
      ],
    },
    hero: {
      ...baseUIConfig.sections.hero,
      title: 'Societal relevance at European level',
      description: 'Policy & SDG framing for EU programs and international partners.',
      // NO buttons - policy/documentary tone
    },
    footer: {
      ...baseUIConfig.sections.footer,
    },
    // No CTA, no pricing, no stats - policy-focused
  },
  
  links: baseUIConfig.links,
};

validateMissionConstraints(
  keepwordEuConfig.domain,
  keepwordEuConfig.role,
  keepwordEuConfig
);

