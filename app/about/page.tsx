import type { Metadata } from 'next'

import Book from '@/sections/book'
import FeaturedBlock from '@/sections/featured-block'
import IntroSection from '@/sections/intro-section'
import PageIntro from '@/sections/page-intro'
import Team from '@/sections/team'

export const metadata: Metadata = {
  title: 'About Us | Cambridge Clinical',
  description: '',
}

export default function Page() {
  return (
    <>
      <PageIntro
        title='Our mission'
        pretitle='ABOUT US'
        content='<p>Striving to create the most student-friendly, exam-focused and most effective revision platform in the world.</p>'
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <FeaturedBlock
        title='Be student-friendly and relatable'
        content="<p>We are run by students for students. We've been in your shoes before, applying for medicine or dentistry. We know how tough it is to juggle UCAT, BMAT, Interviews and Personal Statement alongside your A-levels.</p>"
        image={{ sourceUrl: '/images/content/about1.jpg' }}
        imageAlignment='left'
        topPadding='large'
        bottomPadding='none'
      />
      <FeaturedBlock
        title='Provide highest quality UCAT, BMAT and Interview materials'
        content='<p>In 2021 there are tonnes of materials that you can find on the internet for applying for medical school but how many of them are actually useful? Our aim is to provide a premium level of quality so you can apply to medical school risk-free</p>'
        image={{ sourceUrl: '/images/content/about2.jpg' }}
        imageAlignment='right'
        topPadding='large'
        bottomPadding='none'
      />
      <FeaturedBlock
        title='Make medicine accessible for all'
        content="<p>Widening Participation is a strong part of our ethos which is why we strive to provide as many free resources as possible such as our comparison tools, free question banks, Youtube videos and more. We also run widening participation courses with many universities such as Bristol and King's</p>"
        image={{ sourceUrl: '/images/content/about3.jpg' }}
        imageAlignment='left'
        topPadding='large'
        bottomPadding='none'
      />
      <IntroSection
        title='Get you into medical school'
        content="<p>Our main objective is to get you through the doors of medical school. We know it isn't easy - there will be setbacks, new hurdles and challenges but we will be at hand to help you every step of the way.</p>"
        topPadding='extra-large'
        bottomPadding='none'
      />
      <Team
        title='Meet the team'
        topPadding='extra-large'
        bottomPadding='none'
        featured={true}
        teamMembers={[
          {
            name: 'Alexandra Watson',
            position: 'Director of Operations',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
          {
            name: 'Andrea Smith',
            position: 'Director of Marketing',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
          {
            name: 'Stephanie Jones',
            position: 'Director of Content',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
          {
            name: 'Valarie Smith',
            position: 'Director of Finance',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
        ]}
      />
      <Team
        title='FEATURED TUTORS'
        content="<p>We believe that a personal approach is best when it comes to teaching and learning. So when you sign-up for our 1-to-1 tutoring, we'll create your study plan and you'll receive ongoing support tailored to your needs. In addition, you'll have.</p>"
        topPadding='medium'
        bottomPadding='extra-large'
        teamMembers={[
          {
            name: 'Alexandra Watson',
            position: 'Director of Operations',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
          {
            name: 'Andrea Smith',
            position: 'Director of Marketing',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
          {
            name: 'Stephanie Jones',
            position: 'Director of Content',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
          {
            name: 'Valarie Smith',
            position: 'Director of Finance',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
          {
            name: 'Eleonora Jones',
            position: 'Director of Operations',
            image: {
              sourceUrl: '/images/content/team.jpg',
            },
            linkedin: 'https://www.linkedin.com/',
          },
        ]}
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
