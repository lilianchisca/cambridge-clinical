import { ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Page_Builder_Sections_Services } from '@/types/wordpress'

type ServicesProps = {
  section: Page_Builder_Sections_Services
}

export default function Services({ section }: ServicesProps) {
  const { title, content, features, links } = section

  return (
    <div className='relative overflow-hidden bg-gray-100 py-50 md:py-60 lg:py-70 xl:py-90'>
      <div className='c-container'>
        <div className='-mx-15 flex flex-wrap lg:-mx-25'>
          <div className='w-full px-15 text-center md:w-5/12 md:text-left lg:w-1/3 lg:px-25'>
            {title ? (
              <h2
                className='h2 text-secondary-400'
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
            ) : null}
            {content ? (
              <div
                className='md:prose-md prose mt-20 lg:prose-lg xl:prose-xl'
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            ) : null}
          </div>
          <div className='mt-25 w-full space-y-20 px-15 pt-5 md:mt-0 md:w-7/12 lg:w-2/3 lg:px-25 xl:space-y-25'>
            {features?.map((feature) =>
              feature?.feature ? (
                <div
                  className='prose relative pl-45 lg:prose-lg xl:prose-xl lg:pl-50'
                  key={feature.feature}
                >
                  <div className='absolute left-0 top-0 flex h-30 w-30 items-center justify-center rounded-full border border-white bg-primary-100 text-primary-600'>
                    <span>
                      <Check size={20} />
                    </span>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: feature.feature }}></div>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className='-mx-6 mt-40 flex flex-wrap lg:mt-50 xl:mt-60 2xl:mt-70'>
          {links?.map((link) =>
            link?.link?.url && link?.link?.title ? (
              <div
                className='w-full px-6 not-first:mt-30 md:w-1/3 md:not-first:mt-0'
                key={link.link.title}
              >
                <Link
                  href={link.link.url}
                  className='group relative mx-auto block h-full min-h-[390px] overflow-hidden rounded-b-40 border-6 border-primary-600 bg-white pb-100 md:rounded-b-120 lg:min-h-[450px] lg:rounded-none lg:border-0 lg:bg-transparent lg:pb-0'
                >
                  <Image
                    src='/images/feature.png'
                    width={387}
                    height={449}
                    alt='Feature Background'
                    className='absolute inset-x-0 top-0 hidden h-auto min-h-[450px] w-full transition-all group-hover:opacity-50 lg:block'
                  />

                  <div className='relative'>
                    <h3
                      className='bg-primary-100 px-30 py-25 text-center text-30 font-bold uppercase text-primary-600 lg:bg-transparent lg:py-35'
                      dangerouslySetInnerHTML={{ __html: link.link.title }}
                    ></h3>

                    <div className='px-30 pt-15 xl:pl-50'>
                      {link.features?.map((feature) =>
                        feature?.feature ? (
                          <div
                            className='prose mx-auto max-w-240 xl:prose-lg xl:max-w-300'
                            key={feature.feature}
                            dangerouslySetInnerHTML={{ __html: feature.feature }}
                          ></div>
                        ) : null
                      )}
                    </div>
                  </div>

                  <div className='absolute bottom-20 left-1/2 flex h-60 w-60 -translate-x-1/2 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-all group-hover:ring-4 group-hover:ring-primary-300/50 lg:bottom-40 xl:h-65 xl:w-65'>
                    <span>
                      <ArrowRight size={30} />
                    </span>
                  </div>
                </Link>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  )
}
