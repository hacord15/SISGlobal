/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'randomuser.me', 'logo.clearbit.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
