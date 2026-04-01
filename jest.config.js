/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverage: true,
  coverageThreshold: { global: { branches: 70, functions: 70, lines: 70, statements: 70 } },
  passWithNoTests: true,
  transform: { '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }] },
};
