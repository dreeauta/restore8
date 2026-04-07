import { createRouter, createWebHistory } from 'vue-router'
// Home is eagerly imported so the first paint works when the app is hosted under a
// subpath (e.g. /european-remodeling/ in the portfolio iframe). Lazy chunks can
// otherwise resolve to /assets/*.js instead of /european-remodeling/assets/*.js.
import HomeView from '@er/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, left: 0 }
  },
  routes: [
    // When the iframe (or a direct link) loads …/european-remodeling/index.html,
    // the path after the base is /index.html, not /. Without this redirect the
    // home route never matches — only the shell (e.g. NavBar) renders.
    {
      path: '/index.html',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Restore8 GA - Exterior Home Repair & Basement Finishing' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@er/views/AboutView.vue'),
      meta: { title: 'Restore8 GA - About Us' },
    },
    {
      path: '/homeowners',
      redirect: '/exterior',
    },
    {
      path: '/exterior',
      name: 'exterior',
      component: () => import('@er/views/HomeownersView.vue'),
      meta: { title: 'Restore8 GA - Exterior Repairs' },
    },
    {
      path: '/investors',
      redirect: '/basement',
    },
    {
      path: '/basement',
      name: 'basement',
      component: () => import('@er/views/InvestorsView.vue'),
      meta: { title: 'Restore8 GA - Basement Finishing' },
    },
    {
      path: '/requestaquote',
      name: 'design',
      component: () => import('@er/views/RequestaQuoteView.vue'),
      meta: { title: 'Restore8 GA - Request a Quote' },
    },
  ],
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Restore8 GA'
})

export default router
