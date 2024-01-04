import type { RouteRecordRaw } from 'vue-router'
import { AuthMiddleware } from '@/middlewares/auth.middleware'
import { GuestMiddleware } from '@/middlewares/guest.middleware'

export const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('@/layouts/UnauthenticatedLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/LoginPage.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/auth/RegisterPage.vue')
      }
    ],
    meta: {
      middlewares: {
        GuestMiddleware
      }
    }
  },
  {
    path: '/',
    component: () => import('@/layouts/AuthenticatedLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeComponent.vue')
      }

    ],
    meta: {
      middlewares: {
        AuthMiddleware
      }
    }
  }
]
