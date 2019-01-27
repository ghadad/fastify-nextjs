module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: ["**/pages/**/*.test.[jt]s?(x)", "**/components/**/*.test.[jt]s?(x)"],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
}
