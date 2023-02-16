/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true, Next.js' swc compiler is used for minification by default since v13.
  compiler: {
    emotion: true,
  },
  // modularizeImports experimental
  // modularizeImports: {
  //   '@emotion/react': {
  //     transform: '@emotion/react/{{member}}',
  //   }
  // },
};

module.exports = nextConfig;
