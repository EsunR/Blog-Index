<script lang="ts" setup>
import { GithubFilled } from "@ant-design/icons-vue";

defineOptions({
  name: "GithubBadge",
});
</script>

<template>
  <a v-if="$config.GITHUB_URL" class="github-badge" :href="$config.GITHUB_URL">
    <GithubFilled :style="{ fontSize: '2rem' }" />
  </a>
</template>

<style lang="scss" scoped>
.github-badge {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
}
</style>
