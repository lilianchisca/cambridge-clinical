'use client'

import { useState } from 'react'
import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import Button from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import Input from '@/components/ui/input'

import Select from '../ui/select'

const registerForm = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z.string().min(8, { message: 'Password must be atleast 6 characters' }),
    confirmPassword: z.string().min(8, { message: 'Confirm Password is required' }),
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

type RegisterFormType = z.infer<typeof registerForm>

export default function RegisterForm() {
  const [currPage, currPageSet] = useState(1)
  const methods = useForm<RegisterFormType>({
    resolver: zodResolver(registerForm),
  })

  async function onSubmit(data: RegisterFormType) {
    console.log(data)
  }

  const [ethnicBg, ethnicBgSet] = useState('Ethnic Background')
  const [disabilities, disabilitiesSet] = useState('Disabilities')
  const [prefUni, prefUniSet] = useState('Preferred University')

  return (
    <div className="relative overflow-hidden border-b border-gray-400/40 bg-gray-100 py-50 md:py-60 lg:py-80 xl:pb-120">
      <div className="c-container">
        <h2 className="h2 text-secondary-400">
          {currPage === 1 ? 'Fill your details below' : 'User Details'}
        </h2>
        <div className="mt-30 md:mt-40 lg:mt-50">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="max-w-[890px]">
                {currPage === 1 ? (
                  <>
                    <div className="mb-24">
                      <Input
                        type="email"
                        {...methods.register('email')}
                        placeholder="Email address"
                      />
                    </div>
                    <div className="-mx-8 flex flex-wrap">
                      <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                        <Input
                          type="password"
                          {...methods.register('password')}
                          placeholder="Password"
                        />
                        <p className="mt-6 pl-25 text-12 md:mt-10">
                          8+ characters. At least one number (0-9).
                        </p>
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                        <Input
                          type="password"
                          {...methods.register('confirmPassword')}
                          placeholder="Confirm Password"
                        />
                        <p className="mt-6 pl-25 text-12 md:mt-10">
                          Please don't re-use a password from elsewhere.
                        </p>
                      </div>
                    </div>
                    <div className="mb-20 flex w-full justify-center px-10 pt-15 md:mb-30 md:items-center md:justify-start md:pt-10">
                      <Checkbox
                        id="register-consent"
                        {...methods.register('consent')}
                        className="mt-2 md:ml-8 md:mt-0"
                      />
                      <label
                        htmlFor="register-consent"
                        className="ml-15 cursor-pointer text-13 md:text-14"
                      >
                        I accept the{' '}
                        <Link className="c-linkline" href="/terms-and-conditions">
                          Terms of Use
                        </Link>{' '}
                        and{' '}
                        <Link className="c-linkline" href="/privacy-policy">
                          Privacy Policy
                        </Link>
                        , and agree to be emailed about related courses and services
                      </label>
                    </div>
                    <Button
                      className="w-full min-w-200 md:w-auto lg:min-w-240"
                      onClick={() => currPageSet(2)}
                    >
                      Next
                    </Button>
                  </>
                ) : null}
                {currPage === 2 ? (
                  <>
                    <div className="-mx-8 flex flex-wrap">
                      <div className="mb-10 w-full px-8 md:mb-17 md:w-1/2">
                        <Input
                          type="text"
                          {...methods.register('forename')}
                          placeholder="Forename"
                        />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-17 md:w-1/2">
                        <Input type="text" {...methods.register('surname')} placeholder="Surname" />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-17">
                        <Input type="text" {...methods.register('dob')} placeholder="DOB" />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-17 md:w-1/2">
                        <Input type="text" {...methods.register('address')} placeholder="Address" />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-17 md:w-1/2">
                        <Input
                          type="text"
                          {...methods.register('houseNumber')}
                          placeholder="House Number"
                        />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-17 md:w-1/2">
                        <Input type="text" {...methods.register('city')} placeholder="City" />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-17 md:w-1/2">
                        <Input
                          type="text"
                          {...methods.register('postcode')}
                          placeholder="Postcode"
                        />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-29">
                        <Input
                          type="text"
                          {...methods.register('telephone')}
                          placeholder="Telephone"
                        />
                      </div>
                    </div>
                    <Button
                      className="w-full min-w-200 md:w-auto lg:min-w-240"
                      onClick={() => currPageSet(3)}
                    >
                      Next
                    </Button>
                  </>
                ) : null}
                {currPage === 3 ? (
                  <>
                    <div className="-mx-8 flex flex-wrap">
                      <div className="mb-10 w-full px-8 md:mb-17 md:w-1/2">
                        <Select
                          options={['Ethnic Background', 'Option 1', 'Option 2', 'Option 3']}
                          value={ethnicBg}
                          onValueChange={(value) => ethnicBgSet(value)}
                          isAlt={true}
                        />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-17 md:w-1/2">
                        <Select
                          options={['Disabilities', 'Option 1', 'Option 2', 'Option 3']}
                          value={disabilities}
                          onValueChange={(value) => disabilitiesSet(value)}
                          isAlt={true}
                        />
                      </div>
                      <div className="mb-10 w-full px-8 md:mb-29">
                        <Select
                          options={['Preferred University', 'Option 1', 'Option 2', 'Option 3']}
                          value={prefUni}
                          onValueChange={(value) => prefUniSet(value)}
                          isAlt={true}
                        />
                      </div>
                    </div>
                    <Button
                      className="w-full min-w-200 md:w-auto lg:min-w-240"
                      onClick={() => currPageSet(1)}
                    >
                      Register
                    </Button>
                  </>
                ) : null}
              </div>
            </form>
          </FormProvider>
          <div className="mt-30 text-center text-18 text-primary-600 md:text-left lg:text-20">
            Already have an account?{' '}
            <button className="c-linkline c-linkline--alt appearance-none">Log in</button>
          </div>
        </div>
      </div>
    </div>
  )
}
