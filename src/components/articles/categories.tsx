import Link from 'next/link'

export default function Categories() {
  return (
    <div className='hidden bg-primary-600 p-20 text-white md:block'>
      <div className='flex items-center justify-center'>
        <Link
          href='/resources/ucas-guides'
          className='mx-15 text-12 font-bold uppercase opacity-60 transition-all hover:opacity-50 2lg:text-16 xl:mx-25'
        >
          Ucas Guides
        </Link>
        <Link
          href='/resources/comparison-tools'
          className='mx-15 text-12 font-bold uppercase transition-all hover:opacity-50 2lg:text-16 xl:mx-25'
        >
          Comparison Tools
        </Link>
        <Link
          href='/resources/topics'
          className='mx-15 text-12 font-bold uppercase transition-all hover:opacity-50 2lg:text-16 xl:mx-25'
        >
          Topics
        </Link>
      </div>
    </div>
  )
}
