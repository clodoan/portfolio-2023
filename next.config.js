const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    'js',
    'jsx',
    'mdx',
    'ts',
    'tsx',
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
  ],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

module.exports = withMDX(nextConfig);
