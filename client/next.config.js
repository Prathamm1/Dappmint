/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  reactStrictMode: true,
  // Other configuration options can be added here
};

module.exports = nextConfig;
