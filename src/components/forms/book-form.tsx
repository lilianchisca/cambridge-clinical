'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import Checkbox from '@/components/ui/checkbox'
import Input from '@/components/ui/input'

const bookForm = z.object({
  fullName: z.string().min(3).max(50),
  telephone: z.string().min(3).max(50),
  consent: z.boolean(),
})

type BookFormType = z.infer<typeof bookForm>

export default function BookForm() {
  const methods = useForm<BookFormType>({
    resolver: zodResolver(bookForm),
  })

  async function onSubmit(data: BookFormType) {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className='-mx-10 flex flex-wrap items-center'>
          <div className='order-first mb-10 w-full grow px-10 md:mb-0 md:w-[calc(50%-47px)]'>
            <Input
              className='text-center md:text-left'
              type='text'
              {...methods.register('fullName')}
              placeholder='Full Name'
            />
          </div>
          <div className='order-first mb-10 w-full grow px-10 md:mb-0 md:w-[calc(50%-47px)]'>
            <Input
              className='text-center md:text-left'
              type='text'
              {...methods.register('telephone')}
              placeholder='Telephone No.'
            />
          </div>
          <div className='flex w-full items-center justify-center px-10 md:mt-30 md:justify-start'>
            <Checkbox id='book-consent' {...methods.register('consent')} className='md:ml-8' />
            <label htmlFor='book-consent' className='ml-15 cursor-pointer text-13 md:text-16'>
              I agree to the{' '}
              <Link className='c-linkline' href='/terms-and-conditions'>
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link className='c-linkline' href='/privacy-policy'>
                Privacy Policy
              </Link>
            </label>
          </div>
          <div className='mb-10 mt-20 w-full grow px-10 md:order-first md:my-0 md:w-auto'>
            <button
              type='submit'
              aria-label='Book'
              className='relative flex h-54 w-full items-center justify-center rounded-full bg-primary-300 text-white transition-all focus:outline-none focus:ring-4 focus:ring-primary-300 md:w-54 md:bg-gray-100 md:text-primary-300 md:hover:bg-primary-300 md:hover:text-white lg:h-60 lg:w-60'
            >
              <span className='text-18 font-bold md:hidden'>Book</span>
              <span className='absolute inset-y-5 right-5 flex h-44 w-44 items-center justify-center rounded-full bg-white text-primary-300 md:relative md:inset-y-auto md:right-auto md:block md:h-auto md:w-auto md:bg-transparent md:text-inherit'>
                <span>
                  <ArrowRight className='w-40' size={30} />
                </span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}
