import type { IMiddlewareReturn } from '@/interfaces/IMiddlewareReturn'
import { useAuthStore } from '@/stores/auth'

export const AuthMiddleware = (): IMiddlewareReturn => {
  const { isLoggedIn } = useAuthStore()

  if (!isLoggedIn) {
    return { authorized: false, redirect: '/auth/login' }
  }

  return { authorized: true }
}
