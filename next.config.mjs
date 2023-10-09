import bundleAnalyzer from '@next/bundle-analyzer'

const plugins = []

plugins.push(
  bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    deviceSizes: [640, 750, 1024, 1280, 1440, 1680, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 430],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31_536_000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default plugins.reduce((config, plugin) => plugin(config), nextConfig)
