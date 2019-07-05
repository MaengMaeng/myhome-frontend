import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Introduce from './views/Introduce.vue'
import Products from './views/Products.vue'
import Gallery from './views/Gallery.vue'
import CalendarPage from './views/CalendarPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
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
  ]
})
