import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      vue(),
      eslintPlugin(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_HTML_TITLE,
            keywords: env.VITE_HTML_KEYWORDS,
            description: env.VITE_HTML_DESCRIPTION,
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
