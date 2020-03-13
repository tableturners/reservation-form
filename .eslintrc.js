// module.exports = {
//     "extends": [
//         "airbnb-base",
//         "eslint:recommended",
//         "plugin:react/recommended"
//     ],
//     "plugins": [
//         "react",
//     ]
//   };

module.exports = {
    env: {
      es6: true,
      node: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
    },
  };