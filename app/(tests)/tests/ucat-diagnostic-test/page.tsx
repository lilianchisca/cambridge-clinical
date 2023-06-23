import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getTestByUri } from '@/lib/tests'

import { Test } from '@/components/tests/test'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getTestByUri('test/ucat-diagnostic-test')

  return {
    title: `${page?.title ?? ''} | Cambridge Clinical`,
  }
}

export default async function Page() {
  const page = await getTestByUri('test/ucat-diagnostic-test')

  if (!page) {
    notFound()
  }

  return (
    <>
      <Test test={page} />
    </>
  )
}
