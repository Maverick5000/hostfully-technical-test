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
    baseUrl: "http://localhost:5173/",
    viewportWidth: 1024,
    viewportHeight: 600,
  },
});
