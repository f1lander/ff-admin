/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ff-admin' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ff-admin' : '',
}

module.exports = nextConfig
