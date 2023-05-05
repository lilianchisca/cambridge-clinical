import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'

type TeamCardProps = {
  name: string
  position: string
  image: {
    sourceUrl: string
  }
  linkedin?: string
  featured?: boolean
}

export default function TeamCard({
  name,
  position,
  image,
  linkedin,
  featured = false,
}: TeamCardProps) {
  return (
    <div className=''>
      <div
        className={`relative overflow-hidden rounded-20 ${
          featured ? 'h-[343px]' : 'h-[343px] lg:h-[269px]'
        }`}
      >
        <Image
          src={image.sourceUrl}
          alt={name}
          fill
          className='absolute inset-0 h-full w-full object-cover object-top'
        />
        {featured && linkedin && (
          <a
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute bottom-16 right-16 flex h-38 w-38 items-center justify-center rounded-full bg-white text-primary-600 transition-all hover:ring-4 hover:ring-primary-200'
          >
            <span>
              <FaLinkedinIn size={20} />
            </span>
          </a>
        )}
      </div>
      <div className='mt-15 text-center'>
        <h3
          className={`line-clamp-1 text-18 font-bold leading-none md:text-19 lg:text-20 ${
            featured ? 'xl:text-25' : 'xl:text-21'
          }`}
          dangerouslySetInnerHTML={{ __html: name }}
        ></h3>
        {featured && (
          <div
            className='mt-5 line-clamp-1 text-18 leading-none text-gray-400 md:text-19 lg:text-20'
            dangerouslySetInnerHTML={{ __html: position }}
          ></div>
        )}
      </div>
    </div>
  )
}
