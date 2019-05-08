<template>
  <div id="home" @mousewheel="nextPage" v-swipeup="showCenter">
    <div :class="[{wrapper_blur: centerShow}, 'wrapper', 'bg-blur']">
      <div :class="['img_shadow', {img_shadow_show: imgLoded}]"></div>
      <div class="inner" style="cursor: pointer" @click="goToBlog">
        <img :class="['R_logo', {R_logo_top: flag}]" src="../assets/R_logo.svg">
        <div :class="['hello', {hello_bottom: flag}]">
          <div>{{language[i]}}</div>
          <div class="hello_bottom_text">点击以访问 EsunR-Blog</div>
        </div>
      </div>
    </div>
    <div
      :class="['bottom', {bottom_show: flag}]"
      style="cursor: pointer"
      @click="centerShow = !centerShow"
    >
      <i class="mdi-chevron-up mdi"></i>
    </div>
    <transition name="fade">
      <div class="shadow" v-show="centerShow"></div>
    </transition>
    <transition name="slide">
      <div v-show="centerShow" class="center_wrapper" @click="hideCenter">
        <div class="center_inner" @click="stopPropagation">
          <center @hide="hideCenter"></center>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
import center from "./center.vue";
export default {
  data() {
    return {
      flag: false,
      language: [
        "欢迎拜访",
        "歡迎拜訪",
        "Welcome, my friend!",
        "訪問へようこそ",
        "嗨，别来无恙",
        "不忘初心，一生浪漫",
        "最近还好吗？",
        "流星，落花，萤火",
        "马车越空，晃荡越响"
      ],
      i: randomNum(0, 8),
      centerShow: false,
      imgLoded: false
    };
  },
  components: {
    center
  },
  methods: {
    goToBlog() {
      window.location.href = "https://www.esunr.xyz/blog/";
    },
    nextPage(e) {
      if (e.deltaY < 0) {
        this.centerShow = true;
      } else {
        this.centerShow = false;
      }
    },
    showCenter() {
      this.centerShow = true;
    },
    hideCenter() {
      this.centerShow = false;
    },
    stopPropagation(e) {
      e.stopPropagation();
    }
  },
  mounted() {
    setTimeout(() => {
      this.flag = true;
    }, 1300);
    var img = new Image();
    img.src = "http://api.dujin.org/bing/1366.php";
    img.onload = () => {
      this.imgLoded = true;
    };
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
    background: url("http://api.dujin.org/bing/1366.php");
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100%;
    animation: logoEnter 1.2s;
    animation-fill-mode: forwards;
    transition: all 0.8s;
    .inner {
      position: relative;
      .R_logo {
        height: 7rem;
        position: absolute;
        transform: translate(-50%, -50%);
        transition: all 1s;
        top: 0;
      }
      .R_logo_top {
        top: -3.2rem;
      }
      .hello {
        color: #ffffff;
        width: 300px;
        text-align: center;
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        opacity: 0;
        top: 100px;
        transition: all 1s;
      }
      .hello_bottom {
        opacity: 1;
        top: 3.5rem;
        .hello_bottom_text {
          font-size: 1rem;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #fff;
        }
      }
    }
  }
  .img_shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fda085;
    overflow: hidden;
    transition: all 0.5s;
  }
  .img_shadow_show {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .wrapper_blur {
    filter: blur(1px);
  }
  .bottom {
    font-size: 2rem;
    position: absolute;
    color: #fff;
    bottom: 0%;
    opacity: 0;
    transition: all 1s;
  }
  .bottom_show {
    bottom: 5%;
    opacity: 1;
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .center_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    .center_inner {
      width: 95%;
      height: 80%;
      position: absolute;
      bottom: 1rem;
      overflow: hidden;
      border-radius: 1rem;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
</style>