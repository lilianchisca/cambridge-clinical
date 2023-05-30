import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getPaddings } from '@/helpers/get-paddings'

import { Page_Builder_Sections_Interviews } from '@/types/wordpress'

type InterviewsProps = {
  section: Page_Builder_Sections_Interviews
}

export default function Interviews({ section }: InterviewsProps) {
  const { topPadding, bottomPadding, interviews } = section
  return (
    <div className={`relative overflow-hidden ${getPaddings(topPadding, bottomPadding)}`}>
      <div className='c-container'>
        <div className='-mx-15 flex flex-wrap'>
          {interviews?.map((interview) => (
            <div
              className='mb-30 w-full px-15 md:w-1/2'
              key={interview?.featuredImage?.node?.sourceUrl}
            >
              <Link
                href={`/interview/${interview?.slug}`}
                className='group block overflow-hidden rounded-15 bg-white shadow-[0_4px_20px_10px_rgba(0,0,0,0.05)] transition-all hover:shadow-none hover:ring-4 hover:ring-primary-300/50'
              >
                {interview?.featuredImage?.node?.sourceUrl ? (
                  <div className='relative h-220 overflow-hidden rounded-t-15 md:h-260 lg:h-[316px]'>
                    <Image
                      src={interview.featuredImage.node.sourceUrl}
                      alt={interview.title ?? ''}
                      fill
                      className='absolute inset-10 object-cover object-center'
                    />
                  </div>
                ) : null}
                <div className='relative px-20 pb-100 pt-25 lg:px-25 xl:px-30'>
                  {interview?.title ? (
                    <h3
                      className='text-18 font-bold text-secondary-400 md:text-20 lg:text-22 xl:text-24'
                      dangerouslySetInnerHTML={{ __html: interview.title }}
                    ></h3>
                  ) : null}
                  {interview?.excerpt ? (
                    <div
                      className='prose mt-20 max-w-full text-secondary-400/60 lg:prose-lg xl:prose-xl lg:mt-25'
                      dangerouslySetInnerHTML={{ __html: interview.excerpt }}
                    ></div>
                  ) : null}

                  <span className='absolute bottom-20 right-15 z-10 h-38 w-38 overflow-hidden rounded-full bg-primary-100 text-primary-600 md:h-40 md:w-40 lg:h-42 lg:w-42 xl:h-44 xl:w-44'>
                    <span className='absolute inset-0 flex items-center justify-center transition-all group-hover:translate-x-full'>
                      <span>
                        <ArrowRight size={20} />
                      </span>
                    </span>
                    <span className='absolute inset-0 flex -translate-x-full items-center justify-center transition-all group-hover:translate-x-0'>
                      <span>
                        <ArrowRight size={20} />
                      </span>
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
