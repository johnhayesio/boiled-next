module.exports = {
  // Run eslint and prettier on changes to JavaScript files
  '**/*.js?(x)': [filenames => `yarn lint ${filenames.join(' ')}`, 'yarn format'],
}
