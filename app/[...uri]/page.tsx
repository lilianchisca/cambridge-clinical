import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAllPages, getPageByUri } from '@/lib/pages'

import type { Page_Builder_Sections } from '@/types/wordpress'

import ThemeSection from '@/components/theme-section'

type PageProps = {
  params: {
    uri: string[]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByUri('/')

  return {
    title: `${page?.title ?? ''} | Cambridge Clinical`,
  }
}

export async function generateStaticParams() {
  const pages = await getAllPages()

  return (
    pages
      ?.filter((page) => page?.uri && page?.uri !== '/')
      ?.map((page) => ({
        uri: page?.uri?.split('/').filter((uri) => uri !== ''),
      })) || []
  )
}

export default async function Page({ params }: PageProps) {
  const page = await getPageByUri(params?.uri)

  if (!page) {
    notFound()
  }

  return (
    <>
      {page?.builder?.sections?.map(
        (section, index) =>
          section && <ThemeSection key={index} section={section as Page_Builder_Sections} />
      )}
    </>
  )
}
