/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
})

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withPWA(nextConfig)
