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
  // add your custom rules here
  rules: {}
}
