module.exports = {
  coverageDirectory: './coverage/',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.tsx',
    '!src/services/**/*.{ts,tsx}',
    '!src/App.tsx',
    '!src/AppErrorBoundary.tsx',
    '!src/AppWrapper.tsx',
    '!src/main.tsx',
    '!src/vite-env.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  preset: 'ts-jest',
  resetMocks: true,
  restoreMocks: true,
  roots: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/test-utils/jest.setup.ts'],
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
}
