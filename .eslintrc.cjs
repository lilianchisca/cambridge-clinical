/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      config: './tailwind-config.js',
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:tailwindcss/recommended',
        'airbnb-base',
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'next',
        'prettier',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
      ],
      plugins: [
        '@typescript-eslint',
        'simple-import-sort',
        'unused-imports',
        'prettier',
        'tailwindcss',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'jsx-a11y/label-has-associated-control': 'off',
        'no-bitwise': 'off',
        'no-nested-ternary': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'sonarjs/prefer-immediate-return': 'off',
        'security/detect-object-injection': 'off',
        'security/detect-non-literal-regexp': 'off',
        // prettier
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'prettier/prettier': [
          'warn',
          {},
          {
            usePrettierrc: true,
          },
        ],

        quotes: ['error', 'single', { avoidEscape: false, allowTemplateLiterals: true }],

        'tailwindcss/classnames-order': [
          'warn',
          {
            callees: ['classnames', 'cn', 'cva', 'clsx'],
          },
        ], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
        'tailwindcss/no-custom-classname': 'off',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@next/next/no-img-element': 'off',

        'no-unused-vars': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/no-unescaped-entities': 'off',

        'react/display-name': 'off',
        'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

        // #region  //*=========== Unused Import ===========
        '@typescript-eslint/no-unused-vars': 'off',
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
        // #endregion  //*======== Unused Import ===========

        // #region  //*=========== Import Sort ===========
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              ['server-only', 'client-only'],
              // ext library & side effect imports
              ['^@?\\w', '^\\u0000'],
              // {s}css files
              ['^.+\\.s?css$'],
              // Lib and hooks
              ['^@/lib', '^@/hooks', '^@/models', '^@/helpers'],
              // static data
              ['^@/data', '^@/constants'],
              // types
              ['^@/types'],
              // templates
              ['^@/templates'],
              // sections
              ['^@/sections'],
              // components
              ['^@/components', '^@/container'],
              // zustand store
              ['^@/store'],
              // Other imports
              ['^@/'],
              // relative paths up until 3 level
              [
                '^\\./?$',
                '^\\.(?!/?$)',
                '^\\.\\./?$',
                '^\\.\\.(?!/?$)',
                '^\\.\\./\\.\\./?$',
                '^\\.\\./\\.\\.(?!/?$)',
                '^\\.\\./\\.\\./\\.\\./?$',
                '^\\.\\./\\.\\./\\.\\.(?!/?$)',
              ],
              // other that didnt fit in
              ['^'],
            ],
          },
        ],
        // #endregion  //*======== Import Sort ===========

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
      },
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
}

module.exports = config
