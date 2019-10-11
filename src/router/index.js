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
    },
    {
        path: '/intro-exam',
        component: () => import("@/components/pages/IntroExamination"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/start-exam',
        component: () => import("@/components/pages/StartExamination"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/exam',
        component: () => import("@/components/pages/Examination"),
        meta : {
            layout: MainLayout
        },
        children: [
            {
                path: 'part?id=1',
                component: () => import("@/components/examinations/Part1Component"),
                meta : {
                    layout: MainLayout
                },
            },
            {
                path: 'part/2',
                component: () => import("@/components/examinations/Part2Component"),
                meta : {
                    layout: MainLayout
                },
            },
            {
                path: 'part/3',
                component: () => import("@/components/examinations/Part3Component"),
                meta : {
                    layout: MainLayout
                },
            },
            {
                path: 'part/4',
                component: () => import("@/components/examinations/Part4Component"),
                meta : {
                    layout: MainLayout
                },
            },
            {
                path: 'part/5',
                component: () => import("@/components/examinations/Part5Component"),
                meta : {
                    layout: MainLayout
                },
            },
            {
                path: 'part/6',
                component: () => import("@/components/examinations/Part6Component"),
                meta : {
                    layout: MainLayout
                },
            },
            {
                path: 'part/7',
                component: () => import("@/components/examinations/Part7Component"),
                meta : {
                    layout: MainLayout
                },
            },
        ]
    },

];

export default new VueRouter({
    routes: routes,
    mode: 'history'
});