export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#ff728a'},
  /*
  ** Global CSS
  */
  css: ['ress', '~/assets/main.scss'
  ],
  env: ['Hoge'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-inject',
    '~/plugins/ctx-inject',
    '~/plugins/combined-inject',
    '~/plugins/vue-notifications.client',
    // mode clientつけないと "Unexpected token 'export'"のエラーになった. SSR周りかな？
    // {src: '~/plugins/vue-notifications', mode: 'client'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxt/typescript-build'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // '~/modules/simple'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
