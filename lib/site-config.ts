import 'server-only'; // Enforce server-only usage
import { headers } from 'next/headers';
import { cache } from 'react';
import type { Domain } from '@/config/sites/types';
import { getSiteConfigForDomain } from '@/config/sites';

/**
 * Get current domain from headers (set by middleware)
 * Server-only: uses headers or environment variable
 * 
 * Next.js is server-first: server components don't have window.
 * Client components should receive domain via props or context.
 */
async function getDomain(): Promise<Domain> {
  // Read from headers (set by middleware)
  // In Next.js 16, headers() is async
  const headersList = await headers();
  const domain = headersList.get('x-domain') as Domain | null;
  if (domain) return domain;
  
  // Fallback to env var (development/testing only)
  const envDomain = process.env.NEXT_PUBLIC_DOMAIN as Domain | undefined;
  if (envDomain) return envDomain;
  
  // Final fallback (shouldn't happen in production with middleware)
  return 'keepword.org';
}

/**
 * Get site configuration for current domain
 * Uses React cache for request-level caching
 * 
 * Server-only: call from server components, layout, page, etc.
 */
export const getSiteConfig = cache(async () => {
  const domain = await getDomain();
  return getSiteConfigForDomain(domain);
});

export type SiteConfig = Awaited<ReturnType<typeof getSiteConfig>>;

