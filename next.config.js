/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

const withImages = require('next-images')

module.exports = withImages({ esModule: true })

module.exports = nextConfig
