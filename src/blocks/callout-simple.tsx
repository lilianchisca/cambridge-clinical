import { getPaddings } from '@/helpers/get-paddings'

import { Page_Builder_Sections_CalloutSimple } from '@/types/wordpress'

type CalloutSimpleProps = {
  section: Page_Builder_Sections_CalloutSimple
}

export default function CalloutSimple({ section }: CalloutSimpleProps) {
  const { title, content, topPadding, bottomPadding } = section

  return (
    <div
      className={`relative overflow-hidden text-center ${getPaddings(topPadding, bottomPadding)}`}
    >
      <div className='c-container c-container--sm'>
        {title ? (
          <h3
            className='text-16 font-bold uppercase leading-none text-primary-600 md:text-18 lg:text-20 xl:text-22'
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
        ) : null}
        {content ? (
          <div
            className='prose mt-20 max-w-full lg:prose-lg xl:prose-xl prose-ul:list-none prose-ul:pl-0 prose-li:after:hidden lg:mt-30 xl:mt-40'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        ) : null}
      </div>
    </div>
  )
}
