import Image from 'next/image'

import Balancer from 'react-wrap-balancer'

import { Page_Builder_Sections_Hero } from '@/types/wordpress'

import LinkButton from '@/components/ui/link-button'

type HeroProps = {
  section: Page_Builder_Sections_Hero
}

export default function Hero({ section }: HeroProps) {
  const { title, content, button, features, image } = section

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden text-white">
      {image?.sourceUrl && (
        <Image
          src={image.sourceUrl}
          fill
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover object-right-top md:object-top"
        />
      )}
      <div className="absolute inset-0 bg-black/30 lg:hidden"></div>

      <div className="relative">
        <div className="c-container c-container--lg">
          <div className="flex">
            <div className="w-full text-center lg:ml-auto lg:w-2/3 lg:text-left 2lg:w-1/2">
              {title ? (
                <Balancer
                  as="h1"
                  className="h1"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></Balancer>
              ) : null}
              {content ? (
                <div
                  className="mt-20 text-18 font-bold md:text-20 lg:text-22"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              ) : null}
              {button?.url ? (
                <div className="mt-30 md:mt-40">
                  <LinkButton href={button.url}>{button.title}</LinkButton>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {features && (
        <div className="absolute inset-x-0 bottom-0 bg-primary-600 p-10 text-12 uppercase md:px-20 md:text-14 lg:px-30 lg:text-15 xl:text-16 2xl:text-18">
          <div className="sm:hide-br -mx-10 flex justify-between">
            {features.map((feature) =>
              feature?.feature ? (
                <div
                  className="w-1/3 px-10 text-center md:first:text-left md:last:text-right"
                  key={feature.feature}
                  dangerouslySetInnerHTML={{ __html: feature.feature }}
                ></div>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  )
}
