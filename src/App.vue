<script setup lang="ts">
import { useHead } from "@unhead/vue";
import GLOBAL_CONFIG from "./config";
import { onMounted, ref, watch } from "vue";
import BanTouchMask from "@/components/BanTouchMask.vue";
import CenterLogo from "@/components/CenterLogo.vue";
import GithubBadge from "@/components/GithubBadge.vue";
import ICP from "@/components/ICP.vue";
import WebsiteDrawer from "./components/WebsiteDrawer.vue";
import useMobileVhCssVar from "@/hooks/useMobileVhCssVar";

defineOptions({
  name: "App",
});

const animationEnd = ref<boolean>(false);
const drawerVisible = ref<boolean>(false);
const backgroundLoaded = ref<boolean>(false);

useMobileVhCssVar();

onMounted(() => {
  setTimeout(() => {
    animationEnd.value = true;
  }, 1300);
});

watch([backgroundLoaded, animationEnd], () => {
  if (backgroundLoaded.value && animationEnd.value) {
    document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
  }
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
    <CenterLogo
      :drawer-visible="drawerVisible"
      :touchable="animationEnd"
      @background-loaded="backgroundLoaded = true"
    />

    <!-- 应用抽屉 -->
    <WebsiteDrawer v-model="drawerVisible" />

    <!-- 备案号 -->
    <ICP :visible="animationEnd" />
  </div>
</template>

<style lang="scss" scoped>
#main-view {
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
</style>
