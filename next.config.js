/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching
})

const nextConfig = {
  i18n,
  images: {
    domains: ['assets.example.com', 'picsum.photos']
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withPWA(nextConfig)
