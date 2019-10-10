import Vue from 'vue'
import App from './App.vue'
import router from './router'
import request from '@/utils/request'

Vue.config.productionTip = false

const token = localStorage.getItem('token')
if(token) {
  request.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
 