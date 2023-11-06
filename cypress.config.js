const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false,
    baseUrl:'https://www.accedo.tv/job-openings/QAEngineer-A4B38?FSU=QAEngineer-A4B38&LSU=QAEngineer-A4B38#job-form'
  },
});
