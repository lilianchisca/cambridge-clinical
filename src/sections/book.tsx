import Image from 'next/image'
import Link from 'next/link'

import Balancer from 'react-wrap-balancer'

import BookForm from '@/components/forms/book-form'

type BookProps = {
  title: string
  content: string
}

export default function Book({ title, content }: BookProps) {
  return (
    <div className="bg-gradient-to-r from-primary-800 to-primary-300 py-50 text-white md:py-60">
      <div className="c-container">
        <div className="flex justify-between">
          <div className="w-full text-center md:w-auto md:text-left">
            <h2 className="h2" dangerouslySetInnerHTML={{ __html: title }}></h2>
            <Balancer
              as="div"
              className="md:prose-md prose mt-20 max-w-full text-white lg:prose-lg xl:prose-2xl"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          <div className="hidden shrink-0 pl-20 md:block">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-white.png"
                alt="Cambridge Clinical"
                className="h-79 w-169 xl:h-93 xl:w-199"
                width={199}
                height={93}
              />
            </Link>
          </div>
        </div>

        <div className="mt-30 2lg:mt-40">
          <BookForm />
        </div>
      </div>
    </div>
  )
}
