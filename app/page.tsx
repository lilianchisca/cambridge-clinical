import type { Metadata } from 'next'

import Book from '@/sections/book'
import CalloutBig from '@/sections/callout-big'
import Hero from '@/sections/hero'
import Services from '@/sections/services'

export const metadata: Metadata = {
  title: 'Home | Cambridge Clinical',
  description:
    'An award-winning company of doctors and students who help with university applications.',
}

export default function HomePage() {
  return (
    <>
      <Hero
        title='Secure your place at medical school'
        content='<p>with personalised support from our expert tutors!</p>'
        button={{ title: 'Get Started', url: '/get-started' }}
        features={[
          'Award winning <br/>program',
          'Online teacher <br/>support',
          'Mentor <br/>portal',
        ]}
        image={{ url: '/images/content/hero.jpg' }}
      />
      <CalloutBig
        topTitle='Who are Cambridge Clinical?'
        topContent='<p>We’re an award-winning company of doctors and students who help with university applications. We’ve helped over 10,000 students with their GCSEs, A-levels, UCAT, BMAT, Interview, Personal Statements and more!</p>'
        topButton={{
          title: 'How we can help',
          url: '/how-we-can-help',
        }}
        bottomTitle='Why we created <span>Cambridge Clinical</span>?'
        bottomContent='<p>Getting into medical or dental school is tough; We know, we’ve done it ourselves. This is especially true if you are the first person applying from your family or school.</p><p>That’s why we set up Cambridge Clinical to help navigate every hurdle - UCAT, BMAT and Interviews.</p>'
        bottomButton={{
          title: 'Get Started',
          url: '/get-started',
        }}
        features={[
          {
            title: '20,000',
            subtitle: 'hours taught',
            icon: {
              sourceUrl: '/images/content/icon1.png',
            },
          },
          {
            title: '93%',
            subtitle: 'university success rate',
            icon: {
              sourceUrl: '/images/content/icon2.png',
            },
          },
          {
            title: '2,810',
            subtitle: 'average UCAT score',
            icon: {
              sourceUrl: '/images/content/icon3.png',
            },
          },
        ]}
        bottomImage={{ sourceUrl: '/images/content/surgeon.png' }}
      />
      <Services
        title='How we can help'
        content='<p>We have a fantastic range of award-winning courses.</p>'
        features={[
          'Need 1-1 online tutoring for your UCAT, or an online BMAT Classroom day?',
          'Would you like personalised Personal Statement feedback, or to join one of our MMI Interview Circuit days?',
          'Talk to our friendly and expert team, who will be able to guide you to the support your university application.',
        ]}
        links={[
          {
            link: {
              title: 'UCAT',
              url: '/ucat',
            },
            features: [
              'UCAT Online Course',
              'Personalised 1-to-1 lessons',
              'Expert UCAT Tutors',
              'Average UCAT Score = 280',
              'Zoom',
              '90th Percentile UCAT Mentors',
            ],
          },
          {
            link: {
              title: 'MSRA',
              url: '/msra',
            },
            features: [
              'BMAT Online Course',
              'Personalised 1-to-1 lessons',
              'Expert BMAT Tutor',
              'Top decile BMAT average',
              'Zoom',
              'Cambridge Mentors',
            ],
          },
          {
            link: {
              title: 'Interview',
              url: '/interview',
            },
            features: [
              'Interview online course',
              'Personal 1-to-1 coach',
              'Insider University information',
              '150 University specific MMI',
              '92% success rate',
              'Zoom',
            ],
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
