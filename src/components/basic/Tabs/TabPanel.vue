<script lang="ts" setup>
import { TabPanelProps } from "./types";

defineOptions({
  name: "TabPanel",
});

defineProps<TabPanelProps>();
</script>

<template>
  <div class="tab-panel">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tab-panel {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  flex-shrink: 0;
  margin-right: var(--regular-gap);
}
</style>
