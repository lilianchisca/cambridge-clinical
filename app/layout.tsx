import { Inter as InterFont } from 'next/font/google'

import '@/styles/tailwind.css'

import { PropsWithChildren } from '@/types/common'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Providers from '@/components/layout/providers'
import TailwindIndicator from '@/components/tailwind-indicator'

const bodyFont = InterFont({
  variable: '--font-body',
  subsets: ['latin'],
})

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={`scroll-smooth bg-gray-100 antialiased ${bodyFont.variable}`}>
      <head />
      <body className='min-h-screen font-body font-normal leading-normal'>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  )
}

export const revalidate = 60
export const dynamic = 'force-static'
