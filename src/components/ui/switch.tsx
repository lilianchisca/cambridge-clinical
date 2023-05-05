'use client'

import * as SwitchPrimitives from '@radix-ui/react-switch'
import { forwardRef } from 'react'

import { cn } from '@/helpers/cn'

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-[44px] w-[92px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-100 data-[state=unchecked]:bg-gray-100',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-37 w-37 rounded-full bg-primary-400 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-47 data-[state=unchecked]:translate-x-4 data-[state=checked]:bg-primary-400 data-[state=unchecked]:bg-gray-400/40'
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export default Switch
