import Image from 'next/image'

import { getPaddings } from '@/helpers/get-paddings'
import Balancer from 'react-wrap-balancer'

type FeaturedIconsProps = {
  title: string
  content: string
  features: {
    title: string
    icon: {
      sourceUrl: string
      width: number
      height: number
    }
  }[]
  topPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
  bottomPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
}

export default function FeaturedIcons({
  title,
  content,
  features,
  topPadding,
  bottomPadding,
}: FeaturedIconsProps) {
  return (
    <div className={`relative overflow-hidden ${getPaddings(topPadding, bottomPadding)}`}>
      <div className="c-container">
        <div className="-mx-20 flex flex-wrap text-center md:text-left">
          <div className="w-full px-20 md:w-1/2">
            <h2 className="h2 text-secondary-400" dangerouslySetInnerHTML={{ __html: title }}></h2>
          </div>
          <div className="mt-20 w-full px-20 md:mt-0 md:w-1/2">
            <div className="md:ml-auto md:max-w-[460px]">
              <Balancer
                as="div"
                className="prose max-w-full lg:prose-lg xl:prose-xl"
                dangerouslySetInnerHTML={{ __html: content }}
              ></Balancer>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap lg:mt-15 xl:mt-25">
          {features.map((feature, index) => (
            <div
              className={`w-full ${(index + 1) % 2 === 0 ? 'md:w-[40%]' : 'md:w-[60%]'}`}
              key={feature.title}
            >
              <div
                className={`mx-auto flex max-w-[360px] items-center border-gray-400/40 py-20 md:mx-0 md:max-w-full md:py-35 ${
                  index === 1 ? 'border-t md:border-t-0' : index > 1 ? 'border-t' : ''
                } ${(index + 1) % 2 === 0 ? 'md:pl-15' : 'md:pr-15'}`}
              >
                <div className="w-60 shrink-0 md:w-92">
                  <Image
                    src={feature.icon.sourceUrl}
                    alt={feature.title}
                    width={feature.icon.width}
                    height={feature.icon.height}
                    className="origin-left scale-80 md:scale-100"
                  />
                </div>
                <div
                  className="pl-20 text-18 text-secondary-400 xl:text-24"
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
