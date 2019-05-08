<template>
  <div id="home">
    <div class="wrapper">
      <div class="inner">
        <img class="R_logo" src="../assets/R_logo.svg">
        <!-- <span class="hello"> , 你好</span> -->
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
    }
  }
};
</script>

<style lang='scss' scoped>
#home {
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
  .wrapper {
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    animation: logoEnter 1.2s;
    animation-fill-mode: forwards;
    .inner {
      .R_logo {
        width: 6rem;
      }
      .hello{
        font-size: 4rem;
        color: #ffffff;
      }
    }
  }
}

@keyframes logoEnter {
  0% {
    opacity: 0;
    width: 0rem;
    height: 0rem;
  }
  20% {
    opacity: 1;
    width: 15rem;
    height: 15rem;
  }
  80% {
    transform: rotate(360deg);
    width: 15rem;
    height: 15rem;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
}
</style>