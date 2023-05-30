export default {
  preset: 'ts-jest', // Use ts-jest for typescript support
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  verbose: true, // Display individual test results with the test suite hierarchy.
};
