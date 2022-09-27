/** @type {import('next').NextConfig} */
const nextConfig = {
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
