/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://f1lander.github.io/ff-admin/' : '',
}

module.exports = nextConfig
