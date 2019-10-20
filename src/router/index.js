import Vue from 'vue';
import VueRouter from 'vue-router'
import { isAuthorized } from '@/permission'
Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
    if (isAuthorized) {
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
import Dashboard from '@/components/pages/DemoComponent.vue'
import Login from "@/components/pages/Login";


const routes = [
    {
        path: '/',
        component: LandingPage,
        redirect: 'exam/iSCTwikn',
        meta: {
            layout: BlankLayout
        },
        beforeEnter: ifAuthenticated
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
        path: '/examination/result/:id',
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
        path: '/exam/:code',
        component: () => import("@/components/pages/Examination"),
        meta : {
            layout: MainLayout
        }
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
        }
    },
    {
        path: '/list',
        component: () => import("@/components/pages/ListContent"),
        meta : {
            layout: MainLayout
        }
    },
    {
        
        path: '/lesson-complete',
        component: () => import("@/components/pages/LessonComplete"),
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
        path: '/test',
        component: () => import("@/components/pages/Test"),
        meta : {
            layout: MainLayout
        }
    }
];

export default new VueRouter({
    routes: routes,
    mode: 'history'
});