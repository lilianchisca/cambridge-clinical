import type { Metadata } from 'next'

import Book from '@/sections/book'
import Callout from '@/sections/callout'
import CalloutSimple from '@/sections/callout-simple'
import FeaturedBlock from '@/sections/featured-block'
import Features from '@/sections/features'
import FeaturedIcons from '@/sections/features-icons'
import FeaturesTabs from '@/sections/features-tabs'
import PageIntro from '@/sections/page-intro'
import Pricing from '@/sections/pricing'

export const metadata: Metadata = {
  title: 'UCAT | Cambridge Clinical',
  description: '',
}

export default function Page() {
  return (
    <>
      <PageIntro
        title='UCAT Tutoring'
        pretitle='Overview'
        content='<p>This year the UCAT is more important than EVER.<br/> Book a free call with a UCAT Expert now to kickstart your UCAT Preparation.</p>'
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <FeaturedBlock
        title='A quick intro...'
        content='<p>2022 is predicted to be the hardest year ever to enter medical school with only 16% of applicants getting a place last year (Source: The Guardian). The #1 reason? LOW UCAT SCORES. Fear not – with the help of a Medic Mind Tutor, your UCAT score can improve to OVER 700.</p>'
        image={{ sourceUrl: '/images/content/ucat1.jpg' }}
        imageAlignment='left'
        topPadding='large'
        bottomPadding='none'
      />
      <Features
        title='How can Medic Mind<br/>improve my UCAT score?'
        topPadding='extra-large'
        bottomPadding='none'
        features={[
          {
            title: 'Award-Winning Strategies',
            description:
              '<p>You might be doing 1000s of UCAT questions but not improving. Our tutors will transform your UCAT technique with exam theory knowledge and technique.</p>',
          },
          {
            title: 'Proven Timing Techniques',
            description:
              '<p>We teach you section-specific strategies to speed up your UCAT technique by 37% on average.</p>',
          },
          {
            title: 'Coaching by UCAT experts',
            description:
              '<p>All our UCAT tutors have scored in the top 10% of the exam and are experienced teachers with proven UCAT success.</p>',
          },
          {
            title: 'Personal 1-to-1 Approach',
            description:
              '<p>Our UCAT tutors will be your friend, mentor and teacher. You can ask questions to our team 24/7.</p>',
          },
          {
            title: 'Regular Progress Updates',
            description:
              '<p>We keep parents and students in the loop, with regular progress reports, UCAT revision tips and homework plans.</p>',
          },
          {
            title: 'UCAT Online Materials',
            description:
              '<p>We provide you with UCAT video tutorials, UCAT questions and UCAT books via your own online portal.</p>',
          },
        ]}
      />
      <CalloutSimple
        title='How our UCAT Tutoring works'
        content='<p>We believe that a personal approach is best when it comes to teaching and learning. So when you sign-up for our UCAT 1-to-1 tutoring, we’ll create your UCAT preparation study plan and you’ll receive ongoing support tailored to your needs. In addition, you’ll have access to a wealth of online resources to revise and test everything you learn.</p>'
        topPadding='medium'
        bottomPadding='none'
      />
      <FeaturedBlock
        title='Start with a hand-picked UCAT tutor'
        content='<p>After your consultation, we consider everything you’re looking for - from location to prospective universities, and find the right UCAT tutor. All of them have:</p><ul><li>Experience in 1-to-1 UCAT tutoring</li><li>Student-Friendly Approach</li><li>Achieved a Top Decile UCAT Score</li><li>Proven Track Record of Success</li></ul>'
        image={{ sourceUrl: '/images/content/ucat2.jpg' }}
        imageAlignment='left'
        topPadding='large'
        bottomPadding='none'
      />
      <FeaturedBlock
        title='Build a personalised UCAT lesson plan'
        content='<p>Your UCAT tutor will develop a personalised UCAT preparation lesson plan for you based on the time until your test, the UCAT scores you are getting and your weak areas.</p>'
        image={{ sourceUrl: '/images/content/ucat3.jpg' }}
        imageAlignment='right'
        topPadding='large'
        bottomPadding='none'
      />
      <FeaturedIcons
        title='Maximise your<br/>UCAT score'
        content="<p>If you work hard and invest time into UCAT preparation lessons, we'll give you the maximum possible chance to score above 700</p>"
        features={[
          {
            title: 'Improve your UCAT preparation technique',
            icon: {
              sourceUrl: '/images/content/ucat-icon1.svg',
              width: 82,
              height: 82,
            },
          },
          {
            title: 'Increase your UCAT speed',
            icon: {
              sourceUrl: '/images/content/ucat-icon2.svg',
              width: 78,
              height: 90,
            },
          },
          {
            title: 'Work on your weaker sections',
            icon: {
              sourceUrl: '/images/content/ucat-icon3.svg',
              width: 88,
              height: 88,
            },
          },
          {
            title: 'Use feedback to progress',
            icon: {
              sourceUrl: '/images/content/ucat-icon4.svg',
              width: 92,
              height: 92,
            },
          },
        ]}
        topPadding='extra-large'
        bottomPadding='none'
      />
      <FeaturedBlock
        title='UCAT 8000 Question Bank'
        content='<p>Your tutor will set regular homework with our UCAT Question Bank with over 8000 questions!</p><p><img src="/images/content/ucat-logo.png"></p>'
        image={{ sourceUrl: '/images/content/ucat4.jpg' }}
        imageAlignment='left'
        topPadding='extra-large'
        bottomPadding='none'
      />
      <FeaturesTabs
        title='We cover every UCAT Section'
        features={[
          {
            title: 'Verbal Reasoning',
            image: {
              sourceUrl: '/images/content/screenshot.png',
            },
          },
          {
            title: 'Decision Making',
            image: {
              sourceUrl: '/images/content/blank.png',
            },
          },
          {
            title: 'Quantitative Reasoning',
            image: {
              sourceUrl: '/images/content/blank.png',
            },
          },
          {
            title: 'Abstract Reasoning',
            image: {
              sourceUrl: '/images/content/blank.png',
            },
          },
          {
            title: 'Situational Judgement',
            image: {
              sourceUrl: '/images/content/blank.png',
            },
          },
        ]}
        topPadding='extra-large'
        bottomPadding='none'
      />
      <Pricing
        title='Choose your UCAT plan, we’re flexible'
        features={[
          {
            title: 'Tailored Timeline',
            description: '1 week, 1 month or 1 year - we’ve got you covered',
          },
          {
            title: 'Flexible Financing',
            description: '0% interest instalment plans available',
          },
          {
            title: 'Personalised Structure',
            description: 'pick and choose the tutorials you want',
          },
          {
            title: 'Affordable Alternatives',
            description: '5, 10, 15 hour schemes',
          },
        ]}
        topPadding='extra-large'
        bottomPadding='none'
      />
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
