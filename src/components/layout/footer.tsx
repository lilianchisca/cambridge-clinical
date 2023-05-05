import Image from 'next/image'
import Link from 'next/link'

const footerBottomLinks = [
  {
    href: '/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    href: '/terms-and-conditions',
    label: 'Terms & Conditions',
  },
  {
    href: '/cookie-policy',
    label: 'Cookie Policy',
  },
]
const column1Title = 'Products'
const column1Links = [
  {
    href: '/ucat',
    label: 'UCAT',
  },
  {
    href: '/msra',
    label: 'MSRA',
  },
  {
    href: '/interview',
    label: 'Interview',
  },
  {
    href: '/mmi',
    label: 'MMI',
  },
  {
    href: '/personal-statement',
    label: 'Personal Statement',
  },
  {
    href: '/residential-courses',
    label: 'Residential Courses',
  },
]
const column2Title = 'Quick Links'
const column2Links = [
  {
    href: '/about',
    label: 'About Us',
  },
  {
    href: '/faqs',
    label: 'FAQs',
  },
]
const column3Title = 'Social'
const column3Links = [
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.twitter.com',
    label: 'Twitter',
  },
]

export default function Footer() {
  return (
    <footer>
      <div className='bg-gray-100 py-35 md:py-50 lg:py-75'>
        <div className='c-container'>
          <div className='-mx-15 flex flex-wrap text-center md:flex-nowrap md:text-left'>
            <div className='w-full shrink-0 grow px-15 md:w-auto lg:w-1/3 2lg:w-5/12'>
              <Link href='/' className='mb-27 hidden md:inline-block'>
                <Image
                  src='/images/logo.png'
                  alt='Cambridge Clinical'
                  className='h-79 w-169 transition-all lg:h-93 lg:w-199 2xl:h-111 2xl:w-239'
                  width={199}
                  height={93}
                />
              </Link>

              <div className='text-16 lg:text-17 xl:text-18 2xl:text-20'>
                201 S. Grand Ave., 1st Floor
                <br />
                New York City, NY 28020
              </div>
              <div className='mt-15 text-16 lg:text-17 xl:text-18 2xl:text-20'>
                <a className='c-linkline' href='tel:+1 (772) 290-2999'>
                  +1 (772) 290-2999
                </a>
              </div>
            </div>

            <div className='mt-30 w-full shrink-0 grow px-15 md:mt-0 md:w-auto'>
              <h3
                className='text-13 font-bold uppercase text-primary-300'
                dangerouslySetInnerHTML={{ __html: column1Title }}
              ></h3>
              <nav className='mt-15 flex flex-wrap border-l border-t border-black/10 md:block md:border-l-0 md:border-t-0'>
                {column1Links.map(({ href, label }) => (
                  <div
                    className='w-1/2 border-b border-r border-black/10 py-10 md:mt-7 md:w-full md:border-b-0 md:border-r-0 md:py-0'
                    key={href}
                  >
                    <Link
                      className='c-linkline text-14 lg:text-17 xl:text-18 2xl:text-20'
                      href={href}
                    >
                      <span dangerouslySetInnerHTML={{ __html: label }}></span>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            <div className='mt-30 w-full shrink-0 grow px-15 md:mt-0 md:w-auto'>
              <h3
                className='text-13 font-bold uppercase text-primary-300'
                dangerouslySetInnerHTML={{ __html: column2Title }}
              ></h3>
              <nav className='mt-15 flex flex-wrap border-l border-t border-black/10 md:block md:border-l-0 md:border-t-0'>
                {column2Links.map(({ href, label }) => (
                  <div
                    className='w-1/2 border-b border-r border-black/10 py-10 md:mt-7 md:w-full md:border-b-0 md:border-r-0 md:py-0'
                    key={href}
                  >
                    <Link
                      className='c-linkline text-14 lg:text-17 xl:text-18 2xl:text-20'
                      href={href}
                    >
                      <span dangerouslySetInnerHTML={{ __html: label }}></span>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
            <div className='mt-30 w-full shrink-0 grow px-15 md:mt-0 md:w-auto'>
              <h3
                className='text-13 font-bold uppercase text-primary-300'
                dangerouslySetInnerHTML={{ __html: column3Title }}
              ></h3>
              <nav className='mt-15 flex flex-wrap border-l border-t border-black/10 md:block md:border-l-0 md:border-t-0'>
                {column3Links.map(({ href, label }) => (
                  <div
                    className='w-1/2 border-b border-r border-black/10 py-10 md:mt-7 md:w-full md:border-b-0 md:border-r-0 md:py-0'
                    key={href}
                  >
                    <Link
                      className='c-linkline text-14 lg:text-17 xl:text-18 2xl:text-20'
                      href={href}
                    >
                      <span dangerouslySetInnerHTML={{ __html: label }}></span>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-20 md:py-30 lg:py-35'>
        <div className='c-container'>
          <div className='flex flex-wrap items-center justify-between text-13 text-gray-400 lg:text-15 xl:text-16'>
            <div className='order-last mt-10 w-full text-center md:order-first md:mt-0 md:w-auto md:text-left'>
              &copy; Cambridge Clinical {new Date().getFullYear()}
            </div>
            <div className='flex w-full items-center justify-center text-center md:w-auto md:justify-start'>
              {footerBottomLinks.map(({ href, label }, index) => (
                <div className='flex items-center' key={href}>
                  {index > 0 && <span className='px-5 text-10 md:px-10'>|</span>}
                  <Link className='c-linkline' href={href}>
                    <span dangerouslySetInnerHTML={{ __html: label }}></span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
