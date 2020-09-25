// @ts-check
const shortDescription = 'Frontend Engineer';
const longDescription =
  'Christian Memije, a Frontend Engineer interested in music, AI, and space.';
const name = 'Christian Memije';

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: `${name} | ${shortDescription}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'short_name',
        content: name
      },
      {
        name: 'description',
        content: longDescription
      },
      {
        name: 'apple-mobile-web-app-title',
        content: name
      },
      {
        property: 'og:title',
        content: name
      },
      {
        property: 'og:site_name',
        content: name
      },
      {
        property: 'og:description',
        content: longDescription
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://christianmemije.com'
      },
      {
        property: 'og:image',
        content: 'https://christianmemije.com/christian_memije.jpg'
      },
      {
        property: 'og:image:alt',
        content: name
      },
      {
        property: 'og:image:type',
        content: 'image/jpeg'
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
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    loaders: {
      fontUrl: { limit: 100000 },
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
};
