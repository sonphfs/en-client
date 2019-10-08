import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import LandingPage from '@/components/landing_pages/Index.vue'
import Dashboard from '@/components/pages/DemoComponent.vue'
import MainLayout from "@/components/main_layouts/MainLayout";
import BlankLayout from "@/components/main_layouts/BlankLayout";

const routes = [
    {
        path: '/',
        component: LandingPage,
        meta: {
            layout: BlankLayout
        }
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta : {
            layout: MainLayout
        }
    }
];

export default new VueRouter({
    routes: routes,
    mode: 'history'
});