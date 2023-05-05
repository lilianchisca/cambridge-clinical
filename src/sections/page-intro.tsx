import Image from 'next/image'

type PageIntroProps = {
  title: string
  pretitle: string
  content?: string
  image: {
    sourceUrl: string
  }
}

export default function PageIntro({ title, pretitle, content, image }: PageIntroProps) {
  return (
    <div className='relative flex min-h-[420px] flex-col justify-center overflow-hidden pt-header-height-initial md:min-h-[400px] lg:min-h-[650px]'>
      <Image
        src={image.sourceUrl}
        fill
        alt='Background Image'
        className='object-cover object-center'
      />

      <div className='relative text-center text-white md:text-left'>
        <div className='c-container'>
          <h2
            className='text-16 font-bold uppercase leading-none'
            dangerouslySetInnerHTML={{ __html: pretitle }}
          ></h2>
          <h1 className='h1 mt-10' dangerouslySetInnerHTML={{ __html: title }}></h1>
          {content && (
            <div
              className='max-sm:hide-br prose mt-15 w-full max-w-full text-white lg:prose-lg xl:prose-xl'
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          )}
        </div>
      </div>
    </div>
  )
}
