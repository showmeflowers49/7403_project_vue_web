import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import cookie from './assets/util/cookie.js'
import api from './assets/util/common.js'

Vue.config.productionTip = false
Vue.use(ElmentUI)
Vue.prototype.api = api
Vue.prototype.cookie = cookie

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
