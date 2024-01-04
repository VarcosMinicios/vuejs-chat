import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(async (to) => {
  if (to.meta.middlewares) {
    for (const middleware of Object.values(to.meta.middlewares)) {
      const { authorized, redirect } = await middleware()

      if (!authorized) return redirect
    }
  }
})

export default router
