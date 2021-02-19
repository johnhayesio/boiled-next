module.exports = {
  // Run eslint on changes to JavaScript files
  '**/*.js?(x)': filenames => `yarn lint ${filenames.join(' ')}`,
  // Run prettier on changes to JavaScript files
  '**/*.js?(x)': ['yarn format'],
}
