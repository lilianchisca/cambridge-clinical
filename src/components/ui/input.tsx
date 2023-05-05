import { forwardRef } from 'react'

import { cn } from '@/helpers/cn'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'block w-full rounded-full border-0 bg-white px-25 py-15 text-16 font-bold text-secondary-400 placeholder-secondary-400/80 shadow-none transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-18 lg:px-30 lg:py-20 lg:text-20 xl:px-35 xl:py-22 xl:text-22 2xl:text-23',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export default Input
