import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const cspHeader = {
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' assets.calendly.com assets.apollo.io va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
    "font-src 'self' fonts.gstatic.com",
    "frame-src calendly.com",
    "img-src 'self' data: blob: o.apollo.io",
    "connect-src 'self' calendly.com assets.calendly.com vitals.vercel-insights.com va.vercel-scripts.com assets.apollo.io app.apollo.io o.apollo.io api.apollo.io",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
};

// Applied to every response. The CSP is intentionally kept separate: a CSP on
// XML responses blocks Chrome's built-in pretty-print viewer, so sitemap.xml
// would render as a raw wall of text instead of a formatted tree.
const baseSecurityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/bouwblokken",
        destination: "/methode#bouw",
        permanent: true,
      },
      {
        source: "/expertise/fractional-head-of-sales",
        destination: "/de-motor",
        permanent: true,
      },
      {
        source: "/expertise",
        destination: "/methode",
        permanent: true,
      },
      {
        source: "/het-partnerschap",
        destination: "/methode#partnerschap",
        permanent: true,
      },
      {
        source: "/diensten/:path*",
        destination: "/methode#bouw",
        permanent: true,
      },
      {
        source: "/investering",
        destination: "/methode#bouw",
        permanent: true,
      },
      {
        source: "/ai-sales-automation",
        destination: "/ai-automation",
        permanent: true,
      },
      {
        source: "/over-ons",
        destination: "/over-tim",
        permanent: true,
      },
      {
        source: "/diagnose",
        destination: "/score",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Everything except sitemap.xml/robots.txt gets the full security
        // header set, including the CSP.
        //
        // sitemap.xml is intentionally NOT matched here: it is served by the
        // custom route handler at src/app/sitemap.xml/route.ts, which sets its
        // own minimal headers (Content-Type, X-Content-Type-Options,
        // Cache-Control) and — critically — NO Content-Disposition header.
        // Chrome treats any response carrying a Content-Disposition header as a
        // downloadable "file" and skips its built-in XML pretty-print viewer,
        // so adding the base security headers (or the CSP) here would reintroduce
        // the raw "wall of text" rendering. Keeping the sitemap response lean
        // matches how other sites get the formatted, collapsible XML tree.
        source: '/((?!sitemap\\.xml|robots\\.txt).*)',
        headers: [cspHeader, ...baseSecurityHeaders],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
