import PageIntro from '@/sections/page-intro'

import type { Metadata } from 'next'

import CourseForm from '@/components/forms/course-form'

export const metadata: Metadata = {
  title: 'Course | Cambridge Clinical',
  description: '',
}

export default function Page() {
  return (
    <>
      <PageIntro
        smallerTitle
        title="BMAT Online Course by Cambridge Clinical"
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <CourseForm />
    </>
  )
}

export const revalidate = 60
export const dynamic = 'force-static'
