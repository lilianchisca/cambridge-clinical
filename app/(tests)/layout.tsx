import { PropsWithChildren } from 'react'
import { Inter as InterFont } from 'next/font/google'

import '@/styles/tailwind.css'

import Providers from '@/components/layout/providers'

const bodyFont = InterFont({
  variable: '--font-body',
  subsets: ['latin'],
})

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`scroll-smooth bg-gray-100 antialiased ${bodyFont.variable}`}>
      <head />
      <body className="min-h-screen font-body font-normal leading-normal">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export const revalidate = 60
export const dynamic = 'force-static'
