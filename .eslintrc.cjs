module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'backend/**/*'],
  rules: {
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
  }
}
