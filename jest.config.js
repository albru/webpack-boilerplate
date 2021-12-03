/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
    "verbose": true,
    "coverageReporters": [
      "lcov"
    ],
    "testResultsProcessor": "jest-sonar-reporter",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/setupTests.ts"
  ],
  moduleNameMapper: {
    "@/app(.*)$": "<rootDir>/src/app/$1",
    "@/entities(.*)$": "<rootDir>/src/entities/$1",
    "@/features(.*)$": "<rootDir>/src/features/$1",
    "@/pages(.*)$": "<rootDir>/src/pages/$1",
    "@/shared(.*)$": "<rootDir>/src/shared/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css)$": "identity-obj-proxy"
  }
};
