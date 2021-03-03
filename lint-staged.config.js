module.exports = {
  // Run check-types on changes to TypeScript files
  '**/*.ts?(x)': () => 'yarn check-types',
  // Run eslint and prettier on changes to JavaScript files
  '**/*.(ts|js)?(x)': [filenames => `yarn lint ${filenames.join(' ')}`, 'yarn format'],
}
