<script lang="ts" setup>
import Icon from "@/components/basic/Icon.vue";

defineOptions({
  name: "GithubBadge",
});
</script>

<template>
  <a v-if="$config.GITHUB_URL" class="github-badge" :href="$config.GITHUB_URL">
    <Icon name="icon-github" size="2rem" />
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
