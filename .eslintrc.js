module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12, // Enable features such as async/await
    sourceType: 'module', // Enable import/export
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  ignorePatterns: ['node_modules/*', '.gitignore', '.next/*', '.out/*', '!.prettierrc.js'], // Do not lint generated files, gitignore, nor node_modules, but lint .prettierrc.js (ignored by default by eslint)
  settings: {
    react: {
      version: 'detect', // Auto-detect React version
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React import is not needed when using Next.js
    'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
  },
}
