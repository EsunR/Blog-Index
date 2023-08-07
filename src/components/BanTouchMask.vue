<script lang="ts" setup>
defineOptions({
  name: "BanTouchMask",
});

defineProps<{
  touchable: boolean;
}>();
</script>

<template>
  <div v-if="!touchable" class="ban-touch-mask"></div>
</template>

<style lang="scss" scoped>
.ban-touch-mask {
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
}
</style>
