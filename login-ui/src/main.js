// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Hello from './components/Hello.vue'
import Head from './components/Head.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Hello)
Vue.use(Head)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
