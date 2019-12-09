/*
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-25 17:51:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-04 10:57:39
 * @version: v1.0.0
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'



import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource'

import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.css' 

Vue.use(MintUI)

Vue.use( VueResource )

Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
