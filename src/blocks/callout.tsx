import { getPaddings } from '@/helpers/get-paddings'

import { Page_Builder_Sections_Callout } from '@/types/wordpress'

import LinkButton from '@/components/ui/link-button'

type CalloutProps = {
  section: Page_Builder_Sections_Callout
}

export default function Callout({ section }: CalloutProps) {
  const { pretitle, title, button, topPadding, bottomPadding } = section

  return (
    <div
      className={`relative overflow-hidden text-center ${getPaddings(topPadding, bottomPadding)}`}
    >
      <div className="c-container">
        {pretitle ? (
          <h3
            className="text-16 font-bold uppercase leading-none text-primary-600 md:text-18 lg:text-20 xl:text-22"
            dangerouslySetInnerHTML={{ __html: pretitle }}
          ></h3>
        ) : null}
        {title ? (
          <h2
            className="h2 mt-25 text-secondary-400 md:mt-30"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
        ) : null}
        {button?.url ? (
          <div className="mt-25 text-center md:mt-30 lg:mt-40">
            <LinkButton href={button.url}>{button.title}</LinkButton>
          </div>
        ) : null}
      </div>
    </div>
  )
}
