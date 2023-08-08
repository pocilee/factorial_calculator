const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseApiUrl: "https://qainterview.pythonanywhere.com/factorial",
    baseUrl: "https://qainterview.pythonanywhere.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
