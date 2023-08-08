import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [vue(), vueJsx(), eslintPlugin(), viteCompression()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
    envDir: "./",
  });
};
