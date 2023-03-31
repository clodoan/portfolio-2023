/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents:
      true |
      {
        displayName: false,
        ssr: false,
      },
  },
};

module.exports = nextConfig;
