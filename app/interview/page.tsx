import type { Metadata } from 'next'

import Book from '@/sections/book'
import Callout from '@/sections/callout'
import FeaturedBlock from '@/sections/featured-block'
import Interviews from '@/sections/interviews'
import IntroBlock from '@/sections/intro-block'
import PageIntro from '@/sections/page-intro'

export const metadata: Metadata = {
  title: 'Interview | Cambridge Clinical',
  description: '',
}

export default function Page() {
  return (
    <>
      <PageIntro
        title='Interview'
        pretitle='Overview'
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <IntroBlock
        title='Lorem ipsum dolor sit amet consectetur'
        content='<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
        topPadding='large'
        bottomPadding='none'
      />
      <FeaturedBlock
        title='Start with a hand-picked UCAT tutor'
        content='<p>After your consultation, we consider everything you’re looking for - from location to prospective universities, and find the right UCAT tutor. All of them have:</p>'
        image={{ sourceUrl: '/images/content/interview1.jpg' }}
        imageAlignment='left'
        topPadding='large'
        bottomPadding='none'
      />
      <FeaturedBlock
        title='Build a personalised UCAT lesson plan'
        content='<p>Your UCAT tutor will develop a personalised UCAT preparation lesson plan for you based on the time until your test, the UCAT scores you are getting and your weak areas.</p>'
        image={{ sourceUrl: '/images/content/interview2.jpg' }}
        imageAlignment='right'
        topPadding='large'
        bottomPadding='none'
      />
      <IntroBlock
        title='Lorem ipsum dolor sit amet consectetur'
        content='<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>'
        topPadding='large'
        bottomPadding='none'
      />
      <Interviews topPadding='large' bottomPadding='none' />
      <Callout
        pretitle='Still got questions?'
        title='Don’t worry, we’ve got you covered.'
        button={{
          title: 'Read our FAQs',
          url: '/faqs',
        }}
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
