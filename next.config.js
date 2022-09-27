/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/:all',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
