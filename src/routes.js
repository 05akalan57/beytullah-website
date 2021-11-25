import Home from './views/Home.vue'
import Games from './views/Games.vue'
import GameDetail from './views/GameDetail.vue'

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
    path: '/games/:title',
    component: GameDetail,
  },
  {
    path: '/:path(.*)',
    component: Home,
  },
]
