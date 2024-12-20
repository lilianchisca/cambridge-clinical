import Book from '@/sections/book'
import PageIntro from '@/sections/page-intro'

import { getPosts } from '@/lib/posts'

import Articles from '@/components/articles/articles'

export default async function Page() {
  const posts = await getPosts()

  return (
    <>
      <PageIntro
        title="Resources"
        pretitle="All"
        content="Striving to create the most student-friendly, exam-focused and most effective revision platform in the world."
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <Articles posts={posts} />
      <Book
        title="Start your journey now"
        content="<p>Book your Cambridge Clinical consultation today</p>"
      />
    </>
  )
}
