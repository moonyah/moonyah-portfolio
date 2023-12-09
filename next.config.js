/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/moonyah-portfolio',
  output: 'export',
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },

  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
