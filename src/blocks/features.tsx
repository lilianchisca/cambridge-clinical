import { getPaddings } from '@/helpers/get-paddings'

import { Page_Builder_Sections_Features } from '@/types/wordpress'

type FeaturesProps = {
  section: Page_Builder_Sections_Features
}

export default function Features({ section }: FeaturesProps) {
  const { title, features, topPadding, bottomPadding } = section

  return (
    <div
      className={`relative overflow-hidden text-center md:text-left ${getPaddings(
        topPadding,
        bottomPadding
      )}`}
    >
      <div className='c-container'>
        {title ? (
          <h2 className='h2 text-secondary-400' dangerouslySetInnerHTML={{ __html: title }}></h2>
        ) : null}
        <div className='-mx-7 mt-30 flex flex-wrap pb-24 md:mt-40 lg:mt-50 lg:pb-86 xl:mt-60'>
          {features?.map((feature, index) => (
            <div
              className={`relative mb-14 w-full px-7 md:w-1/2 lg:w-1/3 ${
                index === 1 || index === 4 || index === 7 ? 'lg:top-70' : ''
              }`}
              key={feature?.title}
            >
              <div className='group flex h-full flex-col justify-between rounded-15 bg-white px-30 pb-40 pt-35 shadow-[0_4px_20px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-none hover:ring-4 hover:ring-primary-300/50 lg:min-h-[355px]'>
                {feature?.title ? (
                  <h3
                    className='text-18 font-bold text-secondary-400 md:text-19 lg:text-20 xl:text-22 2xl:text-24'
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  ></h3>
                ) : null}

                {feature?.description ? (
                  <div
                    className='prose mt-20 max-w-full text-gray-400 transition-all lg:prose-lg xl:prose-xl group-hover:text-black'
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  ></div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
