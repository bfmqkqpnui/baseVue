// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import 'src/base'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI,{ size: 'small' })


Vue.config.productionTip = false
Vue.use(VueResource)
// FastClick 调用提高移动端点击响应时间
FastClick.attach(document.body)

router.beforeEach(({ meta, path, fullPath, query }, from, next) => {
  if (meta.title) {
    Vue.$title = Vue.prototype.$title = meta.title
    document.title = meta.title
  }
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
