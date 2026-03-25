import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' assets.calendly.com",
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
      "font-src 'self' fonts.gstatic.com",
      "frame-src calendly.com",
      "img-src 'self' data: blob:",
      "connect-src 'self' calendly.com assets.calendly.com vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
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
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
