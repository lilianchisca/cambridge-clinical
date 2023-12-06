'use client'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import Button from '../ui/button'
import Select from '../ui/select'

const courseForm = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z.string().min(8, { message: 'Password must be atleast 6 characters' }),
    confirmPassword: z.string().min(8, { message: 'Confirm Password is required' }),
    currentPassword: z.string().min(8, { message: 'Current Password is required' }),
    consent: z.boolean().refine((data) => data === true, {
      message: 'Please agree to the terms and conditions',
    }),
    forename: z.string().min(1, { message: 'Forename is required' }),
    surname: z.string().min(1, { message: 'Surname is required' }),
    dob: z.string().min(1, { message: 'DOB is required' }),
    address: z.string().min(1, { message: 'Address is required' }),
    houseNumber: z.string().min(1, { message: 'House Number is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    postcode: z.string().min(1, { message: 'Postcode is required' }),
    telephone: z.string().min(1, { message: 'Telephone is required' }),
  })
  .refine((data) => /\d/.test(data.password), {
    path: ['password'],
    message: 'Password must contain at least one number',
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password does not match',
  })

type CourseFormType = z.infer<typeof courseForm>

export default function CourseForm() {
  const methods = useForm<CourseFormType>({
    resolver: zodResolver(courseForm),
  })

  async function onSubmit(data: CourseFormType) {
    console.log(data)
  }

  const [option, optionSet] = useState('Season Pass 2023 Extension')

  return (
    <div className="relative overflow-hidden border-b border-gray-400/40 bg-gray-100 py-50 md:py-60 lg:py-80 xl:pb-120">
      <div className="c-container">
        <div className="-mx-15 flex flex-wrap lg:-mx-30 xl:-mx-50 2xl:-mx-60">
          <div className="mb-40 w-full px-15 md:w-1/3 lg:px-30 xl:px-50 2xl:px-60">
            <div className="rounded-10 bg-white px-30 py-25">
              <div className="text-18 font-bold leading-tight lg:text-20">Account status:</div>
              <div className="text-18 leading-tight text-[#19CE61] lg:text-20">Active</div>
            </div>
          </div>
          <div className="w-full px-15 md:w-2/3 lg:px-30 xl:px-50 2xl:px-60">
            <h2 className="text-20 font-bold leading-tight md:text-22 lg:text-26 xl:text-30">
              Pay as you go
            </h2>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="mt-25 text-16 lg:text-18">
                  Purchase for a fixed duration and extend when it’s right for you.
                </div>
                <div className="mt-25 text-16 lg:text-18">Select BMAT duration</div>
                <div className="mt-15 max-w-[400px]">
                  <Select
                    options={['Season Pass 2023 Extension', 'Option 1', 'Option 2', 'Option 3']}
                    value={option}
                    onValueChange={(value) => optionSet(value)}
                    isAlt={true}
                  />
                </div>
                <div className="mt-25 text-16 lg:text-18">
                  BMAT access until Thu 30 Nov 2023 23:59 UK time
                </div>
                <div className="mt-30 h-1 bg-[#D9D9D9]"></div>
              </form>
            </FormProvider>
            <h2 className="mt-35 text-20 font-bold leading-tight md:text-22 lg:text-26 xl:text-30">
              Add-ons
            </h2>
            <div className="mt-35">
              <button className="group inline-flex appearance-none items-center text-16 font-bold lg:text-18 xl:text-20">
                <span className="group-hover:underline">Add BMAT Season Pass 2023</span>
                <span className="relative ml-20 h-30 w-30 rounded-full bg-primary-600 text-white">
                  <div className="absolute left-1/2 top-1/2 h-2 w-10 -translate-x-1/2 -translate-y-1/2 bg-white"></div>
                </span>
              </button>
            </div>
            <div className="mt-20">
              <button className="group inline-flex appearance-none items-center text-16 font-bold lg:text-18 xl:text-20">
                <span className="group-hover:underline">Add BMAT Season Pass 2023</span>
                <span className="relative ml-20 h-30 w-30 rounded-full bg-[#dbb1c6] text-white">
                  <div className="absolute left-1/2 top-1/2 h-2 w-10 -translate-x-1/2 -translate-y-1/2 bg-primary-600"></div>
                  <div className="absolute left-1/2 top-1/2 h-10 w-2 -translate-x-1/2 -translate-y-1/2 bg-primary-600"></div>
                </span>
              </button>
            </div>
            <div className="mt-35">
              <Button>Pay £60 now</Button>
            </div>
            <div className="mt-20 text-16 text-secondary-400/60">
              (Debit/Credit Card, PavPal, Apple Pay, Google Pay)
            </div>
            <div className="mt-20 text-16 text-secondary-400/60">
              Access begins immediately after payment. Course purchases are for a single person and
              are non-transferrable.Please check our system requirements page for information on
              supported browsers.
            </div>
            <div className="mt-30 h-1 bg-[#D9D9D9]"></div>
            <h2 className="mt-35 text-20 font-bold leading-tight md:text-22 lg:text-26 xl:text-30">
              Subscription
            </h2>
            <div className="mt-25 text-16 lg:text-18">
              Prefer to spread the cost? Why not setup a payment subscription with us below
            </div>
            <div className="-mx-25 mt-25 flex">
              <div className="px-25">
                <div className="text-16 lg:text-18">Weekly subscription</div>
                <div className="mt-15">
                  <Button>Pay £15/week</Button>
                </div>
              </div>
              <div className="px-25">
                <div className="text-16 lg:text-18">Monthly subscription</div>
                <div className="mt-15">
                  <Button>Pay £30/week</Button>
                </div>
              </div>
            </div>
            <div className="mt-30 h-1 bg-[#D9D9D9]"></div>
            <div className="mt-35 text-16 font-bold lg:text-18 xl:text-20">
              Course Payment Record
            </div>
            <div className="mt-30">
              <div className="flex">
                <div className="w-1/4 pl-20 pr-15 text-16 font-bold lg:text-18 xl:text-20">
                  Credited
                </div>
                <div className="w-1/4 px-15 text-16 font-bold lg:text-18 xl:text-20">Duration</div>
                <div className="w-1/4 px-15 text-16 font-bold lg:text-18 xl:text-20">Activated</div>
                <div className="w-1/4 px-15 text-16 font-bold lg:text-18 xl:text-20">
                  Expirty date
                </div>
              </div>
              <div className="mt-10 flex rounded-10 bg-white px-30 py-20">
                <div className="w-1/4 pl-20 pr-10 text-15 text-secondary-400/60">
                  Thu 15 Sep 2023
                </div>
                <div className="w-1/4 px-10 text-15 text-secondary-400/60">34 days</div>
                <div className="w-1/4 px-10 text-15 text-secondary-400/60">Thu 15 Sep 2023</div>
                <div className="w-1/4 pl-10 pr-20 text-15 text-secondary-400/60">
                  Wed 15 Oct 2023
                </div>
              </div>
              <div className="mt-10 flex rounded-10 bg-white px-30 py-20">
                <div className="w-1/4 pl-20 pr-10 text-15 text-secondary-400/60">
                  Thu 15 Sep 2023
                </div>
                <div className="w-1/4 px-10 text-15 text-secondary-400/60">34 days</div>
                <div className="w-1/4 px-10 text-15 text-secondary-400/60">Thu 15 Sep 2023</div>
                <div className="w-1/4 pl-10 pr-20 text-15 text-secondary-400/60">
                  Wed 15 Oct 2023
                </div>
              </div>
              <div className="mt-10 flex rounded-10 bg-white px-30 py-20">
                <div className="w-1/4 pl-20 pr-10 text-15 text-secondary-400/60">
                  Thu 15 Sep 2023
                </div>
                <div className="w-1/4 px-10 text-15 text-secondary-400/60">34 days</div>
                <div className="w-1/4 px-10 text-15 text-secondary-400/60">Thu 15 Sep 2023</div>
                <div className="w-1/4 pl-10 pr-20 text-15 text-secondary-400/60">
                  Wed 15 Oct 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
