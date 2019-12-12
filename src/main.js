import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SortedTablePlugin from "vue-sorted-table";
import Paginate from 'vuejs-paginate'
import CircularCountDownTimer from "vue-circular-count-down-timer";

Vue.use(CircularCountDownTimer);
Vue.use(SortedTablePlugin);
Vue.component('paginate', Paginate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
