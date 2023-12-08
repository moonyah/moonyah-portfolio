/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/moonyah.github.io',
  output: {
    export: {
      pages: ['/'],
    },
  },
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },

  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
