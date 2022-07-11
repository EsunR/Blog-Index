/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_BLOG_NAME: string;
  readonly VITE_BLOG_URL: string;
  readonly VITE_GITHUB_URL: string;
  readonly VITE_BACKGROUND_IMG_URL: string;
  readonly VITE_ICP_CODE: string;
  readonly VITE_FOOTER_INFO: string;
  readonly VITE_SLOGAN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
