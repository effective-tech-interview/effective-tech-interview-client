/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig()();
  return {
    ...nextJestConfig,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '^~/(.*)$': '<rootDir>/src/$1',
      '\\.svg$': '<rootDir>/__mocks__/svg.js',
    },
    testPathIgnorePatterns: ['<rootDir>/src/__tests__/utils/*'],
  };
};

module.exports = jestConfig;
