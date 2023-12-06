'use client'

import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/helpers/cn'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import Button from '../ui/button'
import Input from '../ui/input'
import Select from '../ui/select'

const accountForm = z
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

type AccountFormType = z.infer<typeof accountForm>

export default function AccountForm() {
  const [currPage, currPageSet] = useState('personal')
  const methods = useForm<AccountFormType>({
    resolver: zodResolver(accountForm),
  })

  async function onSubmit(data: AccountFormType) {
    console.log(data)
  }

  const [ethnicBg, ethnicBgSet] = useState('Ethnic Background')
  const [disabilities, disabilitiesSet] = useState('Disabilities')
  const [prefUni, prefUniSet] = useState('Preferred University')

  return (
    <div className="relative overflow-hidden border-b border-gray-400/40 bg-gray-100 py-50 md:py-60 lg:py-80 xl:pb-120">
      <div className="c-container">
        <div className="-mx-15 flex flex-wrap lg:-mx-30 xl:-mx-50 2xl:-mx-60">
          <div className="mb-40 w-full px-15 md:w-1/3 lg:px-30 xl:px-50 2xl:px-60">
            <div className="rounded-10 bg-white">
              <button
                className={cn(
                  'block w-full appearance-none rounded-10 px-25 py-16 text-left text-16 leading-none transition-all lg:px-35 lg:py-23 lg:text-18 xl:text-20',
                  currPage === 'personal'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-400/80 hover:bg-primary-600/10'
                )}
                onClick={() => currPageSet('personal')}
              >
                Personal Details
              </button>
              <button
                className={cn(
                  'block w-full appearance-none rounded-10 px-25 py-16 text-left text-16 leading-none transition-all lg:px-35 lg:py-23 lg:text-18 xl:text-20',
                  currPage === 'profile'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-400/80 hover:bg-primary-600/10'
                )}
                onClick={() => currPageSet('profile')}
              >
                Applicant Profile
              </button>
              <button
                className={cn(
                  'block w-full appearance-none rounded-10 px-25 py-16 text-left text-16 leading-none transition-all lg:px-35 lg:py-23 lg:text-18 xl:text-20',
                  currPage === 'courses'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-400/80 hover:bg-primary-600/10'
                )}
                onClick={() => currPageSet('courses')}
              >
                Courses
              </button>
              <button
                className={cn(
                  'block w-full appearance-none rounded-10 px-25 py-16 text-left text-16 leading-none transition-all lg:px-35 lg:py-23 lg:text-18 xl:text-20',
                  currPage === 'results'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-secondary-400/80 hover:bg-primary-600/10'
                )}
                onClick={() => currPageSet('results')}
              >
                Results
              </button>
            </div>

            {currPage === 'results' ? (
              <div className="mt-45">
                <div className="mt-45 px-20 text-18 font-bold leading-tight lg:text-20">
                  Overall Score
                </div>
                <div className="mt-24 flex px-10">
                  <div className="w-1/2 px-10 text-15 font-bold">Subtest</div>
                  <div className="w-1/2 px-10 text-15 font-bold">Score</div>
                </div>
                <div className="mt-20 rounded-10 bg-white p-10">
                  <div className="flex rounded-10 border border-transparent py-10 transition-all hover:border-secondary-400/10 hover:shadow-image">
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      Verbal
                      <br />
                      Reasoning
                    </div>
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      650
                    </div>
                  </div>
                  <div className="flex rounded-10 border border-transparent py-10 transition-all hover:border-secondary-400/10 hover:shadow-image">
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      Decision
                      <br />
                      Making
                    </div>
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      700-950
                    </div>
                  </div>
                  <div className="flex rounded-10 border border-transparent py-10 transition-all hover:border-secondary-400/10 hover:shadow-image">
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      Quantitative
                      <br />
                      Reasoning
                    </div>
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      700-950
                    </div>
                  </div>
                  <div className="flex rounded-10 border border-transparent py-10 transition-all hover:border-secondary-400/10 hover:shadow-image">
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      Abstract
                      <br />
                      Reasoning
                    </div>
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      650
                    </div>
                  </div>
                  <div className="flex rounded-10 border border-transparent py-10 transition-all hover:border-secondary-400/10 hover:shadow-image">
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      Situational
                      <br />
                      Judgement
                    </div>
                    <div className="w-1/2 px-10 text-15 leading-tight text-secondary-400/60">
                      Band 1
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <div className="mt-45 px-20 text-18 font-bold leading-tight lg:text-20">
                    Tutor Feedback
                  </div>
                  <div className="mt-20 rounded-10 bg-white p-20 text-15 leading-tight text-secondary-400/60 [&>p:last-child]:mb-0 [&>p]:mb-10">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p>
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="w-full px-15 md:w-2/3 lg:px-30 xl:px-50 2xl:px-60">
            {currPage === 'personal' ? (
              <>
                <h2 className="text-20 font-bold leading-tight md:text-22 lg:text-26 xl:text-30">
                  Personal Details
                </h2>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="mt-30 max-w-[890px]">
                      <div className="-mx-8 flex flex-wrap">
                        <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            Forename
                          </div>
                          <Input
                            type="text"
                            {...methods.register('forename')}
                            placeholder="Forename"
                          />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            Surname
                          </div>
                          <Input
                            type="text"
                            {...methods.register('surname')}
                            placeholder="Surname"
                          />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-24">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            DOB
                          </div>
                          <Input type="text" {...methods.register('dob')} placeholder="DOB" />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            Address
                          </div>
                          <Input
                            type="text"
                            {...methods.register('address')}
                            placeholder="Address"
                          />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            House Number
                          </div>
                          <Input
                            type="text"
                            {...methods.register('houseNumber')}
                            placeholder="House Number"
                          />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            City
                          </div>
                          <Input type="text" {...methods.register('city')} placeholder="City" />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            Postcode
                          </div>
                          <Input
                            type="text"
                            {...methods.register('postcode')}
                            placeholder="Postcode"
                          />
                        </div>
                      </div>
                      <div className="pt-3 text-right">
                        <Button className="w-full min-w-200 md:w-auto lg:min-w-240">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </form>
                </FormProvider>
                <div className="mt-25 h-1 bg-[#D9D9D9]"></div>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="-mx-8 mt-30 flex flex-wrap">
                      <div className="mb-30 w-full px-8 lg:w-1/2">
                        <div className="text-20 font-bold">Email Address</div>
                        <div className="prose mt-20 max-w-300 prose-ul:pl-15 prose-li:text-15 prose-li:last-of-type:mb-0 [&>*]:last-of-type:mb-0">
                          <p>You use this email address to:</p>
                          <ul>
                            <li>Log in</li>
                            <li>Recover from and reset a forgotten password</li>
                            <li>Be contacted about your account and courses</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mb-30 w-full px-8 lg:flex lg:w-1/2 lg:flex-col">
                        <Input type="email" {...methods.register('email')} placeholder="Email" />
                        <div className="pt-3 text-right lg:mt-auto lg:pb-8">
                          <Button className="mt-30 w-full min-w-200 md:w-auto lg:min-w-240">
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </FormProvider>
                <div className="mt-15 h-1 bg-[#D9D9D9]"></div>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="-mx-8 mt-30 flex flex-wrap">
                      <div className="mb-30 w-full px-8 lg:mb-0 lg:w-1/2">
                        <div className="text-20 font-bold">Password</div>
                        <div className="prose mt-20 max-w-280 prose-ul:pl-15 prose-li:text-15 prose-li:last-of-type:mb-0 [&>*]:last-of-type:mb-0">
                          <p>
                            8+ characters, one or more numbers (0-9), case-sensitive. e.g. "Bridge 2
                            golden".
                          </p>
                          <p>Please don't re-use a password from elsewhere.</p>
                        </div>
                      </div>
                      <div className="mb-30 w-full px-8 lg:mb-0 lg:flex lg:w-1/2 lg:flex-col">
                        <div className="mb-10 w-full px-8 md:mb-15">
                          <Input
                            type="password"
                            {...methods.register('currentPassword')}
                            placeholder="Current Password"
                          />
                        </div>
                        <div className="px-25 pb-20 text-14">
                          Please enter your current password to confirm your changes.
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-15">
                          <Input
                            type="password"
                            {...methods.register('password')}
                            placeholder="Password"
                          />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-15">
                          <Input
                            type="password"
                            {...methods.register('confirmPassword')}
                            placeholder="Confirm Password"
                          />
                        </div>
                        <div className="pt-3 text-right lg:mt-auto lg:pb-8">
                          <Button className="w-full min-w-200 md:w-auto lg:min-w-240">
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </FormProvider>
              </>
            ) : null}
            {currPage === 'profile' ? (
              <>
                <h2 className="text-20 font-bold leading-tight md:text-22 lg:text-26 xl:text-30">
                  Applicant Profile
                </h2>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="mt-30 max-w-[890px]">
                      <div className="-mx-8 flex flex-wrap">
                        <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            Ethnic Background
                          </div>
                          <Select
                            options={['Ethnic Background', 'Option 1', 'Option 2', 'Option 3']}
                            value={ethnicBg}
                            onValueChange={(value) => ethnicBgSet(value)}
                            isAlt={true}
                          />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-24 md:w-1/2">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            Disabilities
                          </div>
                          <Select
                            options={['Disabilities', 'Option 1', 'Option 2', 'Option 3']}
                            value={disabilities}
                            onValueChange={(value) => disabilitiesSet(value)}
                            isAlt={true}
                          />
                        </div>
                        <div className="mb-10 w-full px-8 md:mb-29">
                          <div className="mb-10 pl-25 text-16 leading-normal lg:text-18 xl:text-20">
                            Preferred University
                          </div>
                          <Select
                            options={['Preferred University', 'Option 1', 'Option 2', 'Option 3']}
                            value={prefUni}
                            onValueChange={(value) => prefUniSet(value)}
                            isAlt={true}
                          />
                        </div>
                      </div>
                      <div className="pt-3 text-right">
                        <Button className="w-full min-w-200 md:w-auto lg:min-w-240">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </form>
                </FormProvider>
              </>
            ) : null}
            {currPage === 'courses' ? (
              <>
                <h2 className="text-20 font-bold leading-tight md:text-22 lg:text-26 xl:text-30">
                  Courses
                </h2>
                <div className="mt-20">
                  <Link
                    href="/"
                    className="group mb-10 flex w-full items-center rounded-10 border border-white bg-white px-20 py-17 text-18 transition-all hover:border-primary-600/40 hover:shadow-image lg:text-20 xl:px-25"
                  >
                    <span className="grow font-bold">MSRA</span>
                    <span className="w-1/3 text-primary-600">More Info</span>
                  </Link>
                  <Link
                    href="/"
                    className="group mb-10 flex w-full items-center rounded-10 border border-white bg-white px-20 py-17 text-18 transition-all hover:border-secondary-400/40 hover:shadow-image lg:text-20 xl:px-25"
                  >
                    <span className="grow">MSRA</span>
                    <span className="w-1/3 text-secondary-400/80">View Subscription</span>
                  </Link>
                  <Link
                    href="/"
                    className="group mb-10 flex w-full items-center rounded-10 border border-white bg-white px-20 py-17 text-18 transition-all hover:border-secondary-400/40 hover:shadow-image lg:text-20 xl:px-25"
                  >
                    <span className="grow">MSRA</span>
                    <span className="w-1/3 text-secondary-400/80">View Subscription</span>
                  </Link>
                  <Link
                    href="/"
                    className="group mb-10 flex w-full items-center rounded-10 border border-white bg-white px-20 py-17 text-18 transition-all hover:border-secondary-400/40 hover:shadow-image lg:text-20 xl:px-25"
                  >
                    <span className="grow">MSRA</span>
                    <span className="w-1/3 text-secondary-400/80">View Subscription</span>
                  </Link>
                </div>
              </>
            ) : null}
            {currPage === 'results' ? (
              <>
                <h2 className="text-20 font-bold leading-tight md:text-22 lg:text-26 xl:text-30">
                  Mock Results
                </h2>

                <div className="mt-30">
                  <div className="group -mx-20 rounded-10 border border-transparent p-20 transition-all hover:border-secondary-400/20 hover:bg-white hover:shadow-image">
                    <div className="text-16 font-bold leading-tight lg:text-18 xl:text-20">
                      Verbal Reasoning Questions
                    </div>
                    <div className="mt-15 flex h-6">
                      <div
                        className="h-6 bg-[#19ce61]"
                        style={{ width: `${Math.round((28 / 44) * 100)}%` }}
                      ></div>
                      <div
                        className="h-6 bg-[#ce1919]"
                        style={{
                          width: `${100 - Math.round((28 / 44) * 100)}%`,
                        }}
                      ></div>
                    </div>

                    <div className="mt-30 flex flex-wrap">
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Questions</div>
                        <div className="rounded-l-10 bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          44 questions
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Correct</div>
                        <div className="bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          28 incorrect
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Incorrect</div>
                        <div className="rounded-r-10 bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          14 incorrect
                        </div>
                      </div>
                    </div>

                    <div className="mt-13 flex rounded-10 bg-white px-20 pb-8 pt-12 transition-all group-hover:bg-gray-100/40">
                      <div className="w-1/5 pr-30 text-15 font-bold leading-tight">
                        Verbal Resoning
                      </div>
                      <div className="w-4/5">
                        <div className="-mx-2 flex flex-wrap">
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              56s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              56s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <div className="group -mx-20 rounded-10 border border-transparent p-20 transition-all hover:border-secondary-400/20 hover:bg-white hover:shadow-image">
                    <div className="text-16 font-bold leading-tight lg:text-18 xl:text-20">
                      Verbal Reasoning Questions
                    </div>
                    <div className="mt-15 flex h-6">
                      <div
                        className="h-6 bg-[#19ce61]"
                        style={{ width: `${Math.round((28 / 44) * 100)}%` }}
                      ></div>
                      <div
                        className="h-6 bg-[#ce1919]"
                        style={{
                          width: `${100 - Math.round((28 / 44) * 100)}%`,
                        }}
                      ></div>
                    </div>

                    <div className="mt-30 flex flex-wrap">
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Questions</div>
                        <div className="rounded-l-10 bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          44 questions
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Correct</div>
                        <div className="bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          28 incorrect
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Incorrect</div>
                        <div className="rounded-r-10 bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          14 incorrect
                        </div>
                      </div>
                    </div>

                    <div className="mt-13 flex rounded-10 bg-white px-20 pb-8 pt-12 transition-all group-hover:bg-gray-100/40">
                      <div className="w-1/5 pr-30 text-15 font-bold leading-tight">
                        Verbal Resoning
                      </div>
                      <div className="w-4/5">
                        <div className="-mx-2 flex flex-wrap">
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              56s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              56s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <div className="group -mx-20 rounded-10 border border-transparent p-20 transition-all hover:border-secondary-400/20 hover:bg-white hover:shadow-image">
                    <div className="text-16 font-bold leading-tight lg:text-18 xl:text-20">
                      Verbal Reasoning Questions
                    </div>
                    <div className="mt-15 flex h-6">
                      <div
                        className="h-6 bg-[#19ce61]"
                        style={{ width: `${Math.round((28 / 44) * 100)}%` }}
                      ></div>
                      <div
                        className="h-6 bg-[#ce1919]"
                        style={{
                          width: `${100 - Math.round((28 / 44) * 100)}%`,
                        }}
                      ></div>
                    </div>

                    <div className="mt-30 flex flex-wrap">
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Questions</div>
                        <div className="rounded-l-10 bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          44 questions
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Correct</div>
                        <div className="bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          28 incorrect
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div className="px-20 pb-15 text-15 font-bold">Incorrect</div>
                        <div className="rounded-r-10 bg-white px-25 py-18 text-15 text-secondary-400/60 transition-all group-hover:bg-gray-100/40">
                          14 incorrect
                        </div>
                      </div>
                    </div>

                    <div className="mt-13 flex rounded-10 bg-white px-20 pb-8 pt-12 transition-all group-hover:bg-gray-100/40">
                      <div className="w-1/5 pr-30 text-15 font-bold leading-tight">
                        Verbal Resoning
                      </div>
                      <div className="w-4/5">
                        <div className="-mx-2 flex flex-wrap">
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              56s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              56s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              42s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              62s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              50s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              27s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              34s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#ff8080] px-5 text-10 leading-none text-[#333333]">
                              19s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              48s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              45s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#8ce7b0] px-5 text-10 leading-none text-[#333333]">
                              36s
                            </div>
                          </div>
                          <div className="mb-4 px-2">
                            <div className="flex h-23 min-w-29 items-center rounded-5 bg-[#f8b84e] px-5 text-10 leading-none text-[#333333]">
                              31s
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
