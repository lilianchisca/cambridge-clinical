// 🏗 BUILD: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// 📖 DOCS: Documentation only changes
// 📦 FEATURE: A new feature
// 🐛 FIX: A bug fix
// ⚡️ PERFORMANCE: A code change that improves performance
// 🚧 REFACTOR: A code change that neither fixes a bug nor adds a feature
// 💄 STYLES: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// 🤖️ TEST: Adding missing tests or correcting existing tests
// 🚀 RELEASE: Use when you release a new version
// ‼️ BREAKING: Use when releasing a change that breaks previous versions

module.exports = {
  extends: [`@commitlint/config-conventional`],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*\w*): (.*)$/,
      headerCorrespondence: [`type`, `subject`],
    },
  },
  rules: {
    'body-leading-blank': [1, `always`],
    'body-max-line-length': [2, `always`, 100],
    'footer-leading-blank': [1, `always`],
    'footer-max-line-length': [2, `always`, 100],
    'header-max-length': [2, `always`, 100],
    'scope-case': [2, `always`, `lower-case`],
    'subject-case': [2, `never`, [`sentence-case`, `start-case`, `pascal-case`, `upper-case`]],
    'subject-empty': [2, `never`],
    'subject-full-stop': [2, `never`, `.`],
    'type-case': [2, `always`, `upper-case`],
    'type-empty': [2, `never`],
    'type-enum': [
      2,
      `always`,
      [
        `🏗 BUILD`,
        `📖 DOCS`,
        `📦 FEATURE`,
        `🐛 FIX`,
        `⚡️ PERFORMANCE`,
        `🚧 REFACTOR`,
        `💄 STYLES`,
        `🤖️ TEST`,
        `🚀 RELEASE`,
        `‼️ BREAKING`,
      ],
    ],
  },
}
