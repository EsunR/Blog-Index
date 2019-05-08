<template>
  <div id="center" v-swipedown="hideCenter">
    <div class="top">
      <div class="title">Play Ground</div>
      <div class="close">
        <i class="mdi mdi-close-box" @click="$emit('hide')"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    hideCenter() {
      this.$emit("hide");
    }
  }
};
</script>

<style lang='scss' scoped>
#center {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  padding: 1rem;
  background-color: #f8f8f8;
  color: rgba(0, 0, 0, 0.8);
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
  }
}
</style>