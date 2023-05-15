const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    username: 'Admin',
    password: 'admin123'
  },
  e2e: {
      baseUrl: 'https://opensource-demo.orangehrmlive.com',
      specPattern: 'cypress/e2e/**/*.spec.ts'
  },
});
