import type { SiteConfig } from '../types';
import { baseUIConfig } from '../base';
import { validateMissionConstraints } from '../../mission-lock';

export const keepwordOrgConfig: SiteConfig = {
  // Foundation identity
  domain: 'keepword.org',
  locale: 'en',
  role: 'institutional',
  tone: 'documentary',
  name: 'KeepWord Foundation',
  url: 'https://keepword.org',
  description: 'Institutional foundation site: Mission, vision, governance, and transparency.',
  
  // UI config
  metadata: {
    title: 'KeepWord Foundation',
    description: 'Mission, vision, governance, SDG alignment, and transparency for educators, institutions, partners, and funders.',
    keywords: ['foundation', 'governance', 'SDG', 'transparency', 'non-profit'],
  },
  
  sections: {
    ...baseUIConfig.sections,
    navbar: {
      ...baseUIConfig.sections.navbar,
      name: 'KeepWord Foundation',
      mobileLinks: [
        { text: 'Mission & Vision', href: '/mission' },
        { text: 'Governance', href: '/governance' },
        { text: 'SDG Alignment', href: '/sdg' },
        { text: 'Roadmap', href: '/roadmap' },
      ],
      // No buttons - institutional tone
      actions: [
        { text: 'Contact', href: '/contact', isButton: false },
      ],
    },
    hero: {
      ...baseUIConfig.sections.hero,
      title: 'Alternatives to systems that make words cheap',
      description: 'A non-profit foundation exploring responsible communication for educators, institutions, and researchers.',
      // NO buttons - institutional/documentary tone
    },
    footer: {
      ...baseUIConfig.sections.footer,
      name: 'KeepWord Foundation',
    },
    // No CTA, no pricing, no stats, no logos - pure documentary
  },
  
  links: baseUIConfig.links,
};

// Validate at module load time (startup-time validation)
validateMissionConstraints(
  keepwordOrgConfig.domain,
  keepwordOrgConfig.role,
  keepwordOrgConfig
);

