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
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});
