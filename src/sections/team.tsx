import { getPaddings } from '@/helpers/get-paddings'

import TeamCard from '@/components/cards/team-card'

type TeamProps = {
  title: string
  content?: string
  teamMembers: {
    name: string
    position: string
    image: {
      sourceUrl: string
    }
    linkedin: string
  }[]
  featured?: boolean
  topPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
  bottomPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
}

export default function Team({
  title,
  content,
  teamMembers,
  featured = false,
  topPadding,
  bottomPadding,
}: TeamProps) {
  return (
    <div
      className={`relative overflow-hidden text-center md:text-left ${getPaddings(
        topPadding,
        bottomPadding
      )}`}
    >
      <div className='c-container'>
        <h2
          className='text-center text-18 font-bold uppercase text-primary-600 md:text-20 lg:text-22'
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        {content && (
          <div
            className='prose mx-auto mt-25 max-w-[780px] text-center lg:prose-lg xl:prose-xl'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        )}
        <div className='-mx-7 flex flex-wrap justify-center md:pt-10 lg:pt-20'>
          {teamMembers.map((member) => (
            <div
              className={`mt-30 w-full px-7 md:w-1/3 ${featured ? 'lg:w-1/4' : 'lg:w-1/5'}`}
              key={member.name}
            >
              <div className='mx-auto max-w-[285px]'>
                <TeamCard {...member} featured={featured} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
