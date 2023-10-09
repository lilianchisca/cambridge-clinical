import { getPaddings } from '@/helpers/get-paddings'

type IntroSectionProps = {
  title: string
  content: string
  topPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
  bottomPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
}

export default function IntroSection({
  title,
  content,
  topPadding,
  bottomPadding,
}: IntroSectionProps) {
  return (
    <div
      className={`relative overflow-hidden text-center md:text-left ${getPaddings(
        topPadding,
        bottomPadding
      )}`}
    >
      <div className="c-container">
        <div className="-mx-20 flex flex-wrap items-center">
          <div className="w-full px-20 md:w-1/3">
            <h2 className="h2 text-secondary-400" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <div className="mt-25 w-full px-20 md:mt-0 md:w-2/3">
            <div
              className="prose max-w-full lg:prose-lg xl:prose-xl"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
