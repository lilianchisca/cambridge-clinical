import { getPaddings } from '@/helpers/get-paddings'

type IntroBlockProps = {
  title: string
  content: string
  topPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
  bottomPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
}

export default function IntroBlock({ title, content, topPadding, bottomPadding }: IntroBlockProps) {
  return (
    <div
      className={`relative overflow-hidden text-center md:text-left ${getPaddings(
        topPadding,
        bottomPadding
      )}`}
    >
      <div className='c-container'>
        <h2 className='h2 text-secondary-400' dangerouslySetInnerHTML={{ __html: title }}></h2>
        <div
          className='prose mt-25 max-w-full lg:prose-lg xl:prose-xl lg:mt-35'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  )
}
