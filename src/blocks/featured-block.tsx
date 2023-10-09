import Image from 'next/image'

import { getPaddings } from '@/helpers/get-paddings'
import Balancer from 'react-wrap-balancer'

import { Page_Builder_Sections_FeaturedBlock } from '@/types/wordpress'

type FeaturedBlockProps = {
  section: Page_Builder_Sections_FeaturedBlock
}

export default function FeaturedBlock({ section }: FeaturedBlockProps) {
  const { title, content, image, imageLeftSide, topPadding, bottomPadding } = section
  const contentWithCheckmarks = content?.replace(
    /<li>/g,
    '<li class="relative !pl-40"><div class="!m-0 absolute left-0 top-3 flex h-30 w-30 items-center justify-center rounded-full border border-white bg-primary-100 text-primary-600"><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg></span></div>'
  )

  return (
    <div
      className={`relative overflow-hidden text-center md:text-left ${getPaddings(
        topPadding,
        bottomPadding
      )}`}
    >
      <div className="c-container">
        <div className="flex flex-wrap items-center">
          <div
            className={`w-full md:w-1/2 md:self-stretch lg:w-[53%] ${
              !imageLeftSide ? 'md:order-last' : ''
            }`}
          >
            {image?.sourceUrl ? (
              <div className="relative h-full min-h-220 overflow-hidden rounded-20 md:min-h-[420px]">
                <Image
                  src={image.sourceUrl}
                  fill
                  alt={title ?? ''}
                  className="absolute -inset-5 h-[calc(100%+10px)] w-[calc(100%+10px)] object-cover object-center"
                />
              </div>
            ) : null}
          </div>
          <div
            className={`mt-30 w-full md:mt-0 md:w-1/2 lg:w-[47%] ${
              !imageLeftSide ? 'md:pr-50 lg:pr-60 xl:pr-70' : 'md:pl-50 lg:pl-60 xl:pl-70'
            }`}
          >
            {title ? (
              <Balancer
                as="h2"
                className="h2 text-secondary-400"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            ) : null}
            {contentWithCheckmarks ? (
              <div
                className="prose mt-20 max-w-full lg:prose-lg xl:prose-xl prose-ul:list-none prose-ul:pl-0 prose-li:text-left prose-li:after:hidden lg:mt-30 xl:mt-40"
                dangerouslySetInnerHTML={{ __html: contentWithCheckmarks }}
              ></div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
