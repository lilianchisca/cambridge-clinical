import { env } from '@/env.mjs'

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_FRONTEND_URL}${path}`
}
