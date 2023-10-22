/// <reference types="vitest" />

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import eslint from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/age-calculator-app/",
  cacheDir: "./vite/cache",
  envDir: "./environment",
  plugins: [tsconfigPaths(), eslint(), react()],
  test: {
    clearMocks: true,
    coverage: {
      "100": true,
      enabled: true,
      provider: "istanbul",
      reporter: ["text", "lcov"],
      reportsDirectory: "./vitest/coverage",
    },
    css: true,
    environment: "jsdom",
    globals: true,
    include: ["./vitest/component/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    passWithNoTests: true,
    setupFiles: ["./vitest/setup/jsdom.ts", "./vitest/setup/msw.ts"],
  },
});
