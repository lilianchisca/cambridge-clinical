import Image from 'next/image'

import { Page_Builder_Sections_PageIntro } from '@/types/wordpress'

type PageIntroProps = {
  section: Page_Builder_Sections_PageIntro
}

export default function PageIntro({ section }: PageIntroProps) {
  const { title, pretitle, content, imageField } = section

  return (
    <div className="relative flex min-h-[420px] flex-col justify-center overflow-hidden pt-header-height-initial md:min-h-[400px] lg:min-h-[650px]">
      {imageField?.sourceUrl ? (
        <Image
          src={imageField.sourceUrl}
          fill
          alt="Background Image"
          className="object-cover object-center"
        />
      ) : null}

      <div className="relative text-center text-white md:text-left">
        <div className="c-container">
          {pretitle ? (
            <h2
              className="text-16 font-bold uppercase leading-none"
              dangerouslySetInnerHTML={{ __html: pretitle }}
            ></h2>
          ) : null}
          {title ? (
            <h1 className="h1 mt-10" dangerouslySetInnerHTML={{ __html: title }}></h1>
          ) : null}
          {content ? (
            <div
              className="max-sm:hide-br prose mt-15 w-full max-w-full text-white lg:prose-lg xl:prose-xl"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
