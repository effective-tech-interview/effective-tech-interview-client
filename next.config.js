/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true, Next.js' swc compiler is used for minification by default since v13.
  compiler: {
    emotion: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'effective-tech-client-assets.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
