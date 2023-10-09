import Image from 'next/image'

import { FaLinkedinIn } from 'react-icons/fa'

import { TeamMember } from '@/types/wordpress'

export default function TeamCard({
  title,
  featuredImage,
  teamMemberSettings,
  featured,
}: TeamMember & { featured?: boolean }) {
  return (
    <div className="">
      <div
        className={`relative overflow-hidden rounded-20 ${
          featured ? 'h-[343px]' : 'h-[343px] lg:h-[269px]'
        }`}
      >
        {featuredImage?.node?.sourceUrl ? (
          <Image
            src={featuredImage.node.sourceUrl}
            alt={title ?? ''}
            fill
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : null}
        {featured && teamMemberSettings?.linkedinProfile && (
          <a
            href={teamMemberSettings.linkedinProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-16 right-16 flex h-38 w-38 items-center justify-center rounded-full bg-white text-primary-600 transition-all hover:ring-4 hover:ring-primary-200"
          >
            <span>
              <FaLinkedinIn size={20} />
            </span>
          </a>
        )}
      </div>
      <div className="mt-15 text-center">
        {title ? (
          <h3
            className={`line-clamp-1 text-18 font-bold leading-none md:text-19 lg:text-20 ${
              featured ? 'xl:text-25' : 'xl:text-21'
            }`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
        ) : null}
        {featured && teamMemberSettings?.position ? (
          <div
            className="mt-5 line-clamp-1 text-18 leading-none text-gray-400 md:text-19 lg:text-20"
            dangerouslySetInnerHTML={{ __html: teamMemberSettings.position }}
          ></div>
        ) : null}
      </div>
    </div>
  )
}
