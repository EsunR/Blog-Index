import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";
import GLOBAL_CONFIG from "./src/config";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      vue(),
      eslintPlugin(),
      createHtmlPlugin({
        inject: {
          data: {
            title: GLOBAL_CONFIG.HTML_META.title,
            keywords: GLOBAL_CONFIG.HTML_META.keywords,
            description: GLOBAL_CONFIG.HTML_META.description,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
    envDir: "./",
  });
};
