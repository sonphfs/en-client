import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import layouts
import MainLayout from "@/components/main_layouts/MainLayout";
import BlankLayout from "@/components/main_layouts/BlankLayout";

// import pages
import LandingPage from '@/components/landing_pages/Index.vue'
import Dashboard from '@/components/pages/DemoComponent.vue'
import Login from "@/components/pages/Login";

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
    },
    {
        path: '/login',
        meta : {
            layout: Login
        }
    },
    {
        path: '/result',
        component: () => import("@/components/pages/ExaminationResult"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/list-exam',
        component: () => import("@/components/pages/ListExamination"),
        meta : {
            layout: MainLayout
        }
    }
];

export default new VueRouter({
    routes: routes,
    mode: 'history'
});