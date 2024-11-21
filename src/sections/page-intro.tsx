import Image from 'next/image'

import { cn } from '@/helpers/cn'

type PageIntroProps = {
  smallerTitle?: boolean
  title: string
  pretitle?: string
  content?: string
  image: {
    sourceUrl: string
  }
  imageOverlay?: boolean
}

export default function PageIntro({
  title,
  pretitle,
  content,
  image,
  smallerTitle = false,
  imageOverlay = false,
}: PageIntroProps) {
  return (
    <div
      className={cn(
        'relative flex min-h-[420px] flex-col justify-center overflow-hidden pt-header-height-initial',
        !pretitle ? 'text-center' : 'md:min-h-[400px] lg:min-h-[650px]'
      )}
    >
      <Image
        src={image.sourceUrl}
        fill
        alt="Background Image"
        className="object-cover object-center"
      />
      {imageOverlay && <div className="absolute inset-0 bg-primary-600 opacity-60"></div>}

      <div className={cn('relative text-center text-white', pretitle && 'md:text-left')}>
        <div className="c-container">
          {pretitle ? (
            <h2
              className="text-16 font-bold uppercase leading-none"
              dangerouslySetInnerHTML={{ __html: pretitle }}
            ></h2>
          ) : null}
          <h1
            className={cn('mt-10', smallerTitle ? 'h1sm' : 'h1')}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          {content && (
            <div
              className="max-sm:hide-br prose mt-15 w-full max-w-full text-white lg:prose-lg xl:prose-xl"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          )}
        </div>
      </div>
    </div>
  )
}
