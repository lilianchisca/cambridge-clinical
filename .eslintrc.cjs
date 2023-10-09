/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    ...(process.env.PRETTIER === 'false' ? [] : ['tailwindcss', 'prettier']),
  ],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    // TODO: enable this eventually
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ...(process.env.PRETTIER === 'false'
      ? ['prettier']
      : ['plugin:tailwindcss/recommended', 'plugin:prettier/recommended']),
  ],
  settings: {
    tailwindcss: {
      config: './tailwind-config.js',
    },
  },
  rules: {
    ...(process.env.PRETTIER === 'false'
      ? {}
      : {
          'prettier/prettier': [
            'warn',
            {},
            {
              usePrettierrc: true,
            },
          ],
          'tailwindcss/classnames-order': [
            'warn',
            {
              callees: ['classnames', 'cn', 'cva', 'clsx'],
            },
          ],
          'tailwindcss/no-custom-classname': 'off',
        }),
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['tailwind-config.js', '**/*.d.ts', 'codegen.ts'],
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        modifiers: ['unused'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
    ],
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
    'react/no-unescaped-entities': 'off',
  },
}

module.exports = config
