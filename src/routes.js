import Home from '@/views/Home.vue'
import Games from '@/views/Games.vue'
import Programs from '@/views/Programs.vue'
import PageDetail from '@/views/PageDetail.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import NotFound from '@/views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/games',
    component: Games,
  },
  {
    path: '/programs',
    component: Programs,
  },
  {
    path: '/:category/:title',
    component: PageDetail,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/:path(.*)',
    component: NotFound,
  },
]
