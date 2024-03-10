import type { IMiddlewareReturn } from '@/interfaces/IMiddlewareReturn'
import { useAuthStore } from '@/stores/auth'


export const AuthMiddleware = async (): Promise<IMiddlewareReturn> => {
  const auth = useAuthStore()

  if (await auth.checkAuth()) {
    return { authorized: true }
  }

  if (await auth.refreshToken()) {
    return { authorized: true }
  }

  return { authorized: false, redirect: '/auth/login' }
}
