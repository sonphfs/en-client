import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from '@/components/Dashboard.vue'
import LandingPage from '@/components/landing_pages/Index.vue'

const routes = [
    { path: '/dashboard', component: Dashboard},
    { path: '/home', component: LandingPage}
];

export default new VueRouter({
    routes: routes,
    mode: 'history'
});