const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/presentation/components/$1',
    '^@/*/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="pt-BR"></html>',
    url: 'http://localhost:3000/',
    userAgent: 'Agent/007',
  },
};

module.exports = createJestConfig(config);
