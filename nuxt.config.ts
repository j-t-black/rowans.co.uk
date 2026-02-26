// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
    }
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: false
      }
    }
  },

  ui: {
    theme: {
      colors: ['red']
    }
  }
})
