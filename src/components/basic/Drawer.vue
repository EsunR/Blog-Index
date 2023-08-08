<script lang="ts" setup>
import { CloseSquareFilled, SketchOutlined } from "@ant-design/icons-vue";

defineOptions({
  name: "Drawer",
});

defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

function onCloseBtnClick() {
  emit("update:modelValue", false);
}
</script>

<template>
  <div :class="['drawer', { 'is-opened': modelValue }]">
    <close-square-filled class="drawer__close-btn" @click="onCloseBtnClick" />
    <div class="drawer__content">
      <slot></slot>
    </div>
    <div class="drawer__footer">
      <sketch-outlined class="footer-icon" />
      <a href="https://github.com/EsunR/Blog-Index" target="_blank">
        Driven by <b>EsunR/Blog-Index</b>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  padding: 1rem;
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transition: transform ease 0.5s;
  transform: translate(-50%, calc(100% + 0.5rem));
  z-index: 999;
  background-color: #f1f1f1;
  width: calc(100vw - 1rem);
  box-sizing: border-box;
  border-radius: var(--regular-border-radius);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 1200px;
    width: 90vw;
    bottom: 3rem;
    transform: translate(-50%, calc(100% + 3rem));
  }

  &.is-opened {
    transform: translate(-50%, 0);
  }

  &__close-btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  &__content {
    margin-bottom: var(--super-mini-gap);
  }

  &__footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: var(--small-font-size);
    .footer-icon {
      margin-right: 0.3rem;
      font-size: var(--regular-font-size);
    }
  }
}
</style>
