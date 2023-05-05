import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import Balancer from 'react-wrap-balancer'

import { getPaddings } from '@/helpers/get-paddings'

type ContactCalloutProps = {
  title: string
  pretitle: string
  topPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
  bottomPadding: 'small' | 'medium' | 'large' | 'extra-large' | 'none'
}

export default function ContactCallout({
  title,
  pretitle,
  topPadding,
  bottomPadding,
}: ContactCalloutProps) {
  return (
    <div
      className={`relative overflow-hidden text-center ${getPaddings(topPadding, bottomPadding)}`}
    >
      <div className='c-container'>
        <Balancer
          as='h3'
          className='w-full text-16 font-bold uppercase leading-snug text-primary-600 md:text-18 lg:text-20 xl:text-22'
          dangerouslySetInnerHTML={{ __html: pretitle }}
        ></Balancer>
        <Balancer
          as='h2'
          className='h2 mt-25 w-full text-secondary-400 md:mt-30'
          dangerouslySetInnerHTML={{ __html: title }}
        ></Balancer>
        <div className='mt-40 flex items-center justify-center xl:mt-50'>
          <a
            href='mailto:contact@cambridgemedical.co.uk'
            target='_blank'
            rel='noopener noreferrer'
            className='block text-black transition-all hover:text-primary-600'
          >
            <FaEnvelope className='text-30 md:text-40' />
          </a>
          <a
            href='https://wa.me/'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-20 block text-black transition-all hover:text-primary-600 md:ml-30 lg:ml-40'
          >
            <FaWhatsapp className='text-30 md:text-40' />
          </a>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-20 block text-black transition-all hover:text-primary-600 md:ml-30 lg:ml-40'
          >
            <FaFacebook className='text-30 md:text-40' />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-20 block text-black transition-all hover:text-primary-600 md:ml-30 lg:ml-40'
          >
            <FaInstagram className='text-30 md:text-40' />
          </a>
          <a
            href='https://www.youtube.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-20 block text-black transition-all hover:text-primary-600 md:ml-30 lg:ml-40'
          >
            <FaYoutube className='text-30 md:text-40' />
          </a>
        </div>
      </div>
    </div>
  )
}
