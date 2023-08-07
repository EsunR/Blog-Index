import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import GLOBAL_CONFIG from "./config";
import "@/assets/css/index.scss";

export const createApp = ViteSSG(App, ({ app }) => {
  app.config.globalProperties.$config = GLOBAL_CONFIG;
});
