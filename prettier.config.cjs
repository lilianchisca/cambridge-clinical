/** @type {import('prettier').Config} */
const config = {
  endOfLine: 'lf',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: false,
  printWidth: 100,
  plugins: ['prettier-plugin-tailwindcss'],
}

module.exports = config
