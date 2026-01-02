import type { SiteConfig } from '../types';
import { baseUIConfig } from '../base';
import { validateMissionConstraints } from '../../mission-lock';

export const keepwordNlConfig: SiteConfig = {
  // Foundation identity
  domain: 'keepword.nl',
  locale: 'nl',
  role: 'local',
  tone: 'human',
  name: 'KeepWord',
  url: 'https://keepword.nl',
  description: 'Lokaal en mensgericht: Eenvoudige uitleg voor studenten, teams en lokale initiatieven.',
  
  // UI config
  metadata: {
    title: 'KeepWord | Voor Teams en Scholen',
    description: 'Eenvoudige uitleg voor studenten, teams en lokale initiatieven. Meedoen aan pilots en educatief gebruik.',
    keywords: ['Nederlands', 'teams', 'scholen', 'pilots', 'lokaal'],
  },
  
  sections: {
    ...baseUIConfig.sections,
    navbar: {
      ...baseUIConfig.sections.navbar,
      name: 'KeepWord',
      mobileLinks: [
        { text: 'Wat is KeepWord?', href: '/wat-is-keepword' },
        { text: 'Meedoen', href: '/meedoen' },
        { text: 'Voor Teams', href: '/voor-teams' },
        { text: 'Voor Scholen', href: '/voor-scholen' },
      ],
      actions: [
        { text: 'Contact', href: '/contact', isButton: false },
        // Max 1 CTA button (mission constraint)
        { text: 'Meedoen', href: '/meedoen', isButton: true, variant: 'default' },
      ],
    },
    hero: {
      ...baseUIConfig.sections.hero,
      title: 'Een alternatief voor sociale media',
      description: 'Voor teams, scholen en lokale initiatieven. Eenvoudig, verantwoordelijk en mensgericht.',
      // Optional: 1 button max (human tone allows gentle invitation)
      buttons: [
        { href: '/meedoen', text: 'Meedoen', variant: 'default' },
      ],
    },
    // Only domain allowed to have CTA section (human tone, max 1)
    cta: {
      title: 'Meedoen met KeepWord',
      description: 'Voor teams, scholen en lokale initiatieven.',
      buttons: [
        {
          href: '/meedoen',
          text: 'Meedoen',
          variant: 'default',
        },
      ],
    },
    footer: {
      ...baseUIConfig.sections.footer,
      name: 'KeepWord',
      copyright: '© 2025 KeepWord Stichting. Alle rechten voorbehouden.',
      columns: [
        {
          title: 'Over KeepWord',
          links: [
            { text: 'Wat is KeepWord?', href: '/wat-is-keepword' },
            { text: 'Missie', href: '/missie' },
          ],
        },
        {
          title: 'Meedoen',
          links: [
            { text: 'Voor Teams', href: '/voor-teams' },
            { text: 'Voor Scholen', href: '/voor-scholen' },
            { text: 'Pilots', href: '/pilots' },
          ],
        },
      ],
    },
    // No pricing, no stats, no logos - human tone but still foundation
  },
  
  links: baseUIConfig.links,
};

validateMissionConstraints(
  keepwordNlConfig.domain,
  keepwordNlConfig.role,
  keepwordNlConfig
);

