import { env } from '@/env.mjs'

import type { JSONResponseWithData } from '@/types/common'
import type { PostBySlugQueryQuery, PostsPaginatedQueryQuery } from '@/types/wordpress'

export type Posts = Exclude<
  Exclude<PostsPaginatedQueryQuery['posts'], null | undefined>['nodes'],
  null | undefined
>

export type PostCard = Posts[number]

export type Post = PostBySlugQueryQuery['post']

const POSTS_PER_PAGE = 12

async function getPostsPaginated(after?: null | string): Promise<PostCard[]> {
  const res = await fetch(
    `${env.NEXT_PUBLIC_WORDPRESS_BACKEND}/graphql?queryId=PostsPaginatedQuery${
      after ? `&variables={"after":"${after}"}` : ''
    }`,
    {
      next: { tags: ['posts'] },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch getPostsPaginated')
  }

  const { data } = (await res.json()) as JSONResponseWithData<PostsPaginatedQueryQuery>

  const posts = data.posts?.nodes ?? []
  const hasNext = data.posts?.pageInfo.hasNextPage ?? false
  const endCursor = data.posts?.pageInfo.endCursor ?? null

  if (hasNext) {
    const nextPosts = await getPostsPaginated(endCursor)
    return [...posts, ...nextPosts]
  }

  return posts
}

export async function getPosts() {
  const posts = await getPostsPaginated()

  return posts
}

export async function getPaginatedPosts(currentPage = '1', categorySlug?: null | string) {
  let posts = await getPosts()

  if (categorySlug) {
    posts = posts.filter(
      (post) => post.categories?.nodes.some((category) => category.slug === categorySlug)
    )
  }

  const pagesCount = Math.ceil(posts.length / POSTS_PER_PAGE)

  let page = Number(currentPage)

  if (typeof page === 'undefined' || Number.isNaN(page)) {
    page = 1
  } else if (page > pagesCount) {
    return {
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
      posts: [],
    }
  }

  const offset = POSTS_PER_PAGE * (page - 1)

  return {
    pagination: {
      currentPage: page,
      pagesCount,
    },
    posts: posts.slice(offset, offset + POSTS_PER_PAGE),
  }
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${env.NEXT_PUBLIC_WORDPRESS_BACKEND}/graphql?queryId=PostBySlugQuery&variables={"slug":"${slug}"}`,
    {
      next: {
        tags: [`post-${slug}`],
      },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch getPostBySlug')
  }

  const { data } = (await res.json()) as JSONResponseWithData<PostBySlugQueryQuery>

  const post = data.post

  return post
}

export type PostSingle = Awaited<ReturnType<typeof getPostBySlug>>

export async function getAllCategories() {
  const posts = await getPosts()

  const postsCats = posts
    .map((post) => post.categories?.nodes?.map((category) => category?.name))
    .flat()
    .filter(Boolean)
    .map((cat) => cat ?? '')

  const categories = Array.from(new Set(postsCats)).map((cat) => ({
    name: cat,
    slug: cat.toLowerCase().replace(' ', '-'),
  }))

  return categories
}

export async function getCategoryBySlug(slug: string) {
  const categories = await getAllCategories()
  const category = categories.find((category) => category.slug === slug)

  if (!category) {
    return null
  }

  const posts = await getPosts()
  const categoryPosts = posts.filter(
    (post) => post.categories?.nodes.some((cat) => cat?.name === category.name)
  )

  return {
    ...category,
    posts: categoryPosts,
  }
}
