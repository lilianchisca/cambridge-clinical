import { env } from '@/env.mjs'

import type { JSONResponseWithData } from '@/types/common'
import type { ThemeOptionsQueryQuery } from '@/types/wordpress'

export async function getThemeOptions() {
  const res = await fetch(`${env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}?queryId=getThemeOptions`, {
    next: { tags: ['theme-options'] },
  })
  const { data } = (await res.json()) as JSONResponseWithData<ThemeOptionsQueryQuery>

  const settings = data?.themeSettingsOptions?.themeSettings

  return settings
}

export type ThemeOptionsProps = Exclude<
  Awaited<ReturnType<typeof getThemeOptions>>,
  null | undefined
>
