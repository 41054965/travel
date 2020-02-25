// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 加载动画插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 300ms点击延迟问题
import fastClick from 'fastclick'
// 重置样式
import 'styles/reset.css'
// 1毫米边框
import 'styles/border.css'
import 'styles/iconfont.css'
// 加载动画样式
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
