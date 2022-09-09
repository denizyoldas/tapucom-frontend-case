const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './'
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@settings/(.*)': '<rootDir>/src/settings/$1',
    '@data/(.*)': '<rootDir>/src/data/$1'
  }
}
module.exports = createJestConfig(customJestConfig)
