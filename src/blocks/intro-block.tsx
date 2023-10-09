import { getPaddings } from '@/helpers/get-paddings'

import { Page_Builder_Sections_IntroBlock } from '@/types/wordpress'

type IntroBlockProps = {
  section: Page_Builder_Sections_IntroBlock
}

export default function IntroBlock({ section }: IntroBlockProps) {
  const { title, content, topPadding, bottomPadding } = section

  return (
    <div
      className={`relative overflow-hidden text-center md:text-left ${getPaddings(
        topPadding,
        bottomPadding
      )}`}
    >
      <div className="c-container">
        {title ? (
          <h2 className="h2 text-secondary-400" dangerouslySetInnerHTML={{ __html: title }}></h2>
        ) : null}
        {content ? (
          <div
            className="prose mt-25 max-w-full lg:prose-lg xl:prose-xl lg:mt-35"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        ) : null}
      </div>
    </div>
  )
}
