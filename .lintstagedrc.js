module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint', 'prettier --write'],
  '**/*.ts?(x)': () => 'yarn tsc --pretty --noEmit',
  '**/*.{json,css,md,webmanifest}': ['prettier --write'],
}
