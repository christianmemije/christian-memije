module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  plugins: ['prettier'],
  rules: {}
};
