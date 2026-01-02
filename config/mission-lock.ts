/**
 * Mission Lock: Technische constraints die KeepWord's identiteit beschermen
 * 
 * Gebaseerd op daadwerkelijke sections in components/sections/
 */

/**
 * SECTIONS CATEGORISERING
 * 
 * Gebaseerd op components/sections/ folder:
 */

// ✅ ALTIJD TOEGESTAAN (core structure)
export const CORE_SECTIONS = [
  'navbar',  // Navigation
  'hero',    // Hero section
  'footer',  // Footer
] as const;

// ✅ CONDITIONEEL TOEGESTAAN (content sections)
export const CONTENT_SECTIONS = [
  'text',    // Text/content blocks
  'faq',     // FAQ (informatief, geen marketing)
  'feature', // Feature showcase (documentary tone)
  'tabs',    // Tabbed content
  'gallery', // Image gallery (documentary/proof)
] as const;

// ⚠️ ALLEEN VOOR LOCAL DOMAIN (.nl)
export const LOCAL_ONLY_SECTIONS = [
  'cta',     // Call-to-action (max 1 voor keepword.nl)
] as const;

// ❌ VOLLEDIG VERBODEN (marketing/growth patterns)
export const FORBIDDEN_SECTIONS = [
  'pricing',        // Pricing tables - commercieel
  'stats',          // Stats/metrics - engagement tracking
  'logos',          // Logo grids - "trusted by" social proof
  'testimonials',   // Testimonials - social proof
  'social-proof',   // Social proof sections
  'items',          // Feature items grid - te product-achtig
  'bento-grid',     // Bento grid - te marketing-achtig
  'carousel',       // Carousels - engagement pattern
] as const;

// Alle beschikbare section names (voor validatie)
export const ALL_SECTION_NAMES = [
  ...CORE_SECTIONS,
  ...CONTENT_SECTIONS,
  ...LOCAL_ONLY_SECTIONS,
  ...FORBIDDEN_SECTIONS,
] as const;

export type SectionName = (typeof ALL_SECTION_NAMES)[number];
export type AllowedSectionName = 
  | (typeof CORE_SECTIONS)[number]
  | (typeof CONTENT_SECTIONS)[number]
  | (typeof LOCAL_ONLY_SECTIONS)[number];

// UI patterns die verboden zijn
export const FORBIDDEN_UI_PATTERNS = [
  'glow',        // Te veel "premium product" vibes
  'badges',      // Growth-driven badges
  'countdown',   // Urgency/scarcity
  'scarcity',    // Urgency patterns
  'urgency',     // Urgency patterns
  'marquee',     // Auto-scrolling (engagement trap)
] as const;

/**
 * FOUNDATION ROLES & CONSTRAINTS
 */
export type FoundationRole = 'institutional' | 'european' | 'local';
export type CommunicationTone = 'documentary' | 'policy' | 'human';

export interface RoleConstraints {
  role: FoundationRole;
  tone: CommunicationTone;
  allowedSections: readonly AllowedSectionName[];
  maxCTAs: number;
  allowedContentSections: readonly (typeof CONTENT_SECTIONS)[number][];
}

export const ROLE_CONSTRAINTS: Record<FoundationRole, RoleConstraints> = {
  institutional: {
    role: 'institutional',
    tone: 'documentary',
    // Core + select content sections (documentary tone)
    allowedSections: [
      'navbar',
      'hero',
      'text',
      'footer',
      // Content sections (optioneel, alleen als informatief)
      'faq',
      'feature', // Documentary feature showcase
      'gallery', // Proof/documentation
    ],
    maxCTAs: 0, // Geen CTAs - puur informatief
    allowedContentSections: ['text', 'faq', 'feature', 'gallery'],
  },
  european: {
    role: 'european',
    tone: 'policy',
    // Core + policy-focused content
    allowedSections: [
      'navbar',
      'hero',
      'text',
      'footer',
      'faq',
      'tabs', // Policy sections/tabs
      'feature', // Policy features
    ],
    maxCTAs: 0, // Geen CTAs - policy/documentary
    allowedContentSections: ['text', 'faq', 'tabs', 'feature'],
  },
  local: {
    role: 'local',
    tone: 'human',
    // Core + content + max 1 CTA
    allowedSections: [
      'navbar',
      'hero',
      'text',
      'cta', // ALLEEN voor local domain
      'footer',
      'faq',
      'feature',
    ],
    maxCTAs: 1, // Max 1 CTA: "meedoen" only
    allowedContentSections: ['text', 'faq', 'feature'],
  },
};

/**
 * Validate config against mission constraints
 * Throws at startup-time (module load) if constraints are violated
 * 
 * Note: In Next.js/serverless, this runs at cold start, not build-time.
 * For true build-time validation, use the CI script (see package.json).
 */
export function validateMissionConstraints(
  domain: string,
  role: FoundationRole,
  config: { sections: Record<string, unknown> }
): void {
  const constraints = ROLE_CONSTRAINTS[role];
  const usedSections = Object.keys(config.sections) as SectionName[];
  
  // 1. Check forbidden sections (NOOIT toegestaan)
  const usedForbidden = usedSections.filter(s => 
    FORBIDDEN_SECTIONS.includes(s as any)
  );
  if (usedForbidden.length > 0) {
    throw new Error(
      `[Mission Lock] Forbidden sections used: ${usedForbidden.join(', ')}. ` +
      `Domain: ${domain}, Role: ${role}`
    );
  }
  
  // 2. Check local-only sections (alleen voor local role)
  const usedLocalOnly = usedSections.filter(s =>
    LOCAL_ONLY_SECTIONS.includes(s as any)
  );
  if (usedLocalOnly.length > 0 && role !== 'local') {
    throw new Error(
      `[Mission Lock] Local-only sections used for non-local role: ${usedLocalOnly.join(', ')}. ` +
      `Domain: ${domain}, Role: ${role}`
    );
  }
  
  // 3. Check allowed sections per role
  const notAllowed = usedSections.filter(
    s => !constraints.allowedSections.includes(s as AllowedSectionName)
  );
  if (notAllowed.length > 0) {
    throw new Error(
      `[Mission Lock] Sections not allowed for role "${role}": ${notAllowed.join(', ')}. ` +
      `Allowed: ${constraints.allowedSections.join(', ')}`
    );
  }
  
  // 4. Count CTAs (simplified - would need deeper inspection)
  const ctaCount = usedSections.filter(s => s === 'cta').length;
  if (ctaCount > constraints.maxCTAs) {
    throw new Error(
      `[Mission Lock] Too many CTAs for role "${role}": ${ctaCount}, max: ${constraints.maxCTAs}`
    );
  }
}

