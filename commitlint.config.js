/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*\w*): (.*)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 200],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 200],
    'header-max-length': [2, 'always', 200],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'upper-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '🔨 BUILD',
        '📖 DOCS',
        '📦 NEW',
        '🐛 FIX',
        '👌 IMPROVE',
        '🤖️ TEST',
        '🚀 RELEASE',
        '🚧 BREAKING',
        '⏪ REVERT',
      ],
    ],
  },
  prompt: {
    useAI: true,
    aiType: 'openAI-Davinci',
    aiNumber: 5,
    skipQuestions: ['scope', 'body', 'footer', 'footerPrefix'],
    types: [
      {
        value: '🔨 BUILD',
        name: '🔨 BUILD:      Changes that affect the build system or external dependencies',
      },
      { value: '📦 NEW', name: '📦 NEW:        A new feature' },
      { value: '🐛 FIX', name: '🐛 FIX:        A bug fix' },
      {
        value: '👌 IMPROVE',
        name: '👌 IMPROVE:    A code change that neither fixes a bug nor adds a feature',
      },
      { value: '⏪ REVERT', name: '⏪ REVERT:     Reverts a previous commit' },
      {
        value: '🤖️ TEST',
        name: '🤖️ TEST:       Adding missing tests or correcting existing tests',
      },
      {
        value: '🚀 RELEASE',
        name: '🚀 RELEASE:    A major version release indicating significant enhancements or changes',
      },
      {
        value: '🚧 BREAKING',
        name: '🚧 BREAKING:   A change that causes existing functionalities to not work as expected',
      },
      { value: '📖 DOCS', name: '📖 DOCS:       Documentation only changes' },
    ],
  },
}
