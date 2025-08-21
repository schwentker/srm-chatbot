/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/srm-chatbot',
  assetPrefix: '/srm-chatbot/',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
