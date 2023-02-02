// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
        '@nuxtjs/apollo',
        '@pinia/nuxt',

      ],

      i18n: {
        // add `vueI18n` option to `@nuxtjs/i18n` module options
        vueI18n: {
          legacy: false,
          locale: 'en',
          messages: {
            en: {
              welcome: 'Welcome'
            },
            lo: {
              welcome: 'ບາຍດີ'
            }
          }
        }
      },
      //nuxt-image
      image: {
        // Options
      },
      //nuxt-apollo configuration
      apollo: {
        clients: {
          default: {
            httpEndpoint: 'https://graphqlzero.almansi.me/api'
        }
        },
      },

      //pinia cofiguration
      imports: {
        dirs: ['./stores'],
      },
    
      pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },

})
