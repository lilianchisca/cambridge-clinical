import type { Metadata } from 'next'

import Book from '@/sections/book'
import ContactCallout from '@/sections/callout-contact'
import Faqs from '@/sections/faqs'
import PageIntro from '@/sections/page-intro'

export const metadata: Metadata = {
  title: 'FAQs | Cambridge Clinical',
  description: '',
}

export default function Page() {
  return (
    <>
      <PageIntro
        title='FAQs'
        pretitle='Still got questions?'
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <Faqs />
      <ContactCallout
        pretitle='Didn’t find the answer you’re looking for?'
        title='Feel free to contact us directly'
        topPadding='extra-large'
        bottomPadding='extra-large'
      />
      <Book
        title='Start your journey now'
        content='<p>Book your Cambridge Clinical consultation today</p>'
      />
    </>
  )
}

export const revalidate = 60
export const dynamic = 'force-static'
