import { getPaddings } from '@/helpers/get-paddings'

import { Page_Builder_Sections_Team, TeamMember } from '@/types/wordpress'

import TeamCard from '@/components/cards/team-card-cms'

type TeamProps = {
  section: Page_Builder_Sections_Team
}

export default function Team({ section }: TeamProps) {
  const { title, content, teamMembers, featured, topPadding, bottomPadding } = section

  return (
    <div
      className={`relative overflow-hidden text-center md:text-left ${getPaddings(
        topPadding,
        bottomPadding
      )}`}
    >
      <div className='c-container'>
        {title ? (
          <h2
            className='text-center text-18 font-bold uppercase text-primary-600 md:text-20 lg:text-22'
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
        ) : null}
        {content ? (
          <div
            className='prose mx-auto mt-25 max-w-[780px] text-center lg:prose-lg xl:prose-xl'
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        ) : null}
        <div className='-mx-7 flex flex-wrap justify-center md:pt-10 lg:pt-20'>
          {teamMembers?.map((member) => (
            <div
              className={`mt-30 w-full px-7 md:w-1/3 ${featured ? 'lg:w-1/4' : 'lg:w-1/5'}`}
              key={member?.title}
            >
              <div className='mx-auto max-w-[285px]'>
                <TeamCard {...(member as TeamMember)} featured={!!featured} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
