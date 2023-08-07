<script lang="ts" setup>
import { ref } from "vue";
import Drawer from "@/components/basic/Drawer.vue";

defineOptions({
  name: "AppDrawer",
});

const drawerVisible = ref(false);

function onDrawerHandlerClick() {
  drawerVisible.value = true;
}
</script>

<template>
  <div class="app-drawer">
    <div class="drawer-handler" @click="onDrawerHandlerClick">
      <span class="drawer-handler__icon">👆</span>
      <span class="drawer-handler__text">Slide Up</span>
    </div>
  </div>

  <Drawer :model-value="drawerVisible" />
</template>

<style lang="scss" scoped>
.app-drawer {
  .drawer-handler {
    position: absolute;
    color: #fff;
    bottom: 5vh;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    transform: translateX(-50%);
    text-align: center;
    cursor: pointer;
    &__text {
      font-size: 1rem;
      margin-top: 5px;
      animation: float 4s infinite ease-in-out;
    }
  }
}
</style>
