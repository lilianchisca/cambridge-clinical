'use client'

import { useState } from 'react'
import Image from 'next/image'

import { getPaddings } from '@/helpers/get-paddings'

import { Page_Builder_Sections_FeaturesTabs } from '@/types/wordpress'

type FeaturesTabsProps = {
  section: Page_Builder_Sections_FeaturesTabs
}

export default function FeaturesTabs({ section }: FeaturesTabsProps) {
  const { title, features, topPadding, bottomPadding } = section
  const [activeTab, activeTabSet] = useState(features?.[0]?.title ?? '')

  return (
    <div
      className={`relative overflow-hidden text-center ${getPaddings(topPadding, bottomPadding)}`}
    >
      <div className="c-container">
        {title ? (
          <h2 className="h2 text-secondary-400" dangerouslySetInnerHTML={{ __html: title }}></h2>
        ) : null}

        <div className="-mx-5 mt-30 flex flex-wrap items-center justify-center md:mt-40 md:flex-nowrap lg:mt-50 xl:mt-60">
          {features?.map((feature) => (
            <div
              className={`mb-10 w-full px-5 sm:w-1/2 md:w-auto md:grow ${
                activeTab === feature?.title ? '' : 'hidden sm:block'
              }`}
              key={feature?.title}
            >
              <button
                className={`w-full appearance-none rounded-full px-15 py-12 text-center text-14 font-bold leading-tight transition-all md:py-5 lg:py-15 xl:py-18 xl:text-16 ${
                  activeTab === feature?.title
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-black hover:ring-4 hover:ring-primary-200'
                }`}
                dangerouslySetInnerHTML={{ __html: feature?.title ?? '' }}
                onClick={() => activeTabSet(feature?.title ?? '')}
              ></button>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-15 shadow-lg lg:mt-30 xl:mt-40">
          {features ? (
            <Image
              src={
                features.find((feature) => feature?.title === activeTab)?.image?.sourceUrl ??
                '/images/content/blank.png'
              }
              alt={activeTab}
              className="h-auto w-full"
              width={1000}
              height={600}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
