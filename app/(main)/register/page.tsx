import type { Metadata } from 'next'

import PageIntro from '@/sections/page-intro'

import RegisterForm from '@/components/forms/register-form'

export const metadata: Metadata = {
  title: 'About Us | Cambridge Clinical',
  description: '',
}

export default function Page() {
  return (
    <>
      <PageIntro
        title='Register'
        pretitle='START YOUR JOURNEY'
        image={{ sourceUrl: '/images/content/about-header.jpg' }}
      />
      <RegisterForm />
    </>
  )
}

export const revalidate = 60
export const dynamic = 'force-static'
