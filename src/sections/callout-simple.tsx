import { getPaddings } from '@/helpers/get-paddings'

type CalloutSimpleProps = {
  title: string
  content: string
  topPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
  bottomPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
}

export default function CalloutSimple({
  title,
  content,
  topPadding,
  bottomPadding,
}: CalloutSimpleProps) {
  return (
    <div
      className={`relative overflow-hidden text-center ${getPaddings(topPadding, bottomPadding)}`}
    >
      <div className='c-container c-container--sm'>
        <h3
          className='text-16 font-bold uppercase leading-none text-primary-600 md:text-18 lg:text-20 xl:text-22'
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        <div
          className='prose mt-20 max-w-full lg:prose-lg xl:prose-xl prose-ul:list-none prose-ul:pl-0 prose-li:after:hidden lg:mt-30 xl:mt-40'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  )
}
