import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    IMAGE_DOMAINS: z
      .string()
      .min(1)
      .transform((s) => s.split(', ')),
    ANALYZE: z
      .string()
      .refine((s) => s === 'true' || s === 'false')
      .transform((s) => s === 'true')
      .optional(),
  },
  client: {
    NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT: z.string().url().endsWith('/graphql'),
    NEXT_PUBLIC_WORDPRESS_BACKEND: z.string().url(),
    NEXT_PUBLIC_FRONTEND_URL: z.string().url(),
    NEXT_PUBLIC_REVALIDATION_TOKEN: z.string().min(1),
    NEXT_PUBLIC_GOOGLE_API_KEY: z.string().min(1),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NODE_ENV: process.env.NODE_ENV,
    IMAGE_DOMAINS: process.env.IMAGE_DOMAINS,
    NEXT_PUBLIC_WORDPRESS_BACKEND: process.env.NEXT_PUBLIC_WORDPRESS_BACKEND,
    NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT: `${process.env.NEXT_PUBLIC_WORDPRESS_BACKEND}/graphql`,
    NEXT_PUBLIC_FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL,
    NEXT_PUBLIC_REVALIDATION_TOKEN: process.env.NEXT_PUBLIC_REVALIDATION_TOKEN,
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
  isServer: typeof window === 'undefined',
})
