/**
 * @file 将触摸相关的逻辑注册为 Vue 指令并将其封装为 Vue 插件进行使用
 */
import { Plugin } from "vue";
import VueTouch from "./lib/vue-touch.js";

const vueTouchPlugin: Plugin = {
  install: (app) => {
    app.directive("tap", {
      created: function (el, binding) {
        new VueTouch(el, binding, "tap");
      },
    });
    app.directive("swipe", {
      created: function (el, binding) {
        new VueTouch(el, binding, "swipe");
      },
    });
    app.directive("swipeleft", {
      created: function (el, binding) {
        new VueTouch(el, binding, "swipeleft");
      },
    });
    app.directive("swiperight", {
      created: function (el, binding) {
        new VueTouch(el, binding, "swiperight");
      },
    });
    app.directive("swipedown", {
      created: function (el, binding) {
        new VueTouch(el, binding, "swipedown");
      },
    });
    app.directive("swipeup", {
      created: function (el, binding) {
        new VueTouch(el, binding, "swipeup");
      },
    });
    app.directive("longtap", {
      created: function (el, binding) {
        new VueTouch(el, binding, "longtap");
      },
    });
  },
};

export default vueTouchPlugin;
