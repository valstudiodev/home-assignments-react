// import js from '@eslint/js'
// import globals from 'globals'
// import tseslint from 'typescript-eslint'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'

// export default [
//   {
//     ignores: ['dist'],
//   },

//   js.configs.recommended,

//   ...tseslint.configs.recommended,

//   {
//     files: ['**/*.{ts,tsx}'],

//     languageOptions: {
//       ecmaVersion: 'latest',
//       globals: globals.browser,
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//         sourceType: 'module',
//       },
//     },

//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },

//     rules: {
//       ...reactHooks.configs.recommended.rules,

//       '@typescript-eslint/no-unused-vars': [
//         'error',
//         {
//           varsIgnorePattern: '^[A-Z_]',
//         },
//       ],

//       'react-refresh/only-export-components': [
//         'warn',
//         {
//           allowConstantExport: true,
//         },
//       ],
//     },
//   },
// ]