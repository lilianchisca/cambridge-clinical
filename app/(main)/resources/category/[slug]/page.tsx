import { redirect } from 'next/navigation'

import Book from '@/sections/book'
import PageIntro from '@/sections/page-intro'

import { getCategoryBySlug, getPosts } from '@/lib/posts'

import Articles from '@/components/articles/articles'

type PostPage = {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage(props: PostPage) {
  const params = await props.params
  const category = await getCategoryBySlug(params.slug)
  const posts = await getPosts()

  if (!category) {
    redirect('/')
  }

  return (
    <>
      <PageIntro
        title="Resources"
        pretitle={category.name}
        content="Striving to create the most student-friendly, exam-focused and most effective revision platform in the world."
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <Articles posts={posts} selectedCategory={category.name} />
      <Book
        title="Start your journey now"
        content="<p>Book your Cambridge Clinical consultation today</p>"
      />
    </>
  )
}

export const dynamicParams = true
export const maxDuration = 45
