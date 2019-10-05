import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
 