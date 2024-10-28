import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['static.moliera2.com'],
  },
};

export default nextConfig;
