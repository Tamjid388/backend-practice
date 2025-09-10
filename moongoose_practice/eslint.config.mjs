import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended'],

    languageOptions: { globals: globals.browser },
    rules: {
      // force double quotes
      'no-unused-vars': 'warn',
      'prettier/prettier': 'error',
    },
  },

  tseslint.configs.recommended,
  {
    ignores: ['node_modules/*', 'dist/*'], // add more if needed
  },
])
