import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, X } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'

import Input from '@/components/ui/input'

const loginForm = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(3).max(50),
})

type LoginFormType = z.infer<typeof loginForm>

type LoginFormProps = {
  showLoginSet: (showLogin: boolean) => void
}

export default function LoginForm({ showLoginSet }: LoginFormProps) {
  const [showPassword, showPasswordSet] = useState(false)
  const methods = useForm<LoginFormType>({
    resolver: zodResolver(loginForm),
  })
  const router = useRouter()

  async function onSubmit(data: LoginFormType) {
    console.log(data)
  }

  function navigateAndClose(url: string) {
    showLoginSet(false)
    router.push(url)
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-center">
      <button
        onClick={() => showLoginSet(false)}
        aria-label="Hide Login Form"
        className="absolute inset-0"
      ></button>
      <div className="absolute inset-0 flex w-full max-w-[710px] flex-col justify-center bg-gray-100 px-30 py-50 md:relative md:inset-auto md:rounded-15">
        <button
          className="absolute right-15 top-15 flex h-50 w-50 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-all hover:ring-4 hover:ring-primary-200/50"
          aria-label="Hide Login Form"
          onClick={() => showLoginSet(false)}
        >
          <span>
            <X size={24} />
          </span>
        </button>
        <h2 className="h2 text-secondary-400">Login</h2>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="mx-auto mt-40 max-w-[470px] md:mt-50 lg:mt-60 xl:mt-70">
              <div className="mb-20">
                <Input
                  type="text"
                  {...methods.register('username')}
                  placeholder="Username or email"
                />
              </div>
              <div className="relative mb-20">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  {...methods.register('password')}
                  placeholder="Password"
                />
                <span
                  onClick={() => showPasswordSet(!showPassword)}
                  aria-label="Show Password"
                  tabIndex={-1}
                  role="button"
                  onKeyDown={(e) => e.key === 'Enter' && showPasswordSet(!showPassword)}
                  className="absolute right-20 top-1/2 -translate-y-1/2 text-primary-600 transition-all hover:opacity-70"
                >
                  <span>
                    <Eye size={34} />
                  </span>
                </span>
              </div>
              <button
                type="submit"
                className='group relative inline-flex w-full overflow-hidden rounded-full bg-primary-300 px-25 py-12 text-center text-20 font-bold uppercase text-white shadow-md after:absolute after:inset-0 after:translate-y-full after:rounded-full after:bg-primary-600/30 after:transition-all after:content-[""] hover:after:translate-y-0 lg:py-15 lg:text-22 xl:text-24'
              >
                <span className="relative z-10 block w-full">Login</span>
              </button>
            </div>
          </form>
        </FormProvider>
        <div className="mt-15 text-18 font-bold text-primary-600 lg:text-20">
          Don't have an account yet?{' '}
          <button
            onClick={() => navigateAndClose('/register')}
            className="c-linkline c-linkline--alt"
          >
            Register now.
          </button>
        </div>
        <div className="mt-50 text-18 text-primary-600 lg:text-20">
          <button onClick={() => navigateAndClose('/forgotten-password')}>
            Forgotten password?
          </button>
        </div>
      </div>
    </div>
  )
}
