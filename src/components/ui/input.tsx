import { forwardRef } from 'react'

import { cn } from '@/helpers/cn'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'block w-full rounded-full border-0 bg-white px-25 py-13 text-16 font-normal text-secondary-400 placeholder-secondary-400/80 shadow-none transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-17 lg:text-18 xl:text-19 2xl:text-20',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export default Input
