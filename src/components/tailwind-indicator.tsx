import { env } from '@/env.mjs'

export default function TailwindIndicator() {
  if (env.NODE_ENV === 'production') return null

  return (
    <div className='fixed bottom-10 left-10 z-50 flex h-35 w-35 items-center justify-center rounded-full bg-black/80 font-mono text-14 text-white'>
      <div className='block sm:hidden'>xs</div>
      <div className='hidden sm:block md:hidden'>sm</div>
      <div className='hidden md:block lg:hidden'>md</div>
      <div className='hidden lg:block 2lg:hidden'>lg</div>
      <div className='hidden 2lg:block xl:hidden'>2lg</div>
      <div className='hidden xl:block 2xl:hidden'>xl</div>
      <div className='hidden 2xl:block 3xl:hidden'>2xl</div>
      <div className='hidden 3xl:block'>3xl</div>
    </div>
  )
}
