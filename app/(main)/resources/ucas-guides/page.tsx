import Book from '@/sections/book'
import PageIntro from '@/sections/page-intro'

import Articles from '@/components/articles/articles'

export default function Page() {
  return (
    <>
      <PageIntro
        title='Resources'
        pretitle='UCAS GUIDE'
        content='Striving to create the most student-friendly, exam-focused and most effective revision platform in the world.'
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <Articles />
      <Book
        title='Start your journey now'
        content='<p>Book your Cambridge Clinical consultation today</p>'
      />
    </>
  )
}
