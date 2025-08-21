/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
