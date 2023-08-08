<script lang="ts" setup>
defineOptions({
  name: "WebsiteItem",
});

defineProps<{
  item: WebsiteItem;
}>();
</script>

<template>
  <div class="website-item">
    <div class="website-item__info">
      <div class="title">{{ item.title }}</div>
      <div class="description">{{ item.description }}</div>
    </div>
    <div class="website-item__logo">
      <img v-if="item.icon" :alt="item.title" />
      <span v-else>{{ item.title.slice(0, 1) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$text-line-height: 1.4rem;

.website-item {
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: var(--regular-border-radius);
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: calc(
    $text-line-height + var(--super-mini-gap) + $text-line-height * 2
  );

  &__info {
    flex: 1;
    overflow: hidden;
    margin-right: 0.4rem;
    .title {
      margin-bottom: var(--super-mini-gap);
      // 文本最多一行
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: $text-line-height;
    }
    .description {
      font-size: var(--small-font-size);
      color: var(--secondary-text-color);
      // 文本最多两行
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: $text-line-height;
    }
  }

  &__logo {
    width: 3.5rem;
    height: 3.5rem;
    background-color: #bcbcbc;
    border-radius: 100%;
    position: relative;
    span {
      font-size: 2rem;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
