<template>
  <div id="center" v-swipedown="hideCenter">
    <div class="top">
      <nav class="nav_wrap">
        <div
          :class="['nav_item', {active: sortData[sortIndex].sortId == item.sortId}]"
          v-for="(item, index) in sortData"
          :key="item.sortId"
          @click="changeSortIndex(index)"
        >{{item.title}}</div>
      </nav>
      <div class="close">
        <i class="mdi mdi-close-box" @click="$emit('hide')"></i>
      </div>
    </div>
    <transition-group tag="div" class="main row" name="list">
      <div class="col page_item" v-for="item in pagesData" :key="item.pageId">
        <a :href="item.url" class="page">
          <div class="left">
            <div class="title">{{item.title}}</div>
            <div class="subtitle">{{item.subtitle}}</div>
          </div>
          <div class="right">
            <img :src="item.icon == '' ? 'http://img.cdn.esunr.xyz/Aquarium.png' : item.icon">
          </div>
        </a>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortData: [],
      sortIndex: 0,
      pagesData: []
    };
  },
  methods: {
    hideCenter() {
      this.$emit("hide");
    },
    getPages() {
      let sortId = this.sortData[this.sortIndex].sortId;
      if (this.$common.SERVE) {
        this.axios
          .get("/getPages?sortId=" + sortId)
          .then(res => {
            if (res.data.code == 1) {
              this.pagesData = res.data.data;
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.pagesData = [];
        for (let i in this.$common.PAGES_DATA) {
          let item = this.$common.PAGES_DATA[i];
          if (item.sortId == sortId) {
            this.pagesData.push(item);
          }
        }
      }
    },
    getSort(callback) {
      if (this.$common.SERVE) {
        this.axios
          .get("/getSort")
          .then(res => {
            if (res.data.code == 1) {
              this.sortData = res.data.data;
              callback();
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.sortData = this.$common.SORT_DATA;
        callback();
      }
    },
    changeSortIndex(index) {
      this.sortIndex = index;
      this.getPages();
    }
  },
  mounted() {
    this.getSort(() => {
      this.getPages();
    });
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
  background-color: rgb(241, 241, 241);
  color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  position: relative;
  .top {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    padding: 0 0.5rem;
    .nav_wrap {
      display: flex;
      .nav_item {
        margin-right: 15px;
        font-size: .9rem;
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
  .main {
    /* margin-top: 1rem !important; */
    .page {
      background-color: #fff;
      padding: 1rem;
      border-radius: 0.5rem;
      display: flex;
      min-height: 4.5rem;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .left {
        width: 80%;
        margin-right: 10px;
        .title {
          font-size: 1rem;
          color: rgba(0, 0, 0, 0.8);
          font-weight: bold;
        }
        .subtitle {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.6);
        }
      }
      .right {
        width: 20%;
        img {
          width: 100%;
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