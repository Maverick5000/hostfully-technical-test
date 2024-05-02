import { defineConfig } from "cypress";
import customViteConfig from "./vite.config";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: customViteConfig,
    },
    supportFile: false,
  },

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
