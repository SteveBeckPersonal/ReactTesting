module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
    reporters: [
        "default",
        "jest-junit"
      ]
   // setupFilesAfterEnv:['./src/tests/setupTests.js']
  };