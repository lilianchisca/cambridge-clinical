'use client'

import { cn } from '@/helpers/cn'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ArrowDown } from 'lucide-react'

type SelectProps = {
  options: string[]
  value: string
  btnClasses?: string
  onValueChange: (value: string) => void
  isAlt?: boolean
}

const Select = ({ options, value, btnClasses, onValueChange, isAlt = false }: SelectProps) => {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger asChild aria-label="Food">
        <button
          className={cn(
            'relative inline-flex min-w-[240px] rounded-full bg-white pl-25 pr-90 transition-all hover:ring-4 hover:ring-primary-300/50 focus:outline-none focus:ring-4 focus:ring-primary-300/50',
            isAlt
              ? 'w-full py-10 text-16 text-secondary-400/80 md:text-17 lg:text-18 xl:text-19 2xl:text-20'
              : 'py-16 text-16 text-gray-400',
            btnClasses
          )}
        >
          <SelectPrimitive.Value />
          <span
            className={cn(
              'absolute right-7 top-1/2 z-10 h-38 w-38 -translate-y-1/2 overflow-hidden rounded-full bg-primary-100 text-primary-600',
              isAlt ? '' : 'md:h-40 md:w-40 lg:h-42 lg:w-42 xl:h-44 xl:w-44'
            )}
          >
            <span className="absolute inset-0 flex items-center justify-center transition-all group-hover:translate-x-full">
              <span>
                <ArrowDown size={20} />
              </span>
            </span>
            <span className="absolute inset-0 flex -translate-x-full items-center justify-center transition-all group-hover:translate-x-0">
              <span>
                <ArrowDown size={20} />
              </span>
            </span>
          </span>
        </button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content className="relative z-20">
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-400">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="rounded-30 bg-white p-8 shadow-lg">
          <SelectPrimitive.Group>
            {options.map((f, i) => (
              <SelectPrimitive.Item
                key={`${f}-${i}`}
                value={f}
                className={cn(
                  'relative flex items-center rounded-full px-32 focus:bg-primary-100/50',
                  'radix-disabled:opacity-50',
                  'select-none focus:outline-none',
                  isAlt
                    ? 'py-10 text-16 text-secondary-400/80 md:text-17 lg:text-18 xl:text-19 2xl:text-20'
                    : 'py-16 text-16 font-medium text-gray-400'
                )}
              >
                <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute left-8 inline-flex items-center">
                  <CheckIcon />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-400">
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  )
}

export default Select
