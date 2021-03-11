module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  'extends': [
    // 'plugin:vue/base',
    'plugin:vue/essential',
    'eslint:recommended',
    'prettier'
  ],
  // required to lint *.vue files
  "plugins": [
    "prettier",
    "unicorn"
  ],
  rules: {
    "no-var": "error",
    "semi": "error",
    "indent": "error",
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
}
