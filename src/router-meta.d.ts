import 'vue-router'
import type { IMiddlewareReturn } from '@/interfaces/IMiddlewareReturn'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    middlewares?: {
      [key: string]: (() => IMiddlewareReturn | Promise<IMiddlewareReturn>);
    }
  }
}
