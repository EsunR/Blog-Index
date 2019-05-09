import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../node_modules/@mdi/font/css/materialdesignicons.min.css"
import "./assets/mobile-event"
import axios from 'axios'
import VueAxios from 'vue-axios'
import common from './common.vue'

Vue.prototype.$common = common;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = common.HOST;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
