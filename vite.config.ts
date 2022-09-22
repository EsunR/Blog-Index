import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [vue(), eslintPlugin(), viteCompression()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
    envDir: "./",
  });
};
