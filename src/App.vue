<script setup lang="ts">
import { useHead } from "@vueuse/head";
import GLOBAL_CONFIG from "./config";
import { onMounted, ref } from "vue";
import BanTouchMask from "@/components/BanTouchMask.vue";
import CenterLogo from "@/components/CenterLogo.vue";
import GithubBadge from "@/components/GithubBadge.vue";
import ICP from "@/components/ICP.vue";

defineOptions({
  name: "App",
});

const animationEnd = ref<boolean>(false);
const drawerVisible = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    animationEnd.value = true;
  }, 1300);
});

useHead({
  title: GLOBAL_CONFIG.TKD.title,
  meta: [
    {
      name: "description",
      content: GLOBAL_CONFIG.TKD.description,
    },
    {
      name: "keywords",
      content: GLOBAL_CONFIG.TKD.keywords,
    },
  ],
});
</script>

<template>
  <div id="main-view">
    <!-- 遮罩：防止用户在动画播放期间点击屏幕 -->
    <BanTouchMask :touchable="animationEnd" />

    <!-- github 徽标 -->
    <GithubBadge />

    <!-- 中间LOGO部分 -->
    <CenterLogo :drawer-visible="drawerVisible" :touchable="animationEnd" />

    <!-- 备案号 -->
    <ICP :visible="animationEnd" />
  </div>
</template>

<style lang="scss" scoped>
#main-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
