'use client'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import Button from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import Input from '@/components/ui/input'

const registerForm = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z.string().min(8, { message: 'Password must be atleast 6 characters' }),
    confirmPassword: z.string().min(8, { message: 'Confirm Password is required' }),
    consent: z.boolean().refine((data) => data === true, {
      message: 'Please agree to the terms and conditions',
    }),
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
  const methods = useForm<RegisterFormType>({
    resolver: zodResolver(registerForm),
  })

  async function onSubmit(data: RegisterFormType) {
    console.log(data)
  }

  return (
    <div className="relative overflow-hidden border-b border-gray-400/40 bg-gray-100 py-50 md:py-60 lg:py-80 xl:pb-120">
      <div className="c-container">
        <h2 className="h2 text-secondary-400">Fill your details below</h2>
        <div className="mt-30 md:mt-40 lg:mt-50">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="max-w-[890px]">
                <div className="mb-24">
                  <Input type="email" {...methods.register('email')} placeholder="Email address" />
                </div>
                <div className="-mx-8 flex flex-wrap">
                  <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                    <Input
                      type="password"
                      {...methods.register('password')}
                      placeholder="Password"
                    />
                    <p className="mt-6 pl-25 text-12 md:mt-10 md:pl-35">
                      8+ characters. At least one number (0-9).
                    </p>
                  </div>
                  <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                    <Input
                      type="password"
                      {...methods.register('confirmPassword')}
                      placeholder="Confirm Password"
                    />
                    <p className="mt-6 pl-25 text-12 md:mt-10 md:pl-35">
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
                <Button className="w-full md:w-auto" href="#">
                  Register Now
                </Button>
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
