import type { UIConfig } from './types';

/**
 * Base UI Config: Shared presentation defaults
 * Foundation identity is set per-domain (not shared)
 */
export const baseUIConfig: UIConfig = {
  metadata: {
    title: 'KeepWord Foundation',
    description: 'A non-profit foundation exploring alternatives to social media systems.',
    keywords: ['social media', 'communication', 'non-profit', 'foundation'],
  },
  
  sections: {
    navbar: {
      name: 'KeepWord',
      homeUrl: '/',
      mobileLinks: [
        { text: 'Mission', href: '/mission' },
        { text: 'Vision', href: '/vision' },
      ],
      actions: [
        { text: 'Contact', href: '/contact', isButton: false },
      ],
      showNavigation: true,
    },
    hero: {
      title: 'Alternatives to systems that make words cheap',
      description: 'A non-profit foundation exploring responsible communication.',
      // No buttons by default - let domains decide
    },
    footer: {
      name: 'KeepWord',
      copyright: '© 2025 KeepWord Foundation. All rights reserved.',
      columns: [
        {
          title: 'Foundation',
          links: [
            { text: 'About', href: '/about' },
            { text: 'Mission', href: '/mission' },
            { text: 'Governance', href: '/governance' },
          ],
        },
      ],
      policies: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
      ],
      showModeToggle: true,
    },
  },
  
  links: {
    email: 'mailto:contact@keepword.org',
  },
};

