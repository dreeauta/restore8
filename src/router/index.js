import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'Homepage | Andreea Uta Portfolio' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'About | Andreea Uta Portfolio' },
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('@/views/LearnView.vue'),
      meta: { title: 'Skills | Andreea Uta Portfolio' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/PortfolioView.vue'),
      meta: { title: 'Projects | Andreea Uta Portfolio' },
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('@/views/DesignView.vue'),
      meta: { title: 'Design | Andreea Uta Portfolio' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: { title: 'Contact | Andreea Uta Portfolio' },
    },
    {
      path: '/project/:slug',
      name: 'project-detail',
      component: () => import('@/views/ProjectDetailView.vue'),
      meta: { title: 'Project | Andreea Uta Portfolio' },
    },
  ],
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Andreea Uta Portfolio'
})

export default router
