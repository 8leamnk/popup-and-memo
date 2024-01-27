const jestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};

module.exports = jestConfig;
