module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks'
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-floating-promises': 0,
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/consistent-type-assertions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/display-name': 0,
    '@typescript-eslint/prefer-includes': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-misused-promises': [2, {
      "checksVoidReturn": {
        "attributes": false
      }
    }]
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ],
  ignorePatterns: ['scripts', '.eslintrc.js']
}
