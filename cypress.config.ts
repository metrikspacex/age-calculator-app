import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      bundler: "vite",
      framework: "react",
    },
    specPattern: [
      "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
      "cypress/page/**/*.cy.{js,jsx,ts,tsx}",
    ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      const baseUrl = {
        dev: "http://localhost:5173/age-calculator-app/",
        prod: "https://metrikspacex.github.io/age-calculator-app/",
      };

      config.baseUrl = baseUrl[config.env.VERSION];
      return config;
    },
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
  },
  env: {},
});
