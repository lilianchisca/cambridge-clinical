import defaultTheme from 'tailwindcss/defaultTheme'

const fontFamilyConfig = {
  body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ],
}

export default fontFamilyConfig
