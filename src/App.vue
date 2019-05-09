<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
html,
body {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

@media screen and (max-width: 900px) {
  html {
    font-size: 14px;
  }
}
</style>



