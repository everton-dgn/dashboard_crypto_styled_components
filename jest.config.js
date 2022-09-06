module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  fakeTimers: {
    enableGlobally: true
  },
  testPathIgnorePatterns: ['/node_modules'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/index.tsx',
    'src/app.tsx',
    'src/pages/index.tsx',
    'src/routes/',
    'src/components/index.tsx',
    'src/components/templates/index.tsx',
    'src/theme/',
    'src/globalStyles/',
    'src/providers/',
    'src/assets/',
    'src/tests/providers/',
    'src/types/',
    'src/testHelpers/',
    'types.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/testHelpers/mocks/svg.ts'
  },
  transform: {
    '^.+\\.tsx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } }
    ]
  }
  // coverageThreshold: {
  //  global: {
  //    branches: 85,
  //    functions: 85,
  //    lines: 85,
  //    statements: -10
  //  }
  // }
}
