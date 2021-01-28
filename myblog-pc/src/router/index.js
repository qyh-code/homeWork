import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
import BlogDetail from '../views/blogDetail.vue'
import AddBlog from '../views/addBlog.vue'
import Regist from '../views/Regist.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/blog/detail/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    }, {
        path: '/blog/addBlog',
        name: 'AddBlog',
        component: AddBlog
    },
    {
        path: '/regist',
        name: 'Regist',
        component: Regist
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router