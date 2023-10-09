import type { Page_Builder_Sections } from '@/types/wordpress'
import type { Metadata } from 'next'

import { getPageByUri } from '@/lib/pages'

import ThemeSection from '@/components/theme-section'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageByUri('/')

  return {
    title: `${page?.title ?? ''} | Cambridge Clinical`,
  }
}

export default async function HomePage() {
  const page = await getPageByUri('/')

  return (
    <>
      {page?.builder?.sections?.map(
        (section, index) =>
          section && <ThemeSection key={index} section={section as Page_Builder_Sections} />
      )}
    </>
  )
}
