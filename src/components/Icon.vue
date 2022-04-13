<template>
  <i :class="['iconfont', name]" :style="{ fontSize: size }"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "1rem",
    },
  },
});
</script>
