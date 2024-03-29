import { getPaddings } from '@/helpers/get-paddings'
import { Check } from 'lucide-react'

import LinkButton from '@/components/ui/link-button'

type PricingProps = {
  title: string
  features: {
    title: string
    description: string
  }[]
  topPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
  bottomPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
}

export default function Pricing({ title, features, topPadding, bottomPadding }: PricingProps) {
  return (
    <div
      className={`relative overflow-hidden text-center ${getPaddings(topPadding, bottomPadding)}`}
    >
      <div className="c-container c-container--md">
        <h2
          className="h2 text-center text-secondary-400"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>

        <div className="-mx-10 mt-30 flex flex-wrap lg:mt-40 xl:mt-50">
          <div className="mt-20 w-full px-10 md:w-1/3">
            <div className="rounded-15 bg-white px-17 pb-23 pt-30 transition-all hover:ring-4 hover:ring-primary-200">
              <div className="text-18 leading-tight text-secondary-400/60 lg:text-25">
                2760 Average
              </div>
              <div className="mt-15 text-80 font-bold leading-none tracking-tighter text-secondary-400 lg:text-118">
                20
              </div>
              <div className="mt-5 text-20 font-bold uppercase text-secondary-400 lg:text-25">
                hours
              </div>
              <div className="my-30 text-18 leading-tight text-secondary-400/60 lg:text-25">
                / £36 per hour
              </div>
              <LinkButton href="#" className="w-full">
                Buy Now
              </LinkButton>
            </div>
          </div>
          <div className="mt-20 w-full px-10 md:w-1/3">
            <div className="rounded-15 bg-white px-17 pb-23 pt-30 transition-all hover:ring-4 hover:ring-primary-200">
              <div className="text-18 leading-tight text-secondary-400/60 lg:text-25">
                2760 Average
              </div>
              <div className="mt-15 text-80 font-bold leading-none tracking-tighter text-secondary-400 lg:text-118">
                20
              </div>
              <div className="mt-5 text-20 font-bold uppercase text-secondary-400 lg:text-25">
                hours
              </div>
              <div className="my-30 text-18 leading-tight text-secondary-400/60 lg:text-25">
                / £36 per hour
              </div>
              <LinkButton href="#" className="w-full">
                Buy Now
              </LinkButton>
            </div>
          </div>
          <div className="mt-20 w-full px-10 md:w-1/3">
            <div className="rounded-15 bg-white px-17 pb-23 pt-30 transition-all hover:ring-4 hover:ring-primary-200">
              <div className="text-18 leading-tight text-secondary-400/60 lg:text-25">
                2760 Average
              </div>
              <div className="mt-15 text-80 font-bold leading-none tracking-tighter text-secondary-400 lg:text-118">
                20
              </div>
              <div className="mt-5 text-20 font-bold uppercase text-secondary-400 lg:text-25">
                hours
              </div>
              <div className="my-30 text-18 leading-tight text-secondary-400/60 lg:text-25">
                / £36 per hour
              </div>
              <LinkButton href="#" className="w-full">
                Buy Now
              </LinkButton>
            </div>
          </div>
        </div>

        <div className="-mx-10 flex flex-wrap pt-25 text-left">
          {features.map((feature) => (
            <div className="mt-8 w-full px-10 md:w-1/2" key={feature.title}>
              <div className="relative pl-45">
                <div className="absolute left-0 top-0 flex h-30 w-30 items-center justify-center rounded-full border border-white bg-primary-100 text-primary-600">
                  <span>
                    <Check size={20} />
                  </span>
                </div>
                <div className="py-4 text-15 leading-normal">
                  <strong dangerouslySetInnerHTML={{ __html: `${feature.title}:` }}></strong>{' '}
                  <span dangerouslySetInnerHTML={{ __html: feature.description }}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
