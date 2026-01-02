import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DOMAINS = ['keepword.org', 'keepword.eu', 'keepword.nl'] as const;
type Domain = (typeof DOMAINS)[number];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const domain = hostname.split(':')[0] as Domain;
  
  // In development, allow localhost and use env var fallback
  const isDevelopment = process.env.NODE_ENV === 'development';
  const envDomain = process.env.NEXT_PUBLIC_DOMAIN as Domain | undefined;
  
  let resolvedDomain: Domain;
  
  if (DOMAINS.includes(domain)) {
    // Known domain from host header
    resolvedDomain = domain;
  } else if (isDevelopment && envDomain && DOMAINS.includes(envDomain)) {
    // Development: use env var if host is localhost
    resolvedDomain = envDomain;
  } else if (!DOMAINS.includes(domain)) {
    // Unknown domain: serve 404 (no redirect to prevent SEO/analytics issues)
    return new NextResponse('Unknown domain', { status: 404 });
  } else {
    resolvedDomain = domain;
  }
  
  // Set domain in header for server components to read
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-domain', resolvedDomain);
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

