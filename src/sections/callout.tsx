import { getPaddings } from '@/helpers/get-paddings'

import Button from '@/components/ui/button'

type CalloutProps = {
  title: string
  pretitle: string
  button: {
    title: string
    url: string
  }
  topPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
  bottomPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
}

export default function Callout({
  title,
  pretitle,
  button,
  topPadding,
  bottomPadding,
}: CalloutProps) {
  return (
    <div
      className={`relative overflow-hidden text-center ${getPaddings(topPadding, bottomPadding)}`}
    >
      <div className="c-container">
        <h3
          className="text-16 font-bold uppercase leading-none text-primary-600 md:text-18 lg:text-20 xl:text-22"
          dangerouslySetInnerHTML={{ __html: pretitle }}
        ></h3>
        <h2
          className="h2 mt-25 text-secondary-400 md:mt-30"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <div className="mt-25 text-center md:mt-30 lg:mt-40">
          <Button href={button.url}>{button.title}</Button>
        </div>
      </div>
    </div>
  )
}
