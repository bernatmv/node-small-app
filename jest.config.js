module.exports = {
  testEnvironment: "node",
  transform: {
    ".(ts|tsx)": "ts-jest/preprocessor.js"
  },
  moduleNameMapper: {
    "\\.(css|less)$": "jest-style-mock.js"
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  globals: {
    "ts-jest": {
      "skipBabel": true
    }
  },
  testMatch: ["<rootDir>/__tests__/**/*.spec.{ts,tsx}"]
};