import { ClassValue, clsx } from 'clsx'
import { createTailwindMerge, getDefaultConfig, validators } from 'tailwind-merge'

const { isTshirtSize, isArbitraryLength, isArbitraryValue } = validators

const twMerge = createTailwindMerge(() => {
  const config = getDefaultConfig()

  const customFontSizes = Array.from(Array(200).keys()).map((i) => `${i + 1}`)
  const customBorderRadiuses = Array.from(Array(60).keys()).map((i) => `${i + 1}`)

  const borderRadius = [
    'none',
    '',
    'full',
    ...customBorderRadiuses,
    isTshirtSize,
    isArbitraryLength,
  ]

  return {
    ...config,
    classGroups: {
      ...config.classGroups,
      'font-size': [
        {
          text: ['base', ...customFontSizes, isTshirtSize, isArbitraryLength],
        },
      ],
      animate: [
        {
          animate: [
            'none',
            'spin',
            'spin-reverse',
            'ping',
            'pulse',
            'bounce',
            'scale-in',
            'slide-down',
            'slide-up',
            'slide-up-fade',
            'slide-right-fade',
            'slide-down-fade',
            'slide-left-fade',
            'enter-from-right',
            'enter-from-left',
            'exit-to-right',
            'exit-to-left',
            'scale-in-content',
            'scale-out-content',
            'fade-in',
            'fade-out',
            'toast-hide',
            'toast-slide-in-right',
            'toast-slide-in-bottom',
            'toast-swipe-out',
            'in',
            'out',
            isArbitraryValue,
          ],
        },
      ],
      rounded: [
        { rounded: ['none', '', 'full', ...customBorderRadiuses, isTshirtSize, isArbitraryLength] },
      ],
      'rounded-s': [
        {
          'rounded-s': borderRadius,
        },
      ],
      'rounded-e': [
        {
          'rounded-e': borderRadius,
        },
      ],
      'rounded-t': [
        {
          'rounded-t': borderRadius,
        },
      ],
      'rounded-r': [
        {
          'rounded-r': borderRadius,
        },
      ],
      'rounded-b': [
        {
          'rounded-b': borderRadius,
        },
      ],
      'rounded-l': [
        {
          'rounded-l': borderRadius,
        },
      ],
      'rounded-ss': [
        {
          'rounded-ss': borderRadius,
        },
      ],
      'rounded-se': [
        {
          'rounded-se': borderRadius,
        },
      ],
      'rounded-ee': [
        {
          'rounded-ee': borderRadius,
        },
      ],
      'rounded-es': [
        {
          'rounded-es': borderRadius,
        },
      ],
      'rounded-tl': [
        {
          'rounded-tl': borderRadius,
        },
      ],
      'rounded-tr': [
        {
          'rounded-tr': borderRadius,
        },
      ],
      'rounded-br': [
        {
          'rounded-br': borderRadius,
        },
      ],
      'rounded-bl': [
        {
          'rounded-bl': borderRadius,
        },
      ],
    },
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
