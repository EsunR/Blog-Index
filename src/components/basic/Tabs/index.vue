<script lang="ts" setup>
import { VNode, computed, getCurrentInstance, ref, toRefs, watch } from "vue";
import { TabPanelProps } from "./types";

defineOptions({
  name: "Tabs",
});

const props = defineProps<{
  modelValue: TabPanelProps["name"];
}>();

const { modelValue } = toRefs(props);

const emits = defineEmits<{
  "update:modelValue": [value: TabPanelProps["name"]];
}>();

const instance = getCurrentInstance();
const children = ref<VNode[]>([]);

watch(
  () => instance?.slots.default?.(),
  (newVal) => {
    const parentNode = newVal?.[0];
    children.value = (parentNode?.children as VNode[]) || [];
  },
  {
    immediate: true,
  }
);

const tabs = computed(() =>
  children.value
    .filter((child) => (child.type as any)?.name === "TabPanel")
    .map((child) => {
      const { name, label } = child.props as TabPanelProps;
      return {
        name,
        label,
      };
    })
);

const activeIndex = computed(() => {
  return tabs.value.findIndex((tab) => tab.name === modelValue.value);
});

function onTabLabelClick(name: TabPanelProps["name"]) {
  emits("update:modelValue", name);
}
</script>

<template>
  <div class="tabs">
    <div class="tabs__header">
      <div
        v-for="item in tabs"
        :key="item.name"
        role="tab"
        :class="['tab-label', { 'is-active': modelValue === item.name }]"
        @click="onTabLabelClick(item.name)"
      >
        {{ item.label }}
      </div>
    </div>
    <div
      class="tabs__content"
      :style="{
        transform: `translateX(calc(-${
          activeIndex * 100
        }% - ${activeIndex}rem))`,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  &__header {
    display: flex;
    margin: 0 calc(var(--super-mini-gap) * -1) var(--mini-gap);
    .tab-label {
      padding: 0 var(--super-mini-gap);
      color: var(--secondary-text-color);
      min-width: 2rem;
      cursor: pointer;

      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 1.5rem;
        margin: var(--super-mini-gap) auto 0;
        background-color: var(--regular-text-color);
        transform: scaleX(0);
        transition: transform 0.2s ease;
        border-radius: var(--regular-border-radius);
      }
      &.is-active {
        color: var(--regular-text-color);
        font-weight: bold;
        &::after {
          transform: scaleX(1);
        }
      }
    }
  }

  &__content {
    display: flex;
    transition: transform 0.4s ease;
    border-radius: var(--regular-border-radius);
  }
}
</style>
