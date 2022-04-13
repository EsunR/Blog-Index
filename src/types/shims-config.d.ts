import GLOBAL_CONFIG from "@/config";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $config: typeof GLOBAL_CONFIG;
  }
}
