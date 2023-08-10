<script lang="ts" setup>
import { onMounted, ref, toRefs, watch } from "vue";
import Drawer from "@/components/basic/Drawer.vue";
import { UpOutlined } from "@ant-design/icons-vue";
import Tabs from "@/components/basic/Tabs/index.vue";
import TabPanel from "@/components/basic/Tabs/TabPanel.vue";
import GLOBAL_CONFIG from "@/config";
import { TabPanelProps } from "./basic/Tabs/types";
import WebsiteItem from "./basic/WebsiteItem.vue";
import useMouseWheel from "@/hooks/useMouseWheel";
import useTouch from "@/hooks/useTouch";

defineOptions({
  name: "WebsiteDrawer",
});

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const { modelValue } = toRefs(props);
const activeTabs = ref<TabPanelProps["name"]>("");
const websiteSorts = ref<WebsiteSort[]>([]);
const websiteItems = ref<WebsiteItem[]>([]);
const disableUserActionInput = ref(false);

useMouseWheel({
  disable: disableUserActionInput,
  onWheelUp() {
    emit("update:modelValue", true);
  },
});

useTouch({
  disable: disableUserActionInput,
  onSlideUp() {
    emit("update:modelValue", true);
  },
});

function onDrawerHandlerClick() {
  emit("update:modelValue", true);
}

function getWebsiteDrawerData() {
  websiteSorts.value = GLOBAL_CONFIG.WEBSITE_SORTS;
  websiteItems.value = GLOBAL_CONFIG.WEBSITE_ITEMS;
}

watch(
  modelValue,
  (newVal) => {
    disableUserActionInput.value = newVal;
  },
  { immediate: true }
);

onMounted(() => {
  getWebsiteDrawerData();
  activeTabs.value = websiteSorts.value[0].id;
});
</script>

<template>
  <div class="website-drawer">
    <div class="drawer-handler" @click="onDrawerHandlerClick">
      <span class="drawer-handler__icon">
        <up-outlined />
      </span>
      <span class="drawer-handler__text slide-up">Slide Up</span>
      <span class="drawer-handler__text wheel-up">Wheel Up</span>
    </div>
    <Drawer
      :model-value="modelValue"
      class="website-drawer__drawer"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <Tabs v-model="activeTabs">
        <TabPanel
          v-for="websiteSort in websiteSorts"
          :key="websiteSort.id"
          :name="websiteSort.id"
          :label="websiteSort.title"
        >
          <WebsiteItem
            v-for="(website, index) in $config.WEBSITE_ITEMS.filter(
              (item) => item.sortId === websiteSort.id
            )"
            :key="index"
            :item="website"
          />
        </TabPanel>
      </Tabs>
    </Drawer>
  </div>
</template>

<style lang="scss" scoped>
.website-drawer {
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
    &__icon {
      transform: scale(1.2, 0.8);
    }
    &__text {
      font-size: var(--regular-font-size);
      margin-top: var(--mini-gap);
      animation: float 4s infinite ease-in-out;

      &.slide-up {
        @media (any-hover: hover) {
          display: none;
        }
      }

      &.wheel-up {
        @media (hover: none) {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.website-drawer__drawer {
  .drawer__content {
    .tabs__content {
      height: 60vh;
    }
  }

  .tab-panel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: var(--mini-gap);
    align-items: flex-start;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
