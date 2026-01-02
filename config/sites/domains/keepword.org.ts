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
  description:
    'Institutional foundation site: mission, vision, governance, SDG alignment and transparency.',

  // UI metadata
  metadata: {
    title: 'KeepWord Foundation',
    description:
      'A non-profit foundation exploring alternatives to social media systems that make words cheap and responsibility optional.',
    keywords: [
      'non-profit',
      'foundation',
      'trust',
      'responsibility',
      'social media',
      'digital ethics',
      'SDG 16',
    ],
  },

  // Sections (mission-safe)
  sections: {
    navbar: {
      ...baseUIConfig.sections.navbar,
      name: 'KeepWord',
      mobileLinks: [
        { text: 'Mission', href: '/mission' },
        { text: 'Problem', href: '/problem' },
        { text: 'Approach', href: '/approach' },
        { text: 'Governance', href: '/governance' },
        { text: 'SDG', href: '/sdg' },
        { text: 'Roadmap', href: '/roadmap' },
      ],
      actions: [
        // Not a CTA button. Documentary tone.
        { text: 'Contact', href: '/contact', isButton: false },
      ],
    },

    hero: {
      ...baseUIConfig.sections.hero,
      title: 'Alternatives to systems that make words cheap.',
      description:
        'Social media lets people talk to many, but without taking responsibility. KeepWord explores how online tools can help people keep their word and build trust in small groups.',
      // No buttons on keepword.org
      mockup: false,
    },

    // Text block: short, documentary
    textBlocks: [
      {
        title: 'Why KeepWord exists',
        content:
          'Social media rewards getting attention and quick reactions. This means people say a lot, but don\'t have to follow through. Promises don\'t mean much. Trust becomes about how you look, not what you do. KeepWord explores different ways: online tools where what you say connects to what you actually do.',
      },
    ],

    features: [
      {
        title: 'What we build instead',
        description:
          'Not another social media feed. Not a platform for getting attention. A foundation exploring tools that help people keep their word and build real trust online.',
        features: [
          {
            title: 'Keep promises, not posts',
            description:
              'Focus on agreements and doing what you said, not on how many people see your posts.',
          },
          {
            title: 'Small groups work better',
            description:
              'Work with small groups where people can build and fix trust—without public scores or rankings.',
          },
          {
            title: 'Show what happens, help fix problems',
            description:
              'Make results visible to everyone involved, and give people a way to fix things when they go wrong.',
          },
          {
            title: 'No likes, no tricks',
            description:
              'No likes, no viral loops, no attention tricks—just clear, honest communication.',
          },
        ],
      },
    ],

    faq: {
      title: 'FAQ',
      items: [
        {
          question: 'Is KeepWord a social media platform?',
          answer:
            'No. KeepWord is a non-profit foundation exploring different ways to help people keep their word online. We care about responsibility and trust, not getting attention or going viral.',
        },
        {
          question: 'Is this an app?',
          answer:
            'We might build simple tools to test ideas, but our main goal is to find out what works and share those lessons. We\'ll document what helps, what doesn\'t, and what others can use.',
        },
        {
          question: 'Why focus on "words" and "responsibility"?',
          answer:
            'When words have no consequences, they lose meaning. Trust happens when people do what they say, over time.',
        },
        {
          question: 'Is KeepWord anti-technology?',
          answer:
            'No. KeepWord is against attention-seeking designs. Technology is just a tool—the problem is when tools are designed to keep people hooked.',
        },
        {
          question: 'Who is KeepWord for?',
          answer:
            'Teachers, schools, teams, researchers, and anyone who wants better ways to build trust in small groups online. We start small to learn what works.',
        },
        {
          question: 'How is KeepWord funded?',
          answer:
            'We look for grants and partnerships that help the public good. We\'re not a business and we don\'t make money from people\'s attention or data.',
        },
      ],
    },

    footer: {
      ...baseUIConfig.sections.footer,
      name: 'KeepWord Foundation',
      columns: [
        {
          title: 'Foundation',
          links: [
            { text: 'Mission', href: '/mission' },
            { text: 'Vision', href: '/vision' },
            { text: 'Problem', href: '/problem' },
            { text: 'Approach', href: '/approach' },
          ],
        },
        {
          title: 'Governance',
          links: [
            { text: 'Governance', href: '/governance' },
            { text: 'SDG Alignment', href: '/sdg' },
            { text: 'Roadmap', href: '/roadmap' },
          ],
        },
        {
          title: 'Contact',
          links: [{ text: 'Contact', href: '/contact' }],
        },
      ],
      policies: [
        { text: 'Privacy', href: '/privacy' },
        { text: 'Terms', href: '/terms' },
      ],
      copyright: `© ${new Date().getFullYear()} KeepWord Foundation.`,
      showModeToggle: true,
    },
  },

  links: {
    ...baseUIConfig.links,
    github: 'https://github.com/keepword-org',
    email: 'mailto:contact@keepword.org',
  },
};

// Validate at module load time (startup-time validation)
validateMissionConstraints(
  keepwordOrgConfig.domain,
  keepwordOrgConfig.role,
  keepwordOrgConfig
);

