import type { JSONResponseWithData } from '@/types/common'
import type { GetAllPagesQuery, GetPageByUriQuery } from '@/types/wordpress'

import { env } from '@/env.mjs'

export async function getAllPages() {
  const res = await fetch(`${env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}?queryId=getAllPages`, {
    next: { tags: ['pages'] },
  })
  const { data } = (await res.json()) as JSONResponseWithData<GetAllPagesQuery>

  const pages = data?.pages?.nodes ?? []

  return pages
}

export async function getPageByUri(uri: string | string[]) {
  const _uri = Array.isArray(uri) ? uri.join('/') : uri
  const tag = uri === '/' ? 'page-homepage' : `page-${_uri}`

  const res = await fetch(
    `${env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}?queryId=getPageByUri&variables={"uri":"${_uri}"}`,
    {
      next: { tags: [tag] },
    }
  )
  const { data } = (await res.json()) as JSONResponseWithData<GetPageByUriQuery>

  const page = data?.page

  return page
}
