import PageIntro from '@/sections/page-intro'

import type { Metadata } from 'next'

import AccountForm from '@/components/forms/account-form'

export const metadata: Metadata = {
  title: 'Account | Cambridge Clinical',
  description: '',
}

export default function Page() {
  return (
    <>
      <PageIntro title="Account" image={{ sourceUrl: '/images/content/about-header.jpg' }} />
      <AccountForm />
    </>
  )
}

export const revalidate = 60
export const dynamic = 'force-static'
