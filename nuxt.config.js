export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Christian Memije | UI Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'short_name',
        content: 'Christian Memije'
      },
      {
        name: 'og:site_name',
        content: 'Christian Memije',
        property: 'Christian Memije'
      },
      {
        name: 'og:title',
        content: 'Christian Memije',
        property: 'Christian Memije'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Christian Memije'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'google-site-verification',
        content: 'AM6spxbPqj0n-I0_zZ44Ash9LFvweLrZwDC22wFgrVc'
      },
      {
        name: 'yandex-verification',
        content: 'be7838603ea7faf6'
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        href: 'data:image/x-icon;,',
        type: 'image/x-icon'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css', '@/assets/styles/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/markdownit'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    loaders: {
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    },
    extend() {}
  },
  generate: {
    dir: 'dist'
  }
}
