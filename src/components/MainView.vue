<template>
  <div id="main_view">
    <!-- 遮罩：防止用户在动画播放期间点击屏幕 -->
    <div
      v-if="!isTouchable"
      class="mask_ban_touch"
      style="width: 100%; height: 100%; z-index: 999; position: absolute"
    ></div>

    <!-- github 徽标 -->
    <a
      v-if="$config.GITHUB"
      class="github"
      :href="$config.GITHUB"
    >
      <Icon name="icon-github" size="2rem" />
    </a>

    <!-- 中间LOGO部分 -->
    <div
      :style="{ background: `url(${bgUrl})` }"
      :class="[{ wrapper_blur: drawerVisible }, 'wrapper', 'bg-blur']"
    >
      <div :class="['img_shadow', { img_shadow_show: bgLoaded }]"></div>
      <div class="inner" style="cursor: pointer" @click="goToBlog">
        <img
          :class="['R_logo', { R_logo_top: isTouchable }]"
          src="../assets/logo.svg"
        />
        <div :class="['hello', { hello_bottom: isTouchable }]">
          <div>{{ slogan[randomNum(0, slogan.length - 1)] }}</div>
          <div class="hello_bottom_text">
            点击以访问 {{ $config.BLOG_NAME }}
          </div>
        </div>
      </div>
    </div>

    <!-- 上下滑动指示器 暂未开放 -->
    <!-- <div
      :class="['bottom', { bottom_show: isTouchable }]"
      style="cursor: pointer"
      @click="drawerVisible = !drawerVisible"
    >
      <div class="bottom_icon">
        <transition name="fade">
          <Icon
            name="icon-arrow-up-bold"
            :class="{ reverse: drawerVisible }"
          ></Icon>
        </transition>
      </div>
      <div class="bottom_info">Slide UP</div>
    </div> -->

    <!-- 备案号 -->
    <a
      v-if="$config.RECORD_NUMBER"
      class="record_number"
      :class="{ record_number_show: isTouchable }"
      href="http://beian.miit.gov.cn/"
      >{{ $config.RECORD_NUMBER }}</a
    >

    <!-- 导航抽屉 -->
    <transition name="fade">
      <div v-show="drawerVisible" class="shadow"></div>
    </transition>
    <transition name="slide">
      <div v-show="drawerVisible" class="center_wrapper" @click="hideDrawer">
        <div class="center_inner" @click="(e) => e.stopPropagation()">
          <!-- <center ref="center" @hide="hideDrawer"></center> -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import GLOBAL_CONFIG from "@/config";
import { randomNum } from "@/utils";
import { defineComponent, onMounted, ref } from "vue";
import Icon from "./Icon.vue";

export default defineComponent({
  name: "MainView",
  components: { Icon },
  setup() {
    // 用户是否可进行点击交互
    const isTouchable = ref<boolean>(false);
    const bgUrl = ref<string>("");
    const bgLoaded = ref<boolean>(false);
    const slogan = ref<string[]>([]);
    const drawerVisible = ref<boolean>(false);

    /**
     * 加载背景图片
     */
    function loadBackground() {
      bgUrl.value = GLOBAL_CONFIG.BACKGROUND_IMG_URL;
      var img = new Image();
      img.src = bgUrl.value;
      img.onload = () => {
        bgLoaded.value = true;
      };
      slogan.value = GLOBAL_CONFIG.SLOGAN;
    }

    /**
     * 隐藏 Drawer
     */
    function hideDrawer() {
      drawerVisible.value = false;
    }

    /**
     * 前往我的博客
     */
    function goToBlog() {
      window.location.href = GLOBAL_CONFIG.BLOG_URL;
    }

    onMounted(() => {
      setTimeout(() => {
        isTouchable.value = true;
      }, 1300);
      loadBackground();
    });

    return {
      // data
      isTouchable,
      bgUrl,
      bgLoaded,
      slogan,
      drawerVisible,
      hideDrawer,
      // methods
      goToBlog,
      randomNum,
    };
  },
});
</script>

<style lang="scss" scoped>
#main_view {
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
    z-index: 1;
    cursor: pointer;
    text-decoration: none;
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
    .bottom_icon {
      .reverse {
        transform: rotate(180deg);
      }
    }
    .bottom_info {
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
  #main_view {
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
