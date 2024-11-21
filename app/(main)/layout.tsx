import { PropsWithChildren } from 'react'
import { Inter as InterFont } from 'next/font/google'

import '@/styles/tailwind.css'

import { getThemeOptions } from '@/lib/theme-options'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Providers from '@/components/layout/providers'
import TailwindIndicator from '@/components/tailwind-indicator'

const bodyFont = InterFont({
  variable: '--font-body',
  subsets: ['latin'],
})

export default async function RootLayout({ children }: PropsWithChildren) {
  const themeOptions = await getThemeOptions()

  return (
    <html lang="en" className={`scroll-smooth bg-gray-100 antialiased ${bodyFont.variable}`}>
      <head />
      <body className="min-h-screen font-body font-normal leading-normal">
        <Header menu={themeOptions?.headerMenu} />
        <Providers>{children}</Providers>
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  )
}

export const revalidate = 60
export const dynamic = 'force-static'
