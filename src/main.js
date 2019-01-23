// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import router from './router'

// 引入样式重置
import '../static/css/reset.css'

// 引入 ElementUI 响应式断点
import 'element-ui/lib/theme-chalk/display.css'

// 引入及使用 ElementUI
import {Row, Col} from 'element-ui'

Vue.use(Vuex).use(Row).use(Col)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
