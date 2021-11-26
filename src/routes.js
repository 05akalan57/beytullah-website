import Home from './views/Home.vue'
import Games from './views/Games.vue'
import Programs from './views/Programs.vue'
import PageDetail from './views/PageDetail.vue'

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
    path: '/:path(.*)',
    component: Home,
  },
]
