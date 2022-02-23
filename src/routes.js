import Games from '@/views/Games.vue'
import PageDetail from '@/views/PageDetail.vue'

export const routes = [
  {
    path: '/',
    component: Games,
  },
  {
    path: '/:title',
    component: PageDetail,
  },
]
