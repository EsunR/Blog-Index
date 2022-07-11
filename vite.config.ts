import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  envDir: "./"
});
