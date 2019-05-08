import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'
import center from './components/center.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import common from './common.vue'

Vue.prototype.$common = common;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = common.host;

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/center',
      component: center
    }
  ]
})
