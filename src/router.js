import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Introduce from './views/Introduce/Introduce.vue'
import Products from './views/Products/Products.vue'
import Gallery from './views/Gallery.vue'
import CalendarPage from './views/Calendar/CalendarPage.vue'
import BoardListPage from './views/Board/BoardListPage.vue'
import BoardWritePage from './views/Board/BoardWritePage.vue'
import BoardDetailPage from './views/Board/BoardDetailPage.vue'
import ShootingGame from './views/ShootingGame.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/introduce',
            name: 'introduce',
            component: Introduce
        },
        {
            path: '/products',
            name: 'Products',
            component: Products
        },
        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery
        },
        {
            path: '/calendar',
            name: 'CalendarPage',
            component: CalendarPage
        },
        {
            path: '/boardlist',
            name: 'BoardListPage',
            component: BoardListPage
        },
        {
            path: '/boarddetail/:id',
            name: 'BoardDetailPage',
            component: BoardDetailPage,
            props: true
        },
        {
            path: '/boardwrite',
            name: 'BoardWritePage',
            component: BoardWritePage
        },
        {
            path: '/product1',
            name: 'ShootingGame',
            component: ShootingGame
        }
    ]
})