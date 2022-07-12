<template>
  <MainView />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import MainView from "@/components/MainView.vue";
import { useHead } from "@vueuse/head";
import GLOBAL_CONFIG from "./config";

export default defineComponent({
  name: "App",
  components: {
    MainView,
  },
  setup() {
    // set html head
    useHead({
      title: GLOBAL_CONFIG.HTML_HEAD.title,
      meta: [
        {
          name: "description",
          content: GLOBAL_CONFIG.HTML_HEAD.description,
        },
        {
          name: "keywords",
          content: GLOBAL_CONFIG.HTML_HEAD.keywords,
        },
      ],
    });
  },
});
</script>

<style lang="scss">
#app {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 900px) {
  html {
    font-size: 14px;
  }
}
</style>
