import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

import { cn } from '@/helpers/cn'
import { ArrowRight } from 'lucide-react'

export type ButtonProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithRef<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...rest }, ref) => {
    const btnClasses = cn(
      'group relative inline-flex overflow-hidden rounded-full bg-primary-300 py-10 pl-25 pr-70 text-18 font-bold text-white shadow-md after:absolute after:inset-0 after:-translate-x-full after:rounded-full after:bg-primary-600/30 after:transition-all after:content-[""] hover:after:translate-x-0 md:text-20 lg:text-22 xl:text-24',
      className
    )

    const Arrow = () => (
      <span className="absolute right-7 top-1/2 z-10 h-38 w-38 -translate-y-1/2 overflow-hidden rounded-full bg-white text-primary-600 md:h-40 md:w-40 lg:h-42 lg:w-42 xl:h-44 xl:w-44">
        <span className="absolute inset-0 flex items-center justify-center transition-all group-hover:translate-x-full">
          <span>
            <ArrowRight size={20} />
          </span>
        </span>
        <span className="absolute inset-0 flex -translate-x-full items-center justify-center transition-all group-hover:translate-x-0">
          <span>
            <ArrowRight size={20} />
          </span>
        </span>
      </span>
    )

    return (
      <button ref={ref} {...rest} className={btnClasses}>
        <span className="relative z-10">{children}</span>
        <Arrow />
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
