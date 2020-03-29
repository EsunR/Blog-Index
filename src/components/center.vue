<template>
  <div id="center">
    <div class="top">
      <nav class="nav_wrap">
        <div
          :class="[
            'nav_item',
            { active: sortData[sortIndex].sortId == item.sortId }
          ]"
          v-for="(item, index) in sortData"
          :key="item.sortId"
          @click="changeSortIndex(index)"
        >
          {{ item.title }}
        </div>
      </nav>
      <div class="close">
        <i class="mdi mdi-close-box" @click="handleClose"></i>
      </div>
    </div>
    <div class="scroll-wrapper main">
      <transition-group tag="div" class="row scroll-content" name="list">
        <div class="col page_item" v-for="item in pagesData" :key="item.pageId">
          <a :href="item.url" class="page" :title="item.title">
            <div class="left">
              <div class="title">{{ item.title }}</div>
              <div class="subtitle">{{ item.subtitle }}</div>
            </div>
            <div class="right">
              <img
                :src="
                  item.icon == ''
                    ? 'http://img.cdn.esunr.xyz/Aquarium.png'
                    : item.icon
                "
              />
            </div>
          </a>
        </div>
      </transition-group>
    </div>
    <div class="footer" v-if="$config.FOOTER_INFO">
      <i class="mdi mdi-fountain-pen-tip"></i> Designed By
      <a href="https://github.com/EsunR/Blog-Index">EsunR</a>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      sortData: [],
      sortIndex: 0,
      pagesData: [],
      scroller: null
    };
  },
  computed: {
    parentCenterShow() {
      // 与父元素耦合
      return this.$parent.centerShow;
    }
  },
  watch: {
    parentCenterShow(val) {
      if (val) {
        this.scrollerResize();
      }
    }
  },
  methods: {
    getPages() {
      return new Promise((resolve, reject) => {
        let sortId = this.sortData[this.sortIndex].sortId;
        if (this.$config.SERVE) {
          this.axios
            .get("/getPages?sortId=" + sortId)
            .then(res => {
              this.pagesData = res.data.data;
              resolve();
            })
            .catch(err => {
              console.log(err);
              reject(err);
            });
        } else {
          this.pagesData = [];
          for (let i in this.$config.PAGES_DATA) {
            let item = this.$config.PAGES_DATA[i];
            if (item.sortId == sortId) {
              this.pagesData.push(item);
            }
          }
          resolve();
        }
      });
    },
    getSort() {
      return new Promise((resolve, reject) => {
        if (this.$config.SERVE) {
          this.axios
            .get("/getSort")
            .then(res => {
              if (res.data.code == 1) {
                this.sortData = res.data.data;
                resolve();
              } else {
                reject();
              }
            })
            .catch(err => {
              console.log(err);
              reject(err);
            });
        } else {
          this.sortData = this.$config.SORT_DATA;
          resolve();
        }
      });
    },
    changeSortIndex(index) {
      this.sortIndex = index;
      this.getPages();
    },
    handleClose() {
      this.$emit("hide");
    },
    _getStyleNumber(el, property) {
      return parseInt(window.getComputedStyle(el).getPropertyValue(property));
    },
    scrollerResize() {
      if (!this.parentCenterShow) {
        return;
      }
      let drawer = document.querySelector("#center");
      let drawerHeight =
        this._getStyleNumber(drawer, "height") -
        this._getStyleNumber(drawer, "padding-top") -
        this._getStyleNumber(drawer, "padding-bottom");

      let top = document.querySelector("#center .top");
      let topHeight = this._getStyleNumber(top, "height");

      let footer = document.querySelector("#center .footer");
      let footerHeight = this._getStyleNumber(footer, "height");

      let scrollerWrapper = document.querySelector(".scroll-wrapper");
      scrollerWrapper.style.height = `${drawerHeight -
        footerHeight -
        topHeight}px`;

      if (this.scroller) {
        this.scroller.refresh();
      } else {
        let wrapper = document.querySelector(".scroll-wrapper");
        this.scroller = new BScroll(wrapper, {
          click: true
        });
      }
    }
  },
  mounted() {
    this.getSort()
      .then(() => {
        return this.getPages();
      })
      .then(() => {
        // 数据已获取完成 Better Scroll 进行初始化
        this.scrollerResize();
      });
    window.addEventListener("resize", this.scrollerResize);
  }
};
</script>

<style lang="scss" scoped>
#center {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  padding: 1rem;
  background-color: rgb(241, 241, 241);
  color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding: 0 0.5rem;
    .nav_wrap {
      display: flex;
      .nav_item {
        margin-right: 15px;
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        transition: all 0.3s;
        border-bottom: 2px solid rgba(0, 0, 0, 0);
        padding-bottom: 10px;
        margin-bottom: 10px;
      }
      .active {
        border-bottom: 2px solid rgba(0, 0, 0, 1);
        color: rgba(0, 0, 0, 1);
      }
    }
    .close {
      font-size: 1.2rem;
      position: relative;
      top: -5px;
      cursor: pointer;
    }
  }
  .scroll-wrapper.main {
    height: 300px;
    overflow: hidden;
    margin: 0 -0.5rem;
    .scroll-content {
      margin: 0;
      .page_item {
        height: 120px;
        .page {
          background-color: #fff;
          padding: 1rem;
          box-sizing: border-box;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;
          text-decoration: none;
          &:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .left {
            width: 80%;
            margin-right: 10px;
            overflow: hidden;
            .title {
              font-size: 1rem;
              color: rgba(0, 0, 0, 0.8);
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .subtitle {
              margin-top: 0.5rem;
              font-size: 0.8rem;
              line-height: 1.5;
              color: rgba(0, 0, 0, 0.6);
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .right {
            width: 20%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .row {
    margin: 0 -0.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  .col {
    padding: 0.5rem;
    box-sizing: border-box;
    width: 25%;
    transition: all 1s;
  }
  .footer {
    font-size: 12px;
    text-align: right;
    color: #303030;
    margin-top: 10px;
    .mdi {
      font-size: 18px;
      position: relative;
      top: 3px;
      font-weight: bold;
    }
    a {
      // color: #2196F3;
      color: #303030;
      text-decoration: none;
      font-weight: bold;
    }
  }
}

@media screen and (max-width: 900px) {
  #center {
    .main {
      .page {
        align-items: inherit;
        padding: 0.8rem;
        .left {
          width: 70%;
        }
      }
    }
    .col {
      width: 50%;
    }
  }
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
