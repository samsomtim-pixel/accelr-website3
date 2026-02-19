import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/bouwblokken",
        destination: "/methode#bouw",
        permanent: true,
      },
      {
        source: "/de-bouw",
        destination: "/methode#bouw",
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
};

export default nextConfig;
