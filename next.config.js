/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching
  },
  i18n,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withPWA(nextConfig)
