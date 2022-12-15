const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '25g3uh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
