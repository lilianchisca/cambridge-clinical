import { redirect } from 'next/navigation'

import PageIntro from '@/sections/page-intro'

import { getPostBySlug } from '@/lib/posts'

import Article from '@/components/articles/article'
import Categories from '@/components/articles/categories'

type PostPage = {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage(props: PostPage) {
  const params = await props.params
  const post = await getPostBySlug(params.slug)

  if (!post) {
    redirect('/')
  }

  const formattedPostDate = new Date(post?.date ?? '').toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const firstCategoryName = post?.categories?.nodes?.[0]?.name

  return (
    <>
      <PageIntro
        title={post?.title ?? ''}
        pretitle={formattedPostDate.toUpperCase()}
        image={{
          sourceUrl: post?.featuredImage?.node?.sourceUrl ?? '/images/content/about-header.jpg',
        }}
        imageOverlay={!!post?.featuredImage?.node?.sourceUrl}
      />
      <Categories activeName={firstCategoryName} />
      <Article content={post?.content ?? ''} />
    </>
  )
}

export const dynamicParams = true
export const maxDuration = 45
