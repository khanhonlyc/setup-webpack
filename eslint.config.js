// eslint.config.js (hoặc eslint.config.mjs nếu dùng ES module)
const reactPlugin = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const importPlugin = require('eslint-plugin-import')
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y')
const typescriptPlugin = require('@typescript-eslint/eslint-plugin')
const prettier = require('eslint-config-prettier')
const typescriptParser = require('@typescript-eslint/parser')

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**'], // Thay thế .eslintignore
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin, // Plugin react
      'react-hooks': reactHooksPlugin, // Plugin react-hooks
      import: importPlugin, // Plugin import
      'jsx-a11y': jsxA11yPlugin, // Plugin jsx-a11y
      '@typescript-eslint': typescriptPlugin, // Plugin typescript-eslint
    },
    rules: {
    //   '@typescript-eslint/no-var-requires': 'error',
    //   'no-unused-vars': 'warn',
    //   quotes: ['error', 'single'],
    //   'jsx-quotes': ['error', 'prefer-single'],
    //   'react/react-in-jsx-scope': 'off',
    //   'react/prop-types': 'off',
    //   semi: ['error', 'never'],
      // Các quy tắc khác của bạn...
      'no-console': 1,
    },
  },
  prettier, // eslint-config-prettier
]
