import type { JSONResponseWithData } from '@/types/common'
import type { GetTestByUriQuery } from '@/types/wordpress'

import { env } from '@/env.mjs'

export async function getTestByUri(uri: string | string[]) {
  const _uri = Array.isArray(uri) ? uri.join('/') : uri

  const res = await fetch(
    `${env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}?queryId=getTestByUri&variables={"uri":"${_uri}"}`,
    {
      next: { tags: ['tests'] },
    }
  )
  const { data } = (await res.json()) as JSONResponseWithData<GetTestByUriQuery>

  const page = data?.test

  return page
}
