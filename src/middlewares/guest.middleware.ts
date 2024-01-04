import type { IMiddlewareReturn } from '@/interfaces/IMiddlewareReturn'
import { useAuthStore } from '@/stores/auth'

export const GuestMiddleware = (): IMiddlewareReturn => {
  const { isLoggedIn } = useAuthStore()

  if (isLoggedIn) {
    return { authorized: false, redirect: '/' }
  }

  return { authorized: true }
}
