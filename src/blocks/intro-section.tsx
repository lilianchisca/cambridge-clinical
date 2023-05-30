import { getPaddings } from '@/helpers/get-paddings'

import { Page_Builder_Sections_IntroSection } from '@/types/wordpress'

type IntroSectionProps = {
  section: Page_Builder_Sections_IntroSection
}

export default function IntroSection({ section }: IntroSectionProps) {
  const { title, content, topPadding, bottomPadding } = section

  return (
    <div
      className={`relative overflow-hidden text-center md:text-left ${getPaddings(
        topPadding,
        bottomPadding
      )}`}
    >
      <div className='c-container'>
        <div className='-mx-20 flex flex-wrap items-center'>
          {title ? (
            <div className='w-full px-20 md:w-1/3'>
              <h2 className='h2 text-secondary-400' dangerouslySetInnerHTML={{ __html: title }} />
            </div>
          ) : null}
          {content ? (
            <div className='mt-25 w-full px-20 md:mt-0 md:w-2/3'>
              <div
                className='prose max-w-full lg:prose-lg xl:prose-xl'
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
