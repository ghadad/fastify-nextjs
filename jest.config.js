module.exports = {
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "react-testing-library/cleanup-after-each"
  ],
  testMatch: [
    "**/pages/**/*.test.[jt]s?(x)",
    "**/components/**/*.test.[jt]s?(x)"
  ],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};
