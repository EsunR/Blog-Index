<script lang="ts" setup>
defineOptions({
  name: "Drawer",
});

defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  "update:modelValue": [value: boolean];
}>();
</script>

<template>
  <div class="drawer">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
