import Vue from 'vue';
import VueRouter from 'vue-router'
import { isAuthorized } from '@/permission'
Vue.use(VueRouter)

const ifAuthenticated = async (to, from, next) => {
    let check = await isAuthorized()
    if (check) {
      next()
      return
    }
    next('/login')
}

// import layouts
import MainLayout from "@/components/main_layouts/MainLayout";
import BlankLayout from "@/components/main_layouts/BlankLayout";

// import pages
import LandingPage from '@/components/landing_pages/Index.vue'
import Dashboard from '@/components/pages/Dashboard.vue'
import Contact from '@/components/pages/Contact.vue'
import Login from "@/components/pages/Login";


const routes = [
    {
        path: '/',
        component: LandingPage,
        meta: {
            layout: BlankLayout
        },
        redirect: "/dashboard"
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta : {
            layout: MainLayout
        },
        beforeEnter: ifAuthenticated,

    },
    {
        path: '/login',
        meta : {
            layout: Login
        }
    },
    {
        path: '/register',
        component: () => import("@/components/pages/Register"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/examination/result/:id/:code',
        component: () => import("@/components/pages/ExaminationResult"),
        meta : {
            layout: MainLayout
        },
        beforeEnter: ifAuthenticated
    },
    {
        path: '/list-exam',
        component: () => import("@/components/pages/ListExamination"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/toeic-histories',
        component: () => import("@/components/pages/ToeicHistories"),
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
        path: '/start-exam/:code',
        component: () => import("@/components/pages/StartExamination"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/contact',
        component: Contact,
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/exam/:code',
        component: () => import("@/components/pages/Examination"),
        meta : {
            layout: MainLayout
        },
        beforeEnter: ifAuthenticated
    },
    {
        path: '/chart',
        component: () => import("@/components/charts/ScoreChart"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/error-404',
        component: () => import("@/components/error_pages/Error404"),
        meta : {
            layout: BlankLayout
        }
    },
    { path: '*', redirect: '/error-404' },  
    {
        path: '/error-500',
        component: () => import("@/components/error_pages/Error500"),
        meta : {
            layout: BlankLayout
        }
    },
    {
        path: '/my-profile',
        component: () => import("@/components/pages/Profile"),
        meta : {
            layout: MainLayout
        },
        beforeEnter: ifAuthenticated
    },
    {
        
        path: '/list-lesson',
        component: () => import("@/components/pages/ListLesson"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/list-subject',
        component: () => import("@/components/pages/ListSubject"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/subject/:id',
        component: () => import("@/components/pages/ListWord"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/test/:type/:id',
        component: () => import("@/components/pages/Test"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/test/result/:examLogId/:code',
        component: () => import("@/components/pages/TestResult"),
        meta : {
            layout: MainLayout
        }
    },
    {
        path: '/start-test/:type/:id',
        component: () => import("@/components/pages/RegularTest"),
        meta : {
            layout: MainLayout
        }
    }
];

export default new VueRouter({
    routes: routes,
    mode: 'history'
});