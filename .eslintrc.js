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
    'plugin:prettier/recommended', // Prettier rules
  ],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: {
          version: 'detect', // Auto-detect React version
        },
      },
      env: {
        browser: true,
        node: true,
        es2021: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:prettier/recommended', // Prettier rules
      ],
      rules: {
        'react/prop-types': 'off', // We will use TypeScript's types for component props instead
        'react/react-in-jsx-scope': 'off', // React import is not needed when using Next.js
        'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Include .prettierrc.js rules
        '@typescript-eslint/no-unused-vars': ['error'], // We don't want unused vars
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ], // Require return types on functions only when useful
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React import is not needed when using Next.js
    'jsx-a11y/anchor-is-valid': 'off', // This rule is not compatible with Next.js's <Link /> components
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Include .prettierrc.js rules
  },
}
