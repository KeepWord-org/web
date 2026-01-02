import type { Domain, SiteConfig } from './types';
import { keepwordOrgConfig } from './domains/keepword.org';
import { keepwordEuConfig } from './domains/keepword.eu';
import { keepwordNlConfig } from './domains/keepword.nl';
import { validateMissionConstraints } from '../mission-lock';

const configs: Record<Domain, SiteConfig> = {
  'keepword.org': keepwordOrgConfig,
  'keepword.eu': keepwordEuConfig,
  'keepword.nl': keepwordNlConfig,
};

/**
 * Get site configuration for a specific domain
 * Used by getSiteConfig() in lib/site-config.ts
 * 
 * Note: Validation happens at module load time (startup-time),
 * but we can add runtime checks here for extra safety
 */
export function getSiteConfigForDomain(domain: Domain): SiteConfig {
  const config = configs[domain];
  if (!config) {
    throw new Error(
      `[Mission Lock] No config found for domain: ${domain}. ` +
      `This should never happen - all domains must be configured.`
    );
  }
  
  // Runtime validation (redundant but safe)
  // Startup-time validation already happened at module load
  validateMissionConstraints(config.domain, config.role, config);
  
  return config;
}

/**
 * Get all configured domains
 */
export function getDomains(): readonly Domain[] {
  return Object.keys(configs) as Domain[];
}

export type { SiteConfig, Domain } from './types';

