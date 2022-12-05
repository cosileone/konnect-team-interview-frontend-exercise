import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PageHome.vue'),
    },
    {
      path: '/services/:id',
      name: 'service-detail',
      component: () => import('../views/PageServiceDetail.vue'),
      props: true,
      children: [],
    },
  ],
})

export default router
