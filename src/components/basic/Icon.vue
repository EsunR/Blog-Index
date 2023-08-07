<script setup lang="ts">
const { size = "1rem" } = defineProps<{
  name: string;
  size?: string;
}>();
</script>

<template>
  <i :class="['iconfont', name]" :style="{ fontSize: size }"></i>
</template>
