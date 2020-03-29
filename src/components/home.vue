<template>
  <div id="home" @mousewheel="handleMouseWheel" v-swipeup="showCenter">
    <!-- 遮罩：防止用户在动画播放期间点击屏幕 -->
    <div
      class="mask_ban_touch"
      v-if="!flag"
      style="width: 100%; height: 100%; z-index: 999; position: absolute"
    ></div>

    <!-- github 徽标 -->
    <a
      v-if="$config.GITHUB"
      class="github mdi mdi-github-circle"
      :href="$config.GITHUB"
    ></a>

    <!-- 中间LOGO部分 -->
    <div
      :style="{ background: `url(${imgUrl})` }"
      :class="[{ wrapper_blur: centerShow }, 'wrapper', 'bg-blur']"
    >
      <div :class="['img_shadow', { img_shadow_show: imgLoded }]"></div>
      <div class="inner" style="cursor: pointer" @click="goToBlog">
        <img
          :class="['R_logo', { R_logo_top: flag }]"
          src="../assets/logo.svg"
        />
        <div :class="['hello', { hello_bottom: flag }]">
          <div>{{ slogan[i] }}</div>
          <div class="hello_bottom_text">
            点击以访问 {{ $config.BLOG_NAME }}
          </div>
        </div>
      </div>
    </div>

    <!-- 上下滑动指示器 -->
    <div
      :class="['bottom', { bottom_show: flag }]"
      style="cursor: pointer"
      @click="centerShow = !centerShow"
    >
      <div class="bottom-icon">
        <transition name="fade">
          <i v-if="!centerShow" class="mdi-chevron-up mdi"></i>
          <i v-if="centerShow" class="mdi-chevron-down mdi"></i>
        </transition>
      </div>
      <div class="bottom-info">Slide UP</div>
    </div>

    <!-- 备案号 -->
    <a
      class="record_number"
      :class="{ record_number_show: flag }"
      href="http://beian.miit.gov.cn/"
      v-if="recordNumber"
      >{{ recordNumber }}</a
    >

    <!-- 导航抽屉 -->
    <transition name="fade">
      <div class="shadow" v-show="centerShow"></div>
    </transition>
    <transition name="slide">
      <div v-show="centerShow" class="center_wrapper" @click="hideCenter">
        <div class="center_inner" @click="stopPropagation">
          <center @hide="hideCenter" ref="center"></center>
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
  name: "home",
  data() {
    this.startTime = new Date();
    return {
      flag: false, // 动画是否播放完毕
      slogan: [],
      i: 0,
      centerShow: false, // 导航抽屉显示状态
      imgLoded: false, // 背景图片加载状态
      imgUrl: ""
    };
  },
  components: {
    center
  },
  computed: {
    recordNumber() {
      return this.$config.RECORD_NUMBER;
    }
  },
  methods: {
    goToBlog() {
      window.location.href = this.$config.BLOG_URL;
    },
    _jieliu(callback, delay) {
      let currentTime = new Date();
      if (currentTime - this.startTime > delay) {
        callback();
        this.startTime = new Date();
      }
    },
    handleMouseWheel(e) {
      if (e.deltaY < 0) {
        // 如果鼠标滚轮向上滚动
        if (!this.centerShow) {
          this.centerShow = true;
        } else {
          this._jieliu(() => {
            this.$refs.center.scroller.scrollBy(
              0,
              100,
              500,
              "cubic-bezier(0.23, 1, 0.32, 1)"
            );
          }, 500);
        }
      } else {
        // 如果鼠标滚轮向下滚动
        if (!this.centerShow) {
          return;
        } else {
          this._jieliu(() => {
            this.$refs.center.scroller.scrollBy(
              0,
              -100,
              500,
              "cubic-bezier(0.23, 1, 0.32, 1)"
            );
          }, 500);
        }
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
    // 图片懒加载
    this.imgUrl = this.$config.BACKGROUND_IMG_URL;
    var img = new Image();
    img.src = this.imgUrl;
    img.onload = () => {
      this.imgLoded = true;
    };
    this.slogan = this.$config.SLOGAN;
    this.i = randomNum(0, this.slogan.length - 1);
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .github {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-size: 2rem;
    z-index: 1;
    cursor: pointer;
  }
  .wrapper {
    background-size: cover !important;
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
        width: 18.75rem;
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
    background-color: rgba(0, 0, 0, 0.5);
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
    text-align: center;
    .bottom-info {
      font-size: 1rem;
      margin-top: 5px;
      animation: float 4s infinite ease-in-out;
    }
  }
  .bottom_show {
    bottom: 50px;
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
    z-index: 2;
    .center_inner {
      width: 70%;
      position: absolute;
      overflow: hidden;
      border-radius: 0.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 5%;
      height: 70%;
    }
  }
  .record_number {
    width: 100%;
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0;
    transform: translateY(30px);
    transition: transform ease 1s;
  }
  .record_number_show {
    transform: translateY(0px);
  }
}

@media screen and (max-width: 900px) {
  #home {
    .center_wrapper {
      .center_inner {
        width: 100%;
        bottom: 0px;
        padding: 10px;
        box-sizing: border-box;
      }
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

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
