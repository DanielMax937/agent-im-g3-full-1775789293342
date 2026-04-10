/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  collectCoverageFrom: [
    "lib/**/*.js",
    "!lib/**/*.test.js",
    "src/**/*.js",
    "!src/**/*.test.js",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "json-summary"],
};
