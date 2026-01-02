import type { FoundationRole, CommunicationTone } from '../mission-lock';
import type { ReactNode } from 'react';

export const DOMAINS = ['keepword.org', 'keepword.eu', 'keepword.nl'] as const;
export type Domain = (typeof DOMAINS)[number];

/**
 * Foundation Config: Core identity (mission-critical)
 * Dit is wat KeepWord IS, niet wat het DOET
 */
export interface FoundationConfig {
  domain: Domain;
  locale: 'en' | 'nl';
  role: FoundationRole;
  tone: CommunicationTone;
  name: string;
  url: string;
  description: string;
}

/**
 * UI Config: Presentational (can vary per domain)
 * Dit is HOE content wordt getoond
 */
export interface UIConfig {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  sections: SiteSectionsConfig;
  links: {
    twitter?: string;
    github?: string;
    email?: string;
  };
}

/**
 * Site Config: Combined foundation + UI
 */
export interface SiteConfig extends FoundationConfig, UIConfig {}

// Section-specific config types
export interface NavbarConfig {
  name: string;
  homeUrl: string;
  mobileLinks: Array<{ text: string; href: string }>;
  desktopLinks?: Array<{ text: string; href: string }>; // Optional separate desktop links
  actions: Array<{
    text: string;
    href: string;
    isButton?: boolean;
    variant?: 'default' | 'outline'; // 'glow' removed - too product-y
  }>;
  showNavigation?: boolean;
  logo?: ReactNode;
}

export interface HeroConfig {
  title: string;
  description: string;
  buttons?: Array<{
    href: string;
    text: string;
    variant?: 'default' | 'outline'; // 'glow' removed
    icon?: ReactNode;
  }>;
  // Badge removed - too growth-driven
  mockup?: boolean;
}

export interface TextConfig {
  title?: string;
  // Content as MDX component or markdown file path
  // For simple text, use string. For rich content, use MDX.
  content: string | ReactNode;
  className?: string;
}

export interface CTAConfig {
  title: string;
  description?: string;
  buttons?: Array<{
    href: string;
    text: string;
    variant?: 'default' | 'outline';
    icon?: ReactNode;
  }>;
}

export interface FooterConfig {
  name: string;
  copyright: string;
  columns: Array<{
    title: string;
    links: Array<{ text: string; href: string }>;
  }>;
  policies?: Array<{ text: string; href: string }>;
  showModeToggle?: boolean;
}

export interface FAQConfig {
  title?: string;
  items?: Array<{
    question: string;
    answer: ReactNode;
    value?: string;
  }>;
}

export interface FeatureConfig {
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
    icon?: ReactNode;
  }>;
}

export interface TabsConfig {
  items?: Array<{
    label: string;
    content: ReactNode;
  }>;
}

export interface GalleryConfig {
  title?: string;
  images?: Array<{
    src: string;
    alt: string;
  }>;
}

/**
 * Site Sections Config
 * Only includes sections allowed by mission constraints
 * 
 * Based on actual sections in components/sections/:
 * - CORE: navbar, hero, footer (always required)
 * - CONTENT: text, faq, feature, tabs, gallery (optional, role-dependent)
 * - LOCAL-ONLY: cta (only for keepword.nl)
 * - FORBIDDEN: pricing, stats, logos, testimonials, social-proof, items, bento-grid, carousel
 */
export interface SiteSectionsConfig {
  // Core sections (always required)
  navbar: NavbarConfig;
  hero: HeroConfig;
  footer: FooterConfig;
  
  // Content sections (optional, role-dependent)
  // Singular variants for backward compatibility
  text?: TextConfig;
  feature?: FeatureConfig;
  
  // Plural variants for multiple sections
  textBlocks?: TextConfig[];
  features?: FeatureConfig[];
  
  faq?: FAQConfig;
  tabs?: TabsConfig;
  gallery?: GalleryConfig;
  
  // Local-only section
  cta?: CTAConfig; // Only for keepword.nl (max 1)
  
  // Explicitly forbidden (will throw validation error):
  // pricing, stats, logos, testimonials, social-proof, items, bento-grid, carousel
}

