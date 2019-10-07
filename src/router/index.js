import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import LandingPage from '@/components/landing_pages/Index.vue'

const routes = [
    { path: '/', component: LandingPage}
];

export default new VueRouter({
    routes: routes,
    mode: 'history'
});